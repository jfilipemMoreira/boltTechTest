// pages/profile.js
import Layout from '../../components/layout'
import { PrismaClient } from '@prisma/client';

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findOne({
    include: { projects: true },
    where: {
      id: Number(params.id)
    }
  });

  console.log(user)
 
  return {
    props: { user },
  }
}

const Profile = ({ user }) => {
  // Show the user. No loading state is required
  return (
    <Layout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export default Profile