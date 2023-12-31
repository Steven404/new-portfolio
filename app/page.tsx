'use client';

import AboutMe from '@/pageParts/aboutMe/AboutMe';
import Home from '@/pageParts/home/Home';
import { useRef, useState } from 'react';
import { PageUrl, pages } from '@/modules/common';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import WorkExperience from '@/pageParts/workExperience/WorkExperience';
import MyProjects from '@/pageParts/myProjects/MyProjects';
import Contact from '@/pageParts/contact/Contact';

const App = () => {
  const refs = useRef<Array<HTMLDivElement | null>>(new Array());

  const [activeLink, setActiveLink] = useState<PageUrl>('');

  const handleScroll = () => {
    if (refs.current) {
      refs.current.forEach((ref, index) => {
        if (
          ref &&
          Math.abs(ref.getBoundingClientRect().top) < window.innerHeight / 2
        ) {
          setActiveLink(index === 0 ? '' : pages[index - 1].pageUrl);
        }
      });
    }
  };

  return (
    <div
      onScroll={handleScroll}
      className="h-screen overflow-y-scroll scroll-smooth"
    >
      <Navbar activeLink={activeLink}>
        <Home ref={(element) => (refs.current[0] = element)} />
        <AboutMe ref={(element) => (refs.current[1] = element)} />
        <WorkExperience ref={(element) => (refs.current[2] = element)} />
        <MyProjects ref={(element) => (refs.current[3] = element)} />
        <Contact ref={(element) => (refs.current[4] = element)} />
      </Navbar>
    </div>
  );
};

export default App;
