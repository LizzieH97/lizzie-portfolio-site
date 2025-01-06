import Image from "next/image";
import Background from "@/components/background";
import NavBar from "@/components/nav-bar";
import { useState } from "react";

export default function CV() {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[100px_minmax(300px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_50px] sm:grid-cols-2 md:grid-cols-[200px_minmax(300px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_50px] gap-0 p-0 font-[family-name:var(--font-geist-sans)]">
      <Background className="absolute inset-0 z-0" />
      <div className="relative z-10 p-0 sm:col-span-2">
        <NavBar />
      </div>
      <div className="relative row-start-2 row-end-3 col-start-2 col-end-4 z-10 p-0 sm:p-2 w-full h-full mx-auto">
        <div className="relative w-full h-full flex flex-wrap self-start place-content-start">
          <div
            className={`relative w-[600px] h-[1200px] transition-transform duration-500 cursor-pointer transform-style preserve-3d ${
              flipped ? "rotate-y-180 " : ""
            }`}
            onClick={handleCardClick}
          >
            <div
              className={`absolute w-full h-full backface-hidden ${
                flipped ? "hidden" : ""
              }`}
            >
              <div className="w-full h-full flex flex-wrap justify-start items-start rounded-lg">
                <Image
                  src="/cv-1.png"
                  alt="My CV"
                  width={600}
                  height={1200}
                  layout="intrinsic"
                />
              </div>
            </div>

            <div
              className={`absolute w-full h-full backface-hidden ${
                flipped ? "" : "hidden"
              } rotate-y-180`}
            >
              <div className="w-full h-full flex flex-wrap justify-start items-start rounded-lg">
                <Image
                  src="/cv-2.png"
                  alt="My CV"
                  width={600}
                  height={1200}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative row-start-2 h-[60px] w-[375px] col-start-3 bg-custom-light-purple text-white text-xl font-bold mt-20 p-4 ml-[90px] rounded-lg w-max">
        Click me to turn me over!
        <div class="absolute top-1/2 left-[-16px] transform -translate-y-1/2 w-0 h-0 border-8 border-transparent border-r-custom-light-purple"></div>
      </div>
      <div class="relative row-start-2 h-[200px] w-[375px] col-start-3 bg-custom-light-purple text-white text-xl font-bold mt-40 p-4 ml-[90px] rounded-lg w-max">
        Click here to follow some of the links posted in my CV:
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://github.com/LizzieH97"
              className="text-m font-normal"
            >
              Here's my GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/elizabeth-hughes-347633171"
              className="text-m font-normal"
            >
              Here's my LinkedIn
            </a>
          </li>
          <li className="text-m font-normal">
            <a href="https://github.com/LizzieH97/Lizzie-Hughes-NC-News-Project">
              Here's my back-end project
            </a>
          </li>
          <li className="text-m font-normal">
            <a href="https://github.com/LizzieH97/nc-news-frontend-project">
              Here's my front-end project
            </a>
          </li>
          <li className="text-m font-normal">
            <a href="https://github.com/DannyGreenan/byte-size-habits/">
              Here's my final project, ByteSize Habits
            </a>
          </li>
        </ul>
        <div class="absolute top-1/2 left-[-16px] transform -translate-y-1/2 w-0 h-0 border-8 border-transparent border-r-custom-light-purple"></div>
      </div>
      <div class="relative row-start-2 h-[70px] w-[375px] col-start-3 bg-custom-light-purple text-white text-xl font-bold mt-[380px] p-4 ml-[90px] rounded-lg w-max">
        For more info on each section check out the nav bar to the left of my
        cv!!
        <div class="absolute top-1/2 left-[-16px] transform -translate-y-1/2 w-0 h-0 border-8 border-transparent border-r-custom-light-purple"></div>
      </div>
    </div>
  );
}
