import { RiComputerLine } from "react-icons/ri";
import { TbChristmasTree } from "react-icons/tb";
import { ImCalculator } from "react-icons/im";
import { RiBarChartBoxFill } from "react-icons/ri";
import { GiMouse } from "react-icons/gi";
import env from "../img/env.jpg";
import dj from "../img/dj.jpg";
import fash from "../img/fash.jpg";
import cam from "../img/cam.jpg";
import "./hoverEffect.css";

const Courses = () => {
  return (
    <div className="relative max-w-[94%] m-auto">
      <div className="absolute top-[-100px] w-[100%] flex justify-center gap-4 text-white">
        <div className="transition-transform hover:-translate-y-4 delay-100 h-[230px] w-[230px] rounded-xl bg-[#10C45C]">
          <div className="grid-rows-2 p-12 pl-16">
            <p>
              <RiComputerLine className="w-24 h-24" />
            </p>
            <p className="font-extrabold text-xl">Graphic & Web design</p>
          </div>
        </div>

        <div className="transition-transform hover:-translate-y-4 delay-100 h-[230px] w-[230px] rounded-xl bg-[#1EC1D9]">
          <div className="grid-rows-2 p-12 pl-16">
            <p>
              <TbChristmasTree className="w-24 h-24" />
            </p>
            <p className="font-extrabold text-xl">Environmental Sciences</p>
          </div>
        </div>

        <div className="transition-transform hover:-translate-y-4 delay-100 h-[230px] w-[230px] rounded-xl bg-[#307Ad5]">
          <div className="grid-rows-2 p-12 pl-16">
            <p>
              <ImCalculator className="w-24 h-24" />
            </p>
            <p className="font-extrabold text-xl">Economics & Finances</p>
          </div>
        </div>

        <div className="transition-transform hover:-translate-y-4 delay-100 h-[230px] w-[230px] rounded-xl bg-[#EAB830]">
          <div className="grid-rows-2 p-12 pl-16">
            <p>
              <RiBarChartBoxFill className="w-24 h-24" />
            </p>
            <p className="font-extrabold text-xl">Analysis of Algorithms</p>
          </div>
        </div>

        <div className="transition-transform hover:-translate-y-4 delay-100 h-[230px] w-[230px] rounded-xl bg-[#D94DA6]">
          <div className="grid-rows-2 p-12 pl-16">
            <p>
              <GiMouse className="w-24 h-24" />
            </p>
            <p className="font-extrabold text-xl">Software Development</p>
          </div>
        </div>
      </div>

      {/* second part */}

      <div className="pl-6 pt-[200px]">
        <div className="max-sm:mt-14 max-sm:relative flex justify-between">
          <p className="max-sm:mb-8  max-sm:absolute max-sm:bottom-10 max-sm:font-bold max-sm:mr-6 font-extrabold text-5xl">
            Top Courses
          </p>
          <div className="flex  max-sm:gap-2 gap-10 pr-10">
            <button className="max-sm:px-8 max-sm:h-12 bg-[#2C7AFF] px-6 text-white text-center rounded-full">
              Newest
            </button>
            <button className="max-sm:px-8 max-sm:h-12 bg-gray-200 px-6 rounded-full hover:bg-[#2C7AFF] hover:text-white">
              Oldest
            </button>
            <button className="max-sm:px-8 max-sm:h-12 bg-gray-200 px-6 rounded-full hover:bg-[#2C7AFF] hover:text-white">
              Overall Rating
            </button>
          </div>
        </div>

        <div className="max-sm:pl-0 max-sm:flex max-sm:flex-col mt-14 pl-2  grid grid-rows-2 grid-cols-4 gap-y-8 overflow-hidden">
          <div className="parent relative max-sm:w-[98%] max-sm:h-[250px]  w-[270px] h-[350px] rounded-xl">
            <div className="child absolute  transition-transform transform translate-y-full text-white max-w-[80%] pl-10">
              <p>eeeEnironmental Sciences</p>
              <p>Basics of MasterStudy</p>
              <p>100 ETB</p>
              <p>
                MasterStudy is the best chioce for everyone! Masterstudy LMS is
                a feature-rich WP product
              </p>
            </div>
            <img
              src={env}
              alt="env"
              className="max-sm:w-[94%] max-sm:h-[250px] h-full w-full rounded-xl"
            />
          </div>

          <div className="max-sm:w-[94%] max-sm:h-[250px] w-[270px] h-[350px] rounded-xl bg-red-300">
            <img src={fash} alt="cam" className="h-full w-full rounded-xl" />
          </div>
          <div className="max-sm:w-[94%] max-sm:h-[250px] w-[270px] h-[350px] rounded-xl bg-red-300">
            <img src={cam} alt="env" className="h-full w-full rounded-xl" />
          </div>
          <div className="max-sm:w-[94%] max-sm:h-[250px] w-[270px] h-[350px] rounded-xl bg-red-300">
            <img src={dj} alt="env" className="h-full w-full rounded-xl" />
          </div>
          <div className="max-sm:w-[94%] max-sm:h-[250px] w-[270px] h-[350px] rounded-xl bg-red-300">
            <img src={cam} alt="env" className="h-full w-full rounded-xl" />
          </div>
          <div className="max-sm:w-[94%] max-sm:h-[250px] w-[270px] h-[350px] rounded-xl bg-red-300">
            <img src={dj} alt="env" className="h-full w-full rounded-xl" />
          </div>
          <div className="max-sm:w-[94%] max-sm:h-[250px] w-[270px] h-[350px] rounded-xl bg-red-300">
            <img src={env} alt="env" className="h-full w-full rounded-xl" />
          </div>
          <div className="max-sm:w-[94%] max-sm:h-[250px] w-[270px] h-[350px] rounded-xl bg-red-300">
            <img src={fash} alt="cam" className="h-full w-full rounded-xl" />
          </div>
          <div className="w-screen max-sm:w-[94%]  flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 mb-8 rounded-full flex items-center ">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
