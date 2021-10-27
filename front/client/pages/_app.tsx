// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import './test.css'
import WebLayout from '../components/layout/WebLayout'
import { wrapper } from '../store/configureStore'


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    
      <WebLayout>
        <Component {...pageProps} />
      </WebLayout>
    
  )

}

export default wrapper.withRedux(MyApp)