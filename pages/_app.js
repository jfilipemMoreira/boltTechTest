import '../styles/global.css'
import { CookiesProvider } from "react-cookie"
export default function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}
