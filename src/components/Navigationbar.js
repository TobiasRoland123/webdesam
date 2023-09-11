import { useState } from "react";

export default function Navigationbar() {
  const [menuShown, setMenuShown] = useState(false);

  function handleMenu() {
    setMenuShown(!menuShown); // Toggle the menuShown state
  }

  return (
    <>
      <nav className="flex justify-between">
        <div className="flex align-middle">
          <h2 className="m-0 text-3xl text-col-accent">Webdesam</h2>
        </div>

        <button
          onClick={() => {
            "test test knap i navbar";
          }}
        >
          test knap i nav
        </button>

        <button
          onClick={() => {
            console.log("nav button test");
          }}
          className=" z-10"
          aria-labelledby="Menu button"
        >
          <span className="w-10  h-1 block rounded-3xl mt-2 bg-col-accent transition-all"></span>
          <span className="w-7 h-1 block rounded-3xl mt-2 bg-col-accent transition-all ml-auto"></span>
          <span className="w-4 h-1 rounded-3xl mt-2 bg-col-accent transition-all flex ml-auto"></span>
        </button>

        <div className={menuShown ? "transition-all absolute left-0 top-0" : "hidden"}>
          <ul>
            <li>
              <h3>Contact</h3>
            </li>
            <li>
              <h3>Case</h3>
            </li>
            <li>
              <h3>About</h3>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
