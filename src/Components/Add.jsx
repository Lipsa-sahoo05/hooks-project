import React from 'react'
import { useState } from 'react'

function Add() {
    const [A , setA]=useState(0);
    const [B, setB ]=useState(0);
    const [result , setresult]=useState(0);

    const res=() =>{
        setresult(parseFloat(A)+ parseFloat(B));
    }
    const res2=() =>{
        setresult(parseFloat(A)- parseFloat(B));
    }
    const store1=(e)=>{
        setA(e.target.value);
    }
    const store2=(e)=>{
        setB(e.target.value);
    }

  return (
    <>
    <h1>Calculator</h1>
    <input type='text' onChange={store1} placeholder='Enter first no'></input>
    <input type='text' onChange={store2} placeholder='Enter first no'></input>
    <input type='button' onClick={res} value='ADD'/>
    <input type='button' onClick={res2} value='SUB'/>
    <h1>RESULT:{result}</h1>
    </>
  )
}
export default Add
