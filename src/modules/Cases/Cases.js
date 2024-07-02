const { Case } = require('@/components/Case');
import { kleines_mockup, foofest_mockup, nbu_mockup } from '../../../public/images/mockups';

const Cases = () => {
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
  return (
    <section className='container mx-auto'>
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
  );
};

export default Cases;
