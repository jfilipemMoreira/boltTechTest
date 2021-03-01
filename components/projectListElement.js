import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function ProjectListElement({ project }) {
    return (
        <div id={"project_" + project.id} >
            <li className={utilStyles.listItem} key={project.id}>
                <Link href={`/projects/${project.id}`}>
                    <a>{project.name}</a>
                </Link>
            </li>
        </div>
    )
}