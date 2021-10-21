// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import './test.css'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    
    <Component {...pageProps} />
  ) 
  
}

export default MyApp