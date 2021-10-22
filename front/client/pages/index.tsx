import React, { useState } from "react";
import Head from "next/head";
// import NeedLogin from "./components/common/NeedLogin";
import ItemList from './components/list/ItemList'
import Link from 'next/link'

export default function Home() {

  return (
    <>
    <Link href="/SignUp">버튼</Link>
    <div className="container">
      <div>

        <div><ItemList /></div>
      </div>
      {/* <NeedLogin/> */}
    </div>
    </>
  );
}