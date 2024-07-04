import Image from 'next/image';
import { Case } from '../components/Case';
import { useState, useEffect } from 'react';
import { kleines_mockup, foofest_mockup, nbu_mockup } from '../../public/images/mockups';
import Navigationbar from '@/components/Navigationbar';
import HeroFrontpage from '@/components/HeroFrontpage';
import Usps from '@/modules/Usps/Usps';
import Contact from '../modules/Contact/Contact';
import Cases from '@/modules/Cases/Cases';
import About from '@/modules/About/About';

export default function Home() {
  return (
    <main>
      <Navigationbar />
      <HeroFrontpage />
      <Usps />
      <Contact />

      <Cases />
      <About />
    </main>
  );
}
