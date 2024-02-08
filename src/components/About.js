import tchr from "../img/tcrfm-removebg-preview.png";
import { courses } from "../data/teacherCourses";
import { TiEyeOutline } from "react-icons/ti";

import NewsLetter from "./NewsLetter";
import "./hoverEffect.css";
const About = () => {
  return (
    <div className="bg-orange-300">
      <div className="relative py-6  text-gray-950 w-[90%] md:w-[80%] m-auto">
        <button className="bg-blue-500 px-4 py-2 uppercase text-white">
          Teacher of the month
        </button>
        <h1 className="text-5xl font-bold uppercase w-36 my-10 ">
          Demo Instructore
        </h1>
        <h2 className="text-xl my-2 font-bold">
          Professor of Business Administration
        </h2>
        <div className=" ">
          <img
            src={tchr}
            alt=""
            className="md:absolute z-1 right-32 top-3 h-72 md:h-96 bg-blue-500 rounded-2xl"
          />
          <div className="max-md:hidden absolute border-r-[14px] border-b-[14px] border-t-[14px] right-32 top-3 border-indigo-700 rounded-lg h-[320px] w-44 " />

          <p className="md:w-[60%]">
            Together won't. Darkness make hath also moved dominion, they're.
            Don't is subdue had them sixth, cattle evening divided had fowl,
            kind cattle seas lesser made thing. Sea replenish doesn't it two
            given. Gathered life.One blessed there thing good don't very stars
            thing. Kind moveth hath greater seasons Whose kind.
          </p>
        </div>

        {/* teacher course */}
        <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-4 mt-14 md:w-[70%] ">
          {courses.map((course) => {
            return (
              <div className="relative h-60 md:h-96 m-auto w-full rounded-xl overflow-hidden ">
                <img
                  src={course.img}
                  alt=""
                  className=" absolute top-0  w-full h-full object-cover "
                />
                <div className="parent absolute bg-gray-700/50 hover:bg-gray-700/85 h-full w-full flex flex-col justify-end  p-4">
                  <h2 className="text-xl">{course.name}</h2>
                  <h3 className="text-xl text-gray-300">{course.title}</h3>
                  <span>$ {course.price}</span>
                  <div className="child">
                    <p>{course.desc}</p>
                    <p>
                      <span className="text-orange-300">
                        Rating {course.rating}
                      </span>
                      <span className="flex items-center text-blue-300">
                        <TiEyeOutline size={20} /> {course.view}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
