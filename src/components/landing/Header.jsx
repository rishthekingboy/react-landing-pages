import { RiSearchLine, RiLuggageCartLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className="flex items-center justify-between px-5 py-4 md:py-1 relative bg-white shadow-md">
      <div className="logo  w-full md:w-fit text-xl text-gray-600  md:ml-12 font-permanent-marker">
        Alen
      </div>
      {isCollapsed && (
        <ul className="flex flex-col md:flex-row absolute md:relative right-0 top-full  mx-3 my-1 px-4 py-2 rounded-md shadow-lg md:shadow-none bg-white md:bg-blue md:flex-1  ">
          <div className="md:flex-1 md:flex justify-center ">
            <li className="px-1 border-b-2 border-black w-fit text-sm font-semibold ">
              menu
            </li>
            <li className="px-1 border-b-2 border-white hover:border-black w-fit  md:mx-3 text-sm font-semibold">
              about us
            </li>
            <li className="px-1 border-b-2 border-white hover:border-black w-fit text-sm font-semibold ">
              our specials
            </li>
            <li className="px-1 border-b-2 border-white hover:border-black w-fit md:mx-3 text-sm font-semibold">
              our locations
            </li>
            <li className="px-1 border-b-2 border-white hover:border-black w-fit  text-sm font-semibold">
              our cheffs
            </li>
          </div>

          <li className=" nav-menu my-1 md:flex   w-fit  md:items-center ">
            <span className="flex items-center md:mx-4 text-sm font-semibold">
              <RiSearchLine className="text-md" />
              <span className=" md:hidden text-sm font-semibold ml-2">Search</span>
            </span>
            <span className="flex items-center md:mx-4 text-sm font-semibold">
              <RiLuggageCartLine className="my-1 md:my-0 text-md" />
              <span className="ml-2 md:hidden text-sm font-semibold">
                5 items
              </span>
            </span>
            <span className="flex items-center">
              <BsPerson className="text-md" />
              <span className="ml-2 md:hidden text-sm font-semibold">
                Rishabh
              </span>
            </span>
          </li>
        </ul>
      )}

      <div onClick={() => setIsCollapsed(!isCollapsed)} className="md:hidden">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Header;
