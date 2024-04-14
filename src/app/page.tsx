import { generateURL } from "@/utility/actions.db";
import Image from "next/image";
import { useRef, useState } from "react";
import Form from "@/components/form";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import InfoForm from "@/components/inforForm";

export default async function Home() {
  // const [shortUrl, setShortUrl] = useState<string>("");

  return (
    <>
      <main className="mx-auto max-sm:w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%] fontPoppins text-center py-7 ">
        <h1 className=" text-5xl mb-10 text-sky-800 fontRoboto font-extrabold max-sm:text-3xl">
          No-Big-url
        </h1>

        <div className=" border-1 px-5 py-[2.9rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
          <h2 className="text-3xl mb-5 font-bold text-gray-700 fontRoboto max-sm:text-2xl">
            Paste the URL to be shortened
          </h2>
          <Form></Form>

          <p>
            {" "}
            <b className="font-bold uppercase">no-big-url</b> is a free tool
            that generates a shortened url for utility
          </p>
          <p>
            create and share compact and convenient links that maintain
            asthestics and professionalism
          </p>
        </div>
        <div className=" my-20 border-1 px-5 py-[2.9rem] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
          <h2 className="text-3xl max-sm:text-2xl mb-5 font-bold text-gray-700 fontRoboto">
            Paste the short URL to get info about
          </h2>
          <InfoForm></InfoForm>

          {/* <p> <b className="font-bold uppercase">no-big-url</b>  is a free tool that generates a shortened url for utility</p>
        <p>
          create and share compact and convenient links that maintain asthestics and professionalism
        </p> */}
        </div>
      </main>
      <div
        className={` fontPoppins flex flex-col  bg-gray-400 h-20 w-full max-sm:text-sm`}
      >
        <h2 className="text-center mt-4 font-bold ">
          © 2024 no-big.com - shorten long links to short and cute ones
        </h2>
        <div className={` flex justify-center mt-3 font-bold gap-4`}>
          <a rel="noopener" href="https://github.com/aaakash06/no-big">
            <span className="flex items-center gap-1">
              <FaGithub />
              Github
            </span>
          </a>
          <a rel="noopener" href="https://www.linkedin.com/in/aakash-bagale/">
            <span className="flex items-center gap-1">
              <FaLinkedin />
              Linkedin
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
