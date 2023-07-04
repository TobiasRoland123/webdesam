export default function Navigationbar() {
  return (
    <>
      <nav className="flex justify-between ">
        <div className="flex align-middle ">
          <h2 className="m-0 text-3xl text-col-accent ">Webdesam</h2>
        </div>
        <button className="">
          <span className=" w-10 h-1  block rounded-3xl mt-2 bg-col-accent transition-all"></span>
          <span className=" w-7 h-1  block rounded-3xl mt-2 bg-col-accent transition-all ml-auto	"></span>
          <span className=" w-4 h-1   rounded-3xl mt-2 bg-col-accent transition-all flex  ml-auto	"></span>
        </button>
        <ul className=" hidden">
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
      </nav>
    </>
  );
}
