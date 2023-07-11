import { pages } from "@/modules/common";

const Navbar = () => {
  return (
    <div className="flex bg-transparent-500 w-full justify-between space-x-5 h-20 items-center px-4">
      <div>
        <span>Stefanos Michelakis</span>
      </div>
      <div className="flex justify-items-center space-x-4 ">
        {pages.map((page) => (
          <span key={page.pageUrl} className="ease-in-out duration-500 h-fit bg-transparent font-semibold text-lg py-2 px-3 cursor-pointer hover:bg-slate-100 hover:scale-110 text-gray-700 rounded-3xl">
            {page.pageName}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
