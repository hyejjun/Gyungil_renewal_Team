import React from 'react'
import Link from 'next/link'
import Footer from './components/common/Footer'
import ItemList from './components/ItemList'

export default () =>
  <div>
    <h1>Home</h1>
    <p>Note that Web3 is not loaded for this page.</p>
    <div><Link href='/dapp'><a>My Dapp</a></Link></div>
    <div><Link href='/accounts'><a>My Accounts</a></Link></div>
    <Footer/>
    <ItemList/>
  </div>
