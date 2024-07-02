import { USP } from '../../components/USP';
import { PersonSvg, creativeSvg, supportSvg, toolsSvg } from '../../../public/images/figures';

const Usps = () => {
  return (
    <section className='  mt-24 container mx-auto '>
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
  );
};

export default Usps;
