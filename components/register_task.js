import Task from './task'

function toggleAddTask(event) {
    console.log("oi")
    const formElementToAddProject = document.getElementById("addTask");

    const toggled = formElementToAddProject.getAttribute("toggled")

    if (toggled == "true") {
        formElementToAddProject.style.display = "none";
        formElementToAddProject.setAttribute("toggled", "false")
    } else {
        formElementToAddProject.style.display = "block";
        formElementToAddProject.setAttribute("toggled", "true")
    }

}
function validateInput() {

}
async function addTask(event, project) {
    validateInput()
    event.preventDefault()
    const name = event.target.task_name.value;
    const desc = event.target.task_desc.value;
    const startDate = event.target.task_start_date.value;
    const endDate = event.target.task_end_date.value;
    const createProjectRequest = {
        name,
        desc,
        startDate,
        endDate,
        project: { connect: { "id": project } }
    };
    const newProject = await fetch('/api/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(createProjectRequest),
    })

    location.reload()
}
export default function RegisterTask({ project }) {

    return (<div>
        <form id="addTask" toggled="false" onSubmit={(e) => addTask(e, project)} style={{ "display": "none" }}>
            <label htmlFor="task_name">Task Name</label>
            <input id="task_name" name="task_name" type="text" autoComplete="name" required />
            <br />
            <label htmlFor="task_desc">Task Description</label>
            <input id="task_desc" name="task_desc" type="text" autoComplete="Description" required />
            <br />
            <label htmlFor="task_start_date">Start Date</label>
            <input id="task_start_date" name="task_start_date" type="date" required />
            <br />
            <label htmlFor="task_end_date">End Date</label>
            <input id="task_end_date" name="task_end_date" type="date"  />
            <br />


            <button type="submit">Register</button>
        </form>
        <button className="favorite styled" onClick={(e) => toggleAddTask(e)} type="button">Toggle Task Form</button>
    </div>
    )
}