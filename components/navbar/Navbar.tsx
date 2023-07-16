'use client';

import { pages } from "@/modules/common";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type PageUrl = typeof pages[number]['pageUrl'];

const isActiveClass = (pageUrl: PageUrl, currentLocation: PageUrl):boolean => pageUrl === currentLocation;

const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeLink, setActiveLink] = useState<PageUrl>(window.location.hash as PageUrl || '');

  useEffect(() => {
    setActiveLink(window.location.hash.split('#')[1] as PageUrl || '');
  }, [searchParams]);


  console.log(activeLink)

  const handleButtonClick = (pageUrl: string) => router.push(`#${pageUrl}`);

  return (
    <div className="font-source-sans3 flex bg-transparent-500 w-full justify-between space-x-5 h-fit items-center px-4 mt-2">
      <div>
        <span className="text-gray-900 font-semibold text-2xl ">Stefanos Michelakis</span>
      </div>
      <div className="flex justify-items-center font-semibold text-gray-900">
        {pages.map((page) => ( 
          <button key={page.pageUrl} onClick={() => handleButtonClick(page.pageUrl)} className={isActiveClass(page.pageUrl, activeLink) ? 'activeNavbarItem' : 'navbarItem'}>
            {page.pageName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
