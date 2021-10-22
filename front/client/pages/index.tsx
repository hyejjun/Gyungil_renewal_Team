import React, { useState } from "react";
import Head from "next/head";
import ItemList from './components/list/ItemList'



export default function Home() {

  return (
    <div className="container">
      <div>

        <div><ItemList /></div>
      </div>
    </div>
  );
}