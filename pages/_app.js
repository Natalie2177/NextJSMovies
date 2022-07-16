import '../styles/index.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <> 
  <Header/>
  <Main />
  <Component {...pageProps} />
  <Footer/> 
  </>
}

export default MyApp
