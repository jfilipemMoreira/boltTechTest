import Link from 'next/link';
import Layout from '../components/layout'
function validateInput() {

}
async function addUser(event) {
    validateInput()
    event.preventDefault()
    const name = event.target.usr_name.value;
    const password = event.target.usr_password.value;
    const createUserRequest = {
        name,
        password
    };
    const newUser = await fetch('/api/registerUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(createUserRequest),
    })
    const userResponse = await newUser.json()
    const newUserUrl = "/profile/" +  userResponse.data.id
    window.location.href = newUserUrl
}
export default function Register({ user }) {

    return (<div>
        <form id="addUser" toggled="false" onSubmit={(e) => addUser(e)} >
            <label htmlFor="usr_name">User Name</label>
            <input id="usr_name" name="usr_name" type="text" autoComplete="name" required />
            <br />
            <label htmlFor="usr_password">User Password</label>
            <input id="usr_password" name="usr_password" type="password" autoComplete="Description" required />
            <br />
            <button type="submit">Register</button>
        </form>
    </div>
    )
}
 