import React, { useState } from 'react';
import { useSelector } from 'react-redux';


export default function Greetings() {
  const greeting = useSelector((state) => state.greeting);


  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}
