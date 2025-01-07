import Image from "next/image";
import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import { useState } from "react";
import AltBackground from "@/components/alt-background";
import Markets from "@/components/markets";

export default function Hobbies() {
  return (
    <div className="grid grid-cols-[200px_auto_auto_auto] grid-rows-4 ">
      <Background />
      <NavBar />
      <div className="col-start-2 row-start-1 grid grid-cols-4 grid-rows-auto justify-items-center">
        <h1 className="col-span-3 row-start-1 text-4xl font-bold text-white pt-1 p-1 underline">
          Crocheting
        </h1>
        <p className="col-span-3 row-start-2 text-l font-bold text-white p-6 text-center">
          I just love it! I started crocheting just over a year ago to make a
          Christmas present for my dad (the rocket from Wallace and Gromit it
          was great), and from there it has become a major part of my life. I
          have sold my crocheted "pals" at three markets so far, as well as on
          Etsy. I'm so proud of all of my little crocheted pals and I hope they
          all go to lovely homes!
        </p>
        <Markets />
        <div className="col-start-3 col-end-4 row-span-4">
          <h2 className="font-bold text-xl text-white text-center ">
            My Creations
          </h2>
        </div>
      </div>
    </div>
  );
}
