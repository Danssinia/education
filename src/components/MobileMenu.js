import { IoMenu } from "react-icons/io5";
import logo from "../img/logo.jpg";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Mobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="flex px-2">
        <div className="flex flex-1 items-center ">
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
        <IoMenu
          size={30}
          className="text-orange-800"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      {/* Menu */}
      {showMenu && (
        <ul className="flex flex-col gap-4 m-4 uppercase bg-gray-200 ">
          <li className="border-t-4 border-gray-300 px-4 py-1">Home</li>
          <li className="border-t-2 border-gray-300 px-4 py-1">Courses</li>
          <li className="border-t-2 border-gray-300 px-4 py-1">
            Courses Formats
          </li>
          <li className="border-t-2 border-gray-300 px-4 py-1">Add Course</li>
          <li className="border-t-2 border-gray-300 px-4 py-1">Demos</li>
          <li className="border-t-2 border-gray-300 px-4 py-1">Pages</li>
          <li className="flex items-center">
            <input
              placeholder="Search..."
              className="w-full p-4 border-2 outline-none"
            />
            <span className="bg-orange-500 w-14 h-14 text-white flex items-center justify-center">
              <FaSearch size={22} />
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Mobile;
