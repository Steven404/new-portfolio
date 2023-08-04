'use client';

import { pages } from "@/modules/common";
import { useRouter, useParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type PageUrl = typeof pages[number]['pageUrl'] | '';

const isActiveClass = (pageUrl: PageUrl, currentLocation: PageUrl):boolean => pageUrl === currentLocation;

interface NavbarPropsType {
  children: ReactNode;
}

const Navbar = ({children}: NavbarPropsType) => {
  const router = useRouter();
  const params = useParams();

  const [activeLink, setActiveLink] = useState<PageUrl>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.hash.split('#')[1] as PageUrl || '');
    }
  }, [params]);

  const handleButtonClick = (pageUrl: string) => router.push(`#${pageUrl}`);

  return (
    <div className="font-source-sans3 bg-white-desk bg-cover">
      <div className="flex w-full justify-between space-x-5 items-center px-16 z-50 h-[8vh] bg-white bg-opacity-80">
        <span className="text-gray-900 font-semibold text-2xl w-[170px]">SM</span>
        <div className="flex justify-items-center font-semibold text-gray-900">
          {pages.map((page) => ( 
            <button key={page.pageUrl} onClick={() => handleButtonClick(page.pageUrl)} className={isActiveClass(page.pageUrl, activeLink) ? 'active-navbar-item' : 'navbar-item'}>
              {page.pageName}
            </button>
          ))}
        </div>
        {/* 143px = 130 (button width) * 1.1 (the max scale of the button) */}
        <div className="flex w-[170px] justify-end">
          <button className="styled-button">Download my CV</button>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Navbar;
