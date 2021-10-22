import React, { useState } from "react";

import Shippingform from './components/shipping/shippingform'


export default function Home() {

  return (
    <div className="container">
      <div>
        <div><Shippingform /></div>
      </div>
    </div>
  );
}