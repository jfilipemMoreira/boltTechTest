// pages/login.js
import { useCookies } from "react-cookie"
import cookie from "cookie"


export function parseCookies(req) {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

const Login = (data) => {
    const [setCookie] = useCookies(["user"])

    Login.getInitialProps = async ({ req }) => {
        const data = parseCookies(req)
        return {
            cookies: data,
            allPostsData: []
        }
    }
    const handleSignIn = (event) => {
        try {
            event.preventDefault()
            const response = handleLogin(event.target.username.value, event.target.password.value)  
            console.log("Got Response")
            console.log(response)
            const data = response.data;
            setCookie("user", JSON.stringify(data.id), {
                path: "/",
                maxAge: 3600, // Expires after 1hr
                sameSite: true,
            })
            console.log("Cookie Set")
        } catch (err) {
            console.log(err)
        }
        console.log("over")
    }
    return (
            <form onSubmit={handleSignIn} >
                <label htmlFor="username">
                    <input id="username" type="text" placeholder="enter username" required />
                </label>
                <label htmlFor="password">
                    <input id="password" type="password" placeholder="enter password" required />
                </label>
                <button type="submit">Login</button>
            </form>
    )
}

async function handleLogin(username, password) {
    const loginRequestData = { username, password };
    const answer = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequestData),
    })
    console.log(answer)
    return answer.json()
}
export default Login
