import { TbMathGreater } from "react-icons/tb";

import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { AiTwotonePrinter } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import cam from "../img/cam.jpg";
const Footer = () => {
  return (
    <div className="bg-[#273044] mt-36">
      <div className="max-sm:flex max-sm:flex-col gap-4 grid grid-cols-4 max-sm:pl-8  p-16 text-white">
        <div>
          <p className="font-bold  text-xl">ABOUT</p>
          <p className="pt-6 pb-4 text-lg ">
            {" "}
            <span className="text-blue-600">Masterstudy</span> is Education
            WordPress theme featured by Learning Management System (LMS) for
            online education. Developed by <span></span>
            <span className="text-blue-600">StylemixThemes</span>. Lorem ipsum
            dolor sit amet, onsectetur adipiscing elit. Morbi at egestas magna.
          </p>
          <button className="border-2 border-white h-10 w-36 text-sm">
            LEARNING NOW
          </button>
        </div>

        <div className="max-sm:hidden">
          <p className="font-bold text-xl max-sm:text-2xl">POPULAR COURSES</p>
          <div className="grid grid-cols-2 gap-y-4 grid-rows-3 pt-6">
            <p className="h-14 w-14 bg-yellow-300">
              <img src={cam} alt="cam" className="w-full h-full" />
            </p>
            <div className="relative right-20 text-sm ">
              <p className="hover:text-[#3755AB] hover:cursor-pointer">
                How to be a DJ? Make Electronic Music
              </p>
              <p className="text-gray-400">BY DEMO INSTRUCTOR</p>
            </div>

            <p className="h-14 w-14 bg-yellow-300 mt">
              <img src={cam} alt="cam" className="w-full h-full" />
            </p>
            <div className="relative right-20 text-sm">
              <p className="hover:text-[#3755AB] hover:cursor-pointer">
                How to be a DJ? Make Electronic Music
              </p>
              <p className="text-gray-400">BY DEMO INSTRUCTOR</p>
            </div>

            <p className="h-14 w-14 bg-yellow-300">
              <img src={cam} alt="cam" className="w-full h-full" />
            </p>
            <div className="relative right-20 text-sm">
              <p className="hover:text-[#3755AB] hover:cursor-pointer">
                How to be a DJ? Make Electronic Music
              </p>
              <p className="text-gray-400">BY DEMO INSTRUCTOR</p>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold max-sm:text-2xl text-xl">PAGES</p>

          <ul className="flex md:flex-col gap-4 text-sm pt-6  max-md:w-screen ">
            <li className="hover:text-[#E8953D] max-md:text-[14px] hover:cursor-pointer md:border-b border-blue-300 flex items-center gap-1">
              <TbMathGreater className="hidden md:block" />
              ABOUT US
            </li>
            <li className="hover:text-[#E8953D] max-md:text-[14px] hover:cursor-pointer md:border-b border-blue-300 flex items-center gap-1">
              <TbMathGreater className="hidden md:block" />
              BLOG
            </li>
            <li className="hover:text-[#E8953D] max-md:text-[14px] hover:cursor-pointer md:border-b border-blue-300 flex items-center gap-1">
              <TbMathGreater className="hidden md:block" />
              CONTACT US
            </li>
            <li className="uppercase hover:text-[#E8953D] max-md:text-[14px] hover:cursor-pointer md:border-b border-blue-300 flex items-center gap-1">
              <TbMathGreater className="hidden md:block" />
              Courses
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-xl max-sm:text-2xl">CONTACT</p>
          <div className="pt-6">
            <ul className="flex  flex-col gap-y-4 ">
              <li className="flex  items-center gap-4">
                <CiLocationOn size={26} />
                USA, Callifornia 20, First Avenue, Callifornia
              </li>
              <li className=" flex items-center gap-4">
                <FaPhone size={26} />
                Tel.: +1 212 458 300 32
              </li>
              <li className=" flex items-center gap-4">
                <AiTwotonePrinter size={26} />
                Fax: +1 212 375 24 14
              </li>
              <li className=" flex items-center gap-4">
                <CiMail size={26} />
                info@masterstudy.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pb-12 text-white flex justify-center">
        <p>&copy; 2024 GC Ethio Education. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
