import { FaAngleDown, FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./nav.css";
import logo from "../img/logo.jpg";
import { FaArrowDownAZ } from "react-icons/fa6";
const Nav = () => {
  return (
    <div className="hidden absolute top-4 sm:flex bg-transparent z-10 w-full text-white">
      <div className="flex flex-1 items-center justify-center">
        <img
          src={logo}
          alt=""
          width={40}
          height={40}
          className="rounded-full mr-4"
        />
        <span className="uppercase">
          <span className="font-bold">Master</span> study
        </span>
      </div>

      <ul className="flex gap-4 md:gap-10 items-center w-[70%] pr-20 uppercase  ">
        <li>Home</li>
        <li className="course relative flex items-center gap-2 ">
          <span>course</span> <FaAngleDown />
          <div className="courses hidden flex-col absolute top-6 bg-gray-500/50 text-white w-fit p-4">
            <span>Information technologies</span>
            <span>Architecture</span>
            <span>Health science</span>
            <span>Artificial inteligence</span>
          </div>
        </li>
        <li>Courses Formats</li>
        <li className="relative">
          Add Course
          <span className="bg-red-500 absolute bottom-4 text-[8px] font-normal">
            HOT
          </span>
        </li>
        <li>Demos</li>
        <li>Pages</li>
        <li>
          <FaRegHeart size={20} />
        </li>
        <li>
          <CiSearch size={20} />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
