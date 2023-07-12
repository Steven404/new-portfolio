'use client';

import { pages } from "@/modules/common";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleButtonClick = (pageUrl: string) => router.push(pageUrl);

  return (
    <div className="font-source-sans3 flex bg-transparent-500 w-full justify-between space-x-5 h-fit items-center px-4 mt-2">
      <div>
        <span className="text-gray-900 font-semibold text-2xl ">Stefanos Michelakis</span>
      </div>
      <div className="flex justify-items-center space-x-4 font-semibold text-gray-800">
        {pages.map((page) => (
          <button key={page.pageUrl} onClick={() => handleButtonClick(page.pageUrl)} className="ease-in-out duration-700 h-fit bg-transparent text-lg py-2 px-3 cursor-pointer hover:bg-slate-100 hover:scale-110 hover:text-gray-950  rounded-3xl">
            {page.pageName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
