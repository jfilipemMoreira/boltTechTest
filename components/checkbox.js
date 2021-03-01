import utilStyles from '../styles/utils.module.css'

async function changeState(event, task_id) {
    const changeStateRequest = JSON.stringify({ "task": task_id });
    const answer = await fetch('/api/finishTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: changeStateRequest,
    })
    const elementID = "task_" + task_id;
    const element = document.getElementById(elementID);
    element.className = utilStyles.finishedTask;
    const checkbox_id = "checkbox_task_" + task_id;
    const checkboxEl = document.getElementById(checkbox_id);
    checkboxEl.parentNode.removeChild(checkboxEl);
    return answer.json()
}
export default function Checkbox({ state, task }) {
    const isChecked = state;
    const checkbox_id = "checkbox_task_" + task
    return !isChecked ? (
        <div id={checkbox_id}>
            <label>
                <input type="checkbox"
                    onChange={(event) => changeState(event, task)} />
                <span>Task done</span>
            </label>
        </div>
    ) : (<div></div>)
}