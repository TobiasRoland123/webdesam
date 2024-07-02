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
      <Navigationbar />
      <HeroFrontpage />
      <Usps />
      <Contact />

      <Cases />
      <About />
    </main>
  );
}
