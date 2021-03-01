// pages/login.js
import { useCookies } from "react-cookie"
import cookie from "cookie"


export function parseCookies(req) {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

const Logout = (data) => {
    const [_,__,removeCookie] = useCookies(["user"])

    Logout.getServerProps = async ({ req }) => {
        const data = parseCookies(req)
        return {
            cookies: data,
            allPostsData: []
        }
    }
    const handleLogout = async (event) => {
        try {
            event.preventDefault()
            removeCookie("user", {
                path: "/",
            })
        } catch (err) {
            console.log(err)
        }
        location.reload();
    }
    return (
            <form onSubmit={handleLogout} >
                <button type="submit">Logout</button>
            </form>
    )
}

export default Logout
