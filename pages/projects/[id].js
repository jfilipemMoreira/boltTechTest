import Layout from '../../components/layout'
import Head from 'next/head'
import { PrismaClient } from '@prisma/client';
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Task from '../../components/task'
import RegisterTask from '../../components/register_task'

export async function getServerSideProps({ params }) {
  const prisma = new PrismaClient();
  const project = await prisma.project.findOne({
    include: { tasks: true },
    where: {
      id: Number(params.id)
    }
  });

  return {
    props: { project }
  }
}

export default function Project({ project }) {
  return (
    <Layout>
      <Head>
        <title>Project {project.name}</title>
      </Head>
      <ul className={utilStyles.list}>
        {project.tasks.map((task) => (
          <li className={utilStyles.listItem} key={task.id}>
            <Task info={task} />
          </li>

        ))}
      </ul>
      <RegisterTask project={project.id}/>

      <Link href={`/profile/${project.userId}`}>
        <a>Go Back to user page</a>
      </Link>
    </Layout>
  )
}

