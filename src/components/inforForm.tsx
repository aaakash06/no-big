"use client";

import { generateURL, getInfoForm } from "@/utility/actions.db";
import { redirect, useRouter } from "next/navigation";
import React, { useContext, useRef, useState } from "react";

const InfoForm= () => {
  const formAction = async (formData: FormData) => {
    if (!localStorage.getItem("requestNumber")) {
      localStorage.requestNumber = 0;
    }
    if (localStorage.requestNumber >= 20) {
      return setwarning("your request limit of 20 has reached");
    }
   let { input } = Object.fromEntries(formData);
   //@ts-ignore
    input= input.match(/\/(.*?)$/)[1];
    if (localStorage.inputInfo == input) {
      if (!info) {
        setinfo(localStorage.lastInfo);
      }

      return setwarning("Same URL! Try giving different one");
    }

    localStorage.inputInfo = input;

    //@ts-ignore
    const infoo =
      await getInfoForm(input as string);
    setinfo(infoo);
    localStorage.lastInfo = infoo;
    if (warning) {
      setwarning("");
    }

    localStorage.requestNumber++;
  };

  // const inputBox = useRef<HTMLInputElement>(null);
  const [info, setinfo] = useState("");
  const [warning, setwarning] = useState("");
  const router = useRouter()

  return (
    <>
      <form
        action={(formData) => {
          formAction(formData);
        }}
        className="flex justify-center mb- gap-0"
      >
        <input
          // ref={inputBox}
          name="input"
          type="text"
          placeholder="Enter the link here"
          className="px-4 py-2 border-2 w-[400px]"
        />
        <button className="px-3 bg-green-500 text-white">Get Info </button>
      </form>
      {warning && <div className="my-7 py-3 border-2 ">{warning}</div>}
      {info && (
        <div className="my-7 py-3 border-2 ">
         No of Clicks :  {info}
        </div>
      )}
    </>
  );
};

export default InfoForm;
