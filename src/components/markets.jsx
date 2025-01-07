import AltBackground from "./alt-background";

export default function Markets() {
  const subtitle =
    "col-start-2 text-2xl font-bold text-white p-0 pl-[35px] underline";
  const text =
    "col-start-2 row-span-3 text-l font-bold text-white p-0 text-center";
  return (
    <div className="col-start-1 col-end-3 row-start-3 relative p-0">
      <div className="grid grid-cols-3 grid-rows-[50px_auto_auto_auto] gap-4 pl-2 justify-self-start">
        <h2 className={subtitle}>Markets</h2>

        <AltBackground className="relative top-0 left-0 w-full z-0" />
        <p className={text}>
          Here's a selection of photos from my markets - my very first market in
          Warrington, a market in New Brighton, and my Christmas market in
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
  );
}
