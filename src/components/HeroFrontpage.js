import Image from 'next/image';
import { kleines_mockup } from '../../public/images/mockups';
const HeroFrontpage = () => {
  return (
    <section className=' mt-20 mx-a sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12  container mx-auto '>
      <article className='sm:order-2'>
        <div id='home'></div>

        <h1 className='sm:hidden '>Nyt website?</h1>

        <h1 className='hidden sm:block'>
          Skræder&shy;syet løsning til din <span className=' text-col-accent'>virksom&shy;hed</span>
        </h1>

        <p className=' sm:inline hidden'>
          Sørg for at dine kunder får en unik oplevelse når de besøger din hjemmeside. Få en skræddersyet løsning til netop din
          virksomhed.
        </p>
        <div className='justify-center hidden sm:flex '>
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
  );
};

export default HeroFrontpage;
