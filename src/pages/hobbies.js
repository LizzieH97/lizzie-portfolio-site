import Image from "next/image";
import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import { useState } from "react";

export default function Hobbies() {
  const subtitle = "col-start-2 text-xl font-bold text-white p-2 pl-20";
  const text =
    "col-start-2 row-span-3 text-l font-bold text-white p-3 pt-[80px] text-center";
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
        <div className="col-span-2 row-start-3 grid grid-cols-3 grid-rows-[50px_auto_auto_auto]">
          <h2 className={subtitle}>Markets</h2>
          <p className={text}>
            Here's a selection of photos from my markets - my very first market
            in Warrington, a market in New Brighton and my Christmas market in
            Salford Quays (I got very excited and went very festive!)
          </p>
          <img
            src="/Screenshot from 2025-01-06 14-59-46.png"
            alt="Me at a market in the New Brighton Floral Pavillion, sat behind my stall"
            className="col-start-1 row-start-3 rounded-lg"
          />
          <img
            src="/Screenshot from 2025-01-06 14-58-51.png"
            alt="Me at a market in the Lowry Outlet Mall, stood behind my stall"
            className="col-start-3 row-start-2 rounded-lg"
          />
          <img
            src="/Screenshot from 2025-01-06 14-58-03.png"
            alt="My stall at a market in the Lowry Outlet Mall"
            className="col-start-1 row-start-2 rounded-lg"
          />
          <img
            src="/Screenshot from 2025-01-06 15-13-25.png"
            alt="My stall at a market in Warrington, me and my fiance standing behind"
            className="col-start-3 row-start-3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
