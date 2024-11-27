import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="absolute col-start-1 row-start-1 h-full flex flex-col gap-0 items-start p-0 sm:p-0 z-10">
        <ul className="flex flex-col pt-10 ">
          <li>
            <button className="overflow-hidden relative w-32 p-0.5 mt-2.5 mb-2.5 ml-8 h-12 bg-black text-white border-none rounded-md text-l font-bold cursor-pointer relative z-10 group">
              <Link href="/CV">Check out my CV!</Link>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10">
                Take a peek!
              </span>
            </button>
          </li>
          <li>...and if you want to see everything separately....</li>
          <li>
            <button className="overflow-hidden relative w-32 p-0.5 mt-2.5 mb-2.5 ml-10 h-12 bg-black text-white border-none rounded-md text-l font-bold cursor-pointer relative z-10 group">
              Professional Experience
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10">
                Take a peek!
              </span>
            </button>
          </li>
          <li>
            <button className="overflow-hidden relative w-32 p-0.5  mt-2.5 mb-2.5 ml-10 h-12 bg-black text-white border-none rounded-md text-l font-bold cursor-pointer relative z-10 group">
              Education
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10">
                Take a peek!
              </span>
            </button>
          </li>
          <li>
            <button className="overflow-hidden relative w-32 p-0.5 mt-2.5 mb-2.5 ml-10 h-12 bg-black text-white border-none rounded-md text-l font-bold cursor-pointer relative z-10 group">
              Hobbies and Interests
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10">
                Take a peek!
              </span>
            </button>
          </li>
          <li>
            <button className="overflow-hidden relative w-32 p-0.5 mt-2.5 mb-2.5 ml-10 h-12 bg-black text-white border-none rounded-md text-l font-bold cursor-pointer relative z-10 group">
              Projects
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-5 z-10">
                Take a peek!
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
