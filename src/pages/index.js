import Background from "@/components/background";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-items-center min-h-screen p-0 pb-20 gap-2 sm:p-0 font-[family-name:var(--font-geist-sans)]">
      <Background className="col-span-full row-span-full" />
      <main className="flex flex-col gap-0 p-0 m-0 row-start-1 col-start-1 col-span-full items-center sm:items-start">
        <NavBar />
      </main>
      <footer className="row-start-3 col-span-full flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
