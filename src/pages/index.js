import Image from 'next/image';
import { PersonSvg, creativeSvg, supportSvg, toolsSvg } from '../../public/images/figures';
import { USP } from '../components/USP';
import { Case } from '../components/Case';
import { useState, useEffect } from 'react';
import { kleines_mockup, foofest_mockup, nbu_mockup } from '../../public/images/mockups';
import { tobias_roland } from '../../public/images/portraits';

const cases = [
  {
    caseName: 'Kleines',

    caseImage: kleines_mockup,
    caseLinkLabel: `Læs mere eller besøg siden`,
    caseLink: 'https://madvigux.dk/kleines/',
    caseParagraph:
      'Kleines er en guldsmed, som ligger inde på Nørrebro, og beskæftiger sig primært med unikasmykker. Vi har lavet en faceliftet udgave af hendes nuværende hjemmeside, som gør at virksomhedens karakter rigtigt skinner igennem på hjemmesiden.  ',
  },
  {
    caseName: 'Foofest',

    caseImage: foofest_mockup,
    caseLinkLabel: `Læs mere eller besøg siden`,
    caseLink: 'https://festival-otaqqwj9v-thefred94.vercel.app',
    caseParagraph:
      'Foofest er et projekt, jeg i forbindelse med en eksamen har udviklet sammen med min gruppe. Vi er selv kommet op med konceptet, som er en nordisk festival der indrager det store flotte nordlys. Siden er 2 delt da vi både har udviklet en side hvor det er muligt at se hvem der spiller på de forskellige scener, samt et flow hvor det er muligt at bestille sine biletter.',
  },
  {
    caseName: 'NBU',

    caseLinkLabel: `Læs mere eller besøg siden`,
    caseImage: nbu_mockup,
    caseLink: 'https://madvigux.dk/kleines/',
    caseParagraph:
      'Nørrebro united, bedre kendt som NBU har en hjemmeside med rigtig meget information. Derfor har vi udviklet en udgave af deres site, hvor det er nemt at finde præcis den information du var på udkig efter. Denne side er også en prototype)',
  },
];

export default function Home() {
  const [menuShown, setMenuShown] = useState(false);
  const [vpWidth, setVpWidth] = useState(0); // Set initial value to 0

  const sm = 640;
  const lg = 1024;

  useEffect(() => {
    // Update vpWidth after component mounts on the client-side
    setVpWidth(window.innerWidth);

    // Add an event listener to update vpWidth when the window is resized
    const handleResize = () => setVpWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  function handleMenu() {
    setMenuShown(!menuShown); // Toggle the menuShown state
  }
  return (
    <main>
      <nav
        className={`${
          !menuShown ? ' absolute top-4 flex w-11/12 justify-between  ' : ' fixed top-4 flex w-11/12  justify-between  '
        } sm:static sm:w-auto lg:max-w-5xl lg:mx-auto lg:my-0`}
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
      <section className=' mt-20 mx-a sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12  sm:max-w-5xl mx-auto '>
        <article className='sm:order-2'>
          <div id='home'></div>

          {vpWidth < sm ? (
            <h1>Nyt website?</h1>
          ) : (
            <h1>
              Skræder&shy;syet løsning til din <span className=' text-col-accent'>virksom&shy;hed</span>
            </h1>
          )}

          <p>
            {vpWidth > sm
              ? `Sørg for at dine kunder får en unik oplevelse når de besøger din hjemmeside. Få en skræddersyet løsning til netop din virksomhed.`
              : ''}
          </p>
          <div
            className='
     justify-center hidden sm:flex '
          >
            <a
              className=' items-center flex justify-center align-middle mt-8 border-none w-44 h-14 border rounded-md bg-col-accent text-white text-xl font-bold '
              href='#contact'
            >
              Kontakt mig
            </a>
          </div>
        </article>

        <Image
          className=' mx-auto sm:order-1 '
          src={kleines_mockup}
          width={500}
          height={500}
          alt='A mock of a case that has been made by wedesam'
        />
        <div
          className='
    flex justify-center sm:hidden '
        >
          <a
            className=' items-center flex justify-center align-middle mt-8 border-none w-44 h-14 border rounded-md bg-col-accent hover:border-4 hover:border-col-secondary'
            href='#contact'
          >
            <span className='text-xl text-white m-0'>Kontakt mig</span>
          </a>
        </div>
      </section>
      <section className='  mt-24 sm:max-w-5xl mx-auto '>
        <h2 className=' text-center sm:text-start '>Hvorfor vælge os?</h2>

        <div className='sm:flex sm:justify-evenly sm:gap-8 lg:gap-16'>
          <USP
            uspHeading={' Skræddersyede løsninger'}
            uspParagraph={
              'Her arbejder vi ikke med templates, og begrænsede løsninger. Vi bygger din løsning fra bunden præcis som du ønsker den. Du får lov til at differentiere dig fra dine konkurrenter og være den, som dine potentielle kunder kommer til at huske. '
            }
            svg={toolsSvg}
            svgAlt={'Siluette of a person'}
          />{' '}
          <USP
            uspHeading={'Support og vedligeholdelse '}
            uspParagraph={
              'Selv efter at din hjemmeside er færdig kan den have brug for små opdateringer eller ændringer. Dette er noget som vi hjælper med, så du er sikret at din hjemeside altid spiller 100%'
            }
            svg={supportSvg}
            svgAlt={'Siluette of a person'}
          />
          <USP
            uspHeading={' Design og kreativitet'}
            uspParagraph={
              'Få lavet dit helt eget design, som viser din virksomhed fra sin bedste side, men som samtidig fungerer perfekt for dine kunder. Lad din virksomhed og dens værdier skinne igennem på din hjemmeside, så dine kunder ikke er i tvivl om hvad lige præcis i står  for. '
            }
            svg={creativeSvg}
            svgAlt={'Siluette of a person'}
          />
        </div>
      </section>

      <section className=' mx-auto sm:max-w-5xl mt-24'>
        <div id='contact'></div>
        <h2>Kontakt os</h2>
        <div className='  sm:grid sm:grid-cols-2 sm:gap-12 lg:gap-16 '>
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            onSubmit='submit'
          >
            <input
              type='hidden'
              name='form-name'
              value='contact'
            />

            <div className='  flex flex-col mt-4 mb-2'>
              <label
                className=' text-base text-col-accent'
                for='name'
              >
                Fulde navn
              </label>
              <input
                className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none'
                type='text'
                name='name'
                id='name'
                autoComplete='name'
                spellCheck='false'
                required
              />
            </div>
            <div className='  flex flex-col mt-4 mb-2'>
              <label
                className=' text-base text-col-accent'
                for='email'
              >
                Email
              </label>
              <input
                className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none'
                type='email'
                name='email'
                id='email'
                inputMode='email'
                autoComplete='email'
                spellCheck='false'
                required
              />
            </div>
            <div className='  flex flex-col mt-4 mb-2'>
              <label
                className=' text-base text-col-accent'
                for='tel'
              >
                Telefon nummer
              </label>
              <input
                className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none'
                type='text'
                name='tel'
                id='tel'
                inputMode='tel'
                autoComplete='tel'
                required
              />
            </div>
            <div className='  flex flex-col mt-4 mb-2'>
              <label
                className=' text-base text-col-accent'
                for='message'
              >
                Din besked
              </label>
              <textarea
                className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary  rounded-md border-none '
                id='message'
                name='message'
                rows='5'
                cols='33'
                required
              ></textarea>
            </div>
            <div className='  flex flex-col mt-4 mb-2'>
              <label
                className=' text-base text-col-accent'
                for='time'
              >
                Hvornår passer et opkald dig?
              </label>
              <select
                className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary  rounded-md border-none '
                id='time'
                name='time'
                required
              >
                <option value={''}>---Vælg venligts tidsrum---</option>
                <option value={'09-12'}>Mellem 09-12</option>
                <option value={'12-15'}>Mellem 12-15</option>
                <option value={'15-18'}>Mellem 15-18</option>
              </select>
            </div>
            <div className='flex justify-end'>
              <button
                className=' mt-8 border-none w-44 h-14 border rounded-md bg-col-accent'
                type='submit'
              >
                <h3 className=' text-xl m-0 text-col-primary'>Send</h3>
              </button>
            </div>
          </form>

          <article className='hidden sm:block'>
            <h3>Digital tilstedeværelse kan være kompliceret, skriv endelig hvis du har spørgsmål</h3>
            <p>
              Tøv ikke med at kontakte mig! Uanset om du har spørgsmål, brug for rådgivning eller ønsker at få bygget en helt ny
              hjemmeside, er jeg her for at hjælpe. Lad os starte en samtale, og sammen kan vi skabe en fantastisk og effektiv
              online tilstedeværelse. Kontakt mig i dag, og lad os begynde på denne spændende rejse sammen!
            </p>
          </article>
        </div>
      </section>

      <section className='max-w-5xl mx-auto'>
        <div id='cases'></div>
        <h2 className='text-center mt-24 sm:text-start'>Cases</h2>

        <div className=' sm:grid sm:grid-cols-3 sm:gap-12 lg:gap-16'>
          {cases.map((caseDetails) => (
            <Case
              key={caseDetails.caseName}
              caseImage={caseDetails.caseImage}
              caseName={caseDetails.caseName}
              caseLink={caseDetails.caseLink}
              caseParagraph={caseDetails.caseParagraph}
              caseLinkLabel={caseDetails.caseLinkLabel}
            />
          ))}
        </div>
      </section>

      <section className='max-w-5xl mx-auto'>
        <div id='about'></div>
        <h2 className='text-center sm:text-start'>Om os</h2>

        <article className=' sm:grid sm:grid-cols-2 sm:gap-12 lg:gap-16'>
          <div>
            <h3
              className='mt-4
            '
            >
              Lidt om os
            </h3>
            <p>
              Webdesam er et lille digitalt bureau, som ligger vægt på at opfylde kundens ønsker. Teamet består på nuværende
              tidspunkt af Tobias som har erfaring med hele den kreative proces der skal til for at bygge en unik hjemmeide. Lyder
              vi som noget for dig, så hold dig ikke tilbage og kontakt os endelig gennem{' '}
              <a
                href='#contact'
                className=' text-col-accent'
              >
                formularen
              </a>{' '}
              på siden.
            </p>
          </div>

          <Image
            className=' aspect-square object-cover mx-auto rounded-2xl'
            src={tobias_roland}
            width={500}
            height={500}
            alt='Billede af Tobias Roland'
          />
        </article>
      </section>
    </main>
  );
}
