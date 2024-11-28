import Link from "next/link";
import AltBackground from "./alt-background";

function NavButton({ href, text }) {
  return (
    <Link href={href}>
      <div className="overflow-hidden relative w-32 p-0 mt-0.5 mb-0.5 ml-1 h-12 bg-black text-white border-none rounded-md text-l font-bold cursor-pointer relative z-10 group flex items-center text-center justify-center">
        {text}
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-custom-purple rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-custom-purple rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10">
          Take a peek!
        </span>
      </div>
    </Link>
  );
}

export default function NavBar() {
  return (
    <>
      <nav className="absolute col-start-1 row-start-1 h-full flex flex-col gap-0 items-start p-2.5 sm:p-0 z-10 left-0">
        <AltBackground />

        <ul className="flex flex-col pt-10 p-6 pt-20">
          <h1 className="text-white text-xl pt-1 pb-1 font-bold pl-1">
            Hi! I'm Lizzie
          </h1>
          <li>
            <NavButton href="/CV" text="Check out my CV!" />
          </li>
          <li>
            <NavButton
              href="/professional-experience"
              text="Professional Experience"
            />
          </li>
          <li>
            <NavButton href="/education" text="Education" />
          </li>
          <li>
            <NavButton href="/hobbies" text="Hobbies and Interests" />
          </li>
          <li>
            <NavButton href="/projects" text="Projects" />
          </li>
        </ul>
      </nav>
    </>
  );
}
