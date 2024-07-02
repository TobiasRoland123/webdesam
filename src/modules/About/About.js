import Image from 'next/image';
import { tobias_roland } from '../../../public/images/portraits';

const About = () => {
  return (
    <section className='container mx-auto'>
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
  );
};

export default About;
