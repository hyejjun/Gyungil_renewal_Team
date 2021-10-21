import React, { useState } from "react";
import Head from "next/head";
import NeedLogin from "./components/common/NeedLogin";


export default function Home() {
  const [text, setText] = useState<string>("자바스크립트");

  setTimeout(() => {
    // setText(0)
    setText("타입스크립트")
  }, 1000)

  return (
    <div className="container">
      <div>
        <span>{text} 적용 완료</span>
      </div>
      <NeedLogin/>
    </div>
  );
}