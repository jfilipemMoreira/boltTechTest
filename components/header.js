 import Login from '../pages/login'
 import Logout from '../pages/logout'

 export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header (data) {
  Header.getInitialProps = async ({ req }) => {
    const data = parseCookies(req)
    console.log("Getting Header Cookies")
    console.log(data)
    return {
        cookies: data,
        allPostsData: []
    }
}
  return data ? (
    <header>
      <Login/>
    </header>
  ) : (<header>
    <Logout/>
  </header>)
}