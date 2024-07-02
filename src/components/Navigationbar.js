import { useState } from 'react';

export default function Navigationbar() {
  const [menuShown, setMenuShown] = useState(false);

  function handleMenu() {
    setMenuShown(!menuShown); // Toggle the menuShown state
  }

  return (
    <>
      <nav
        className={`${
          !menuShown ? ' absolute top-4 flex w-11/12 justify-between  ' : ' fixed top-4 flex w-11/12  justify-between  '
        } sm:static container lg:mx-auto lg:my-0`}
      >
        <div className='flex align-middle z-10 '>
          <a href='#home'>
            <h2 className='m-0 text-3xl text-col-accent'>Webdesam</h2>
          </a>
        </div>

        <button
          onClick={() => {
            handleMenu();
          }}
          className=' z-10 sm:hidden'
        >
          <span
            className={
              !menuShown
                ? 'w-10  h-1 block rounded-3xl mt-2 bg-col-accent transition-all'
                : 'w-10  h-1 block rounded-3xl mt-2 bg-col-accent transition-all translate-y-2 rotate-45'
            }
          ></span>
          <span className={!menuShown ? 'w-7 h-1 block rounded-3xl mt-2 bg-col-accent transition-all ml-auto' : 'hidden'}></span>
          <span
            className={
              !menuShown
                ? 'w-4 h-1 rounded-3xl mt-2 bg-col-accent transition-all flex ml-auto'
                : 'w-10  h-1 block rounded-3xl mt-2 bg-col-accent transition-all  -translate-y-1 -rotate-45'
            }
          ></span>
        </button>

        <div
          className={` ${
            menuShown
              ? 'transition-all fixed left-0 top-0  bg-col-primary w-full  h-full flex pt-24 justify-center text-center '
              : ' transition-all fixed left-full top-0  bg-col-primary w-full  h-full flex pt-24 justify-center text-center  '
          } sm:left-0 sm:bg-transparent sm:pt-0 sm:h-a sm:items-center sm:h-auto sm:static sm:w-auto`}
        >
          <ul className='flex flex-col sm:flex-row gap-12 pt-8 sm:pt-0'>
            <li>
              <a
                href='#contact'
                onClick={handleMenu}
              >
                <h3 className=' m-0  hover:text-col-accent hover:underline transition-all'>Kontakt</h3>
              </a>
            </li>
            <li>
              <a
                href='#cases'
                onClick={handleMenu}
              >
                <h3 className=' m-0  hover:text-col-accent hover:underline transition-all'>Cases</h3>
              </a>
            </li>
            <li>
              <a
                href='#about'
                onClick={handleMenu}
              >
                <h3 className=' m-0  hover:text-col-accent hover:underline transition-all'>Om os</h3>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
