import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import cookie from "cookie"
import Login from './login'


export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

export default function Home(data) {
  Home.getInitialProps = async ({ req }) => {
    console.log("Getting home cookies")
    const data = parseCookies(req)
    console.log(data)
    return {
      cookies: data,
      allPostsData: []
    }
  }
  console.log("HOME DATA")
  console.log(data)
  return data != {} ? (<Layout home><p>val1</p></Layout> ) : ( <Layout home><p>val2</p></Layout>)
    /*<Layout home>
      {/* Keep the existing code here *}

      {/* Add this <section> tag below the existing <section> tag *}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {data.allPostsData && data.allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>

          ))}
        </ul>
      </section>
    </Layout>
  ) */
}
