import ProjectListElement from './projectListElement'

function toggleAddProject(event) {
    const formElementToAddProject = document.getElementById("addProject");

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
async function addProject(event, user) {
    validateInput()
    event.preventDefault()
    const name = event.target.prj_name.value;
    const description = event.target.prj_desc.value;
    const createProjectRequest = {
        name,
        description,
        user: { connect: { "id": user } }
    };
    const newProject = await fetch('/api/addProject', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(createProjectRequest),
    })

  /*  const url = '/profile/'+ user
    fetch(url,{
        method: 'GET',
    }).then(response => response.text())
    .then(data => {
        document.open();
        document.write(data);
        document.close();
    });*/
    location.reload()
}
export default function registerProject({ user }) {

    return (<div>
        <form id="addProject" toggled="false" onSubmit={(e) => addProject(e, user)} style={{ "display": "none" }}>
            <label htmlFor="prj_name">Project Name</label>
            <input id="prj_name" name="prj_name" type="text" autoComplete="name" required />
            <br />
            <label htmlFor="prj_desc">Project Description</label>
            <input id="prj_desc" name="prj_desc" type="text" autoComplete="Description" required />
            <br />
            <button type="submit">Register</button>
        </form>
        <button className="favorite styled" onClick={(e) => toggleAddProject(e)} type="button">Toggle Project Form</button>
    </div>
    )
}