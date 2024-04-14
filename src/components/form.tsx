"use client"


import { generateURL } from '@/utility/actions.db';
import React, { useContext, useRef, useState } from 'react'

const Form = () => {

 const formAction = async (formData: FormData) => {
  
  if(!localStorage.getItem('requestNumber')){
    localStorage.requestNumber = 0 ; 
  }
  if(localStorage.requestNumber >=20){
    return  setwarning('your request limit of 20 has reached'); 
    }
    const { input } = Object.fromEntries(formData);
    if(localStorage.input == input){
if(!shortUrl){
  setShortUrl(localStorage.lastUrl); 
}

      return setwarning('Same URL! Try giving different one')
    }
    
localStorage.input = input; 

   const {shortId} = await generateURL(input as string);
   setShortUrl(shortId); 
   localStorage.lastUrl = shortId; 
   if(warning){
    setwarning('')
   }
   
   localStorage.requestNumber++; 
  }

  // const inputBox = useRef<HTMLInputElement>(null);
  const [shortUrl, setShortUrl] = useState(''); 
  const [warning, setwarning] = useState(''); 


  return (<>
      <form
    action={(formData)=>{
      formAction(formData)
 }}
    className="flex justify-center mb-5 gap-0"
  >
    <input
      // ref={inputBox}
      name="input"
      type="text"
      placeholder="Enter the link here"
      className="px-4 py-2 border-2 w-[400px]"
    />
    <button className="px-3 bg-sky-500 text-white">Shorten URL</button>
  </form>
  {warning && (
          <div className="my-7 py-3 border-2 ">
            {warning}
          </div>
        )}
  {shortUrl && (
          <div className="my-7 py-3 border-2 ">
         Your short URL :  <a className='text-sky-600 underline' href={`localhost:3000/${shortUrl}`}> localhost:3000/{shortUrl}</a>  
          </div>
        )}
    
   
  
  </>


  )
}

export default Form