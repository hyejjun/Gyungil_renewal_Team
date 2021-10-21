// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Styled from 'styled-components'
import GlobalStyles from '.'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GlobalStyles/> */}
      <Component {...pageProps}/>
    </>
  )

}

export default MyApp

