import Date from './date'
import Checkbox from './checkbox'
import utilStyles from '../styles/utils.module.css'

export default function Task({ info }) {
    return (
        <div title={info.endDate ? info.endDate : "No End Date Defined"} id={"task_" + info.id} className={info.isFinished ? utilStyles.finishedTask : utilStyles.onGoingTask }>
            <h5>Task {info.name}</h5>
            <p >Description <br />{info.desc}</p>
            <small >
                Start Date: <Date dateString={info.startDate} />
            </small>
            <Checkbox state={info.isFinished} task={info.id} />
        </div>
    )
}