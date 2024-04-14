import { generateURL } from "@/utility/actions.db";
import Image from "next/image";
import { useRef, useState } from "react";
import Form from "@/components/form";
export default async function Home() {

  // const [shortUrl, setShortUrl] = useState<string>("");

  return (
    <main className="mx-auto w-[90%] text-center py-7 ">
      <h1 className="font-bold text-5xl mb-7 text-sky-800  ">No-Big-url</h1>

      <div className="shadow-md border-2 p-5 py-7  ">
        <h2 className="text-3xl mb-5 font-bold text-gray-700">
          Paste the URL to be shortened
        </h2>
<Form></Form>
      

        <p>ShortURL is a free tool to shorten URLs and generate short links</p>
        <p>
          URL shortener allows to create a shortened link making it easy to
          share
        </p>
      </div>
    </main>
  );
}
