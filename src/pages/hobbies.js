import Image from "next/image";
import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import { useState } from "react";

export default function Hobbies() {
  const subtitle = "col-start-1 text-xl font-bold text-white p-2";
  return (
    <div className="grid grid-cols-[200px_auto_auto_auto] grid-rows-4 ">
      <Background /> <NavBar />
      <div className="col-start-2 row-start-1 grid grid-cols-3 grid-rows-auto justify-items-center">
        <h1 className="col-span-3 row-start-1 text-4xl font-bold text-white pt-8 p-1">
          Crocheting
        </h1>
        <p className="col-span-3 text-l font-bold text-white p-6 text-center">
          I just love it! I started crocheting just over a year ago to make a
          Christmas present for my dad (the rocket from Wallace and Gromit it
          was great), and from there it has become a major part of my life. I
          have sold my crocheted "pals" at three markets so far, as well as on
          Etsy. I'm so proud of all of my little crocheted pals and I hope they
          all go to lovely homes!
        </p>
        <div className="col-start-1 col-end-2 row-start-3 grid grid-cols-2 grid-rows-4">
          <h2 className={subtitle}>Markets</h2>
          <Image
            src="/IMG_9203.jpg"
            alt="Me at a market in the New Brighton Floral Pavillion, sat behind my stall"
            width={400}
            height={300}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}
