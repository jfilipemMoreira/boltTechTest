// pages/profile.js
import Layout from '../../components/layout'
import { PrismaClient } from '@prisma/client';
import ProjectListElement from '../../components/projectListElement'
import utilStyles from '../../styles/utils.module.css'
import RegisterProject  from '../../components/register_project'

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findOne({
    include: { projects: true },
    where: {
      id: Number(params.id)
    }
  });

  return {
    props: { user },
  }
}

const Profile = ({ user }) => {
  // Show the user. No loading state is required
  return user.projects && user.projects.length > 0 ? (
    <Layout>
      <h1>Your Profile 2 </h1>
      <ul className={utilStyles.list} id={"project_list_"+ user.id}>
        {user.projects.map((project) => (
          <ProjectListElement project={project}/>
        ))}
      </ul>
      <RegisterProject user={user.id}/>
         </Layout>
  ) : (
      <Layout>
        <h1>Your Profile</h1>
        <RegisterProject user={user.id}/>
      </Layout>
    )
}

export default Profile