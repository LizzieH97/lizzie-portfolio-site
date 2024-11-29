import Image from "next/image";
import Background from "@/components/background";
import NavBar from "@/components/nav-bar";

export default function CV() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[100px_minmax(300px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_50px] sm:grid-cols-2 md:grid-cols-[200px_minmax(300px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_50px] gap-0 p-0 font-[family-name:var(--font-geist-sans)]">
      <Background className="absolute inset-0 z-0" />
      <NavBar />

      {/* Image Container */}
      <div className="relative row-start-2 row-end-3 col-start-2 col-end-4 z-10 p-0 sm:p-2 w-full h-full mx-auto">
        <div className="relative w-full h-full">
          <Image
            src="/cv-1.png"
            alt="My CV"
            width={600}
            height={1200}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}
