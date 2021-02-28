import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout ({children}) {
  const userid = 0
  return (
    <>
      <Header {...userid} />
      <main>
        {children}
      </main>
      <Footer {...userid} />
    </>
  )
}