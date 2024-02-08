import cam from "../img/cam.jpg";
import fash from "../img/fash.jpg";
import dj from "../img/env.jpg";

import { CgShapeZigzag } from "react-icons/cg";
const Blog = () => {
  return (
    <div className="max-w-[85%] mt-12 m-auto">
      <div className="max-sm:grid max-sm:justify-center grid justify-center">
        <p className=" font-bold text-4xl">MASTERSTUDY BLOG</p>
        <p className="flex justify-center">
          <CgShapeZigzag size={60} className="text-[#EAB830]" />
        </p>
      </div>

      <div className="max-sm:grid max-sm:grid-cols-1 gap-4 grid grid-cols-3">
        <div className="rounded-xl   h-fit">
          <img
            src={cam}
            alt=""
            className="rounded-xl w-[450px] h-60 object-cover"
          />

          <div className="mt-6 flex gap-4">
            <div className="border-2 border-yellow-600 w-[180px] h-[60px]">
              <div className="grid justify-center text-yellow-600 font-bold">
                <p>09</p>
                <p>AUG</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-xl hover:text-[#2C75E4] hover:cursor-pointer">
                Our main target is "Developing Youself as a Leader"
              </p>
              <p className="text-[#66685A]">
                The upcoming budget for the Chicago Public Schools will rely on
                $500 million in yet-to-be-enacted pension savings by Illinois,
                school officials said on Monday.
              </p>

              <p className="bg-blue-500 w-8 h-1 mt-2"></p>
              <p className="text-[#66685A]">
                posted in: <span className="text-[#368CD6]">Advertisement</span>
              </p>
              <p className="text-[#66685A]">
                Tags:{" "}
                <span className="text-[#368CD6]">
                  developing, leader, target
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl   h-fit">
          <img
            src={fash}
            alt=""
            className="rounded-xl w-[450px] h-60 object-cover"
          />

          <div className="mt-6 flex gap-4">
            <div className="border-2 border-yellow-600 w-[180px] h-[60px]">
              <div className="grid justify-center text-yellow-600 font-bold">
                <p>09</p>
                <p>AUG</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-xl hover:text-[#2C75E4] hover:cursor-pointer">
                Those Other College Expenses You Aren`t Thinking About
              </p>
              <p className="text-[#66685A]">
                Thousands of teenagers across the UK will have school lessons in
                mindfulness in an experiment designed to see if it can protect
                against mental illness.
              </p>

              <p className="bg-blue-500 w-8 h-1 mt-2"></p>
              <p className="text-[#66685A]">
                posted in: <span className="text-[#368CD6]">Hobbies</span>
              </p>
              <p className="text-[#66685A]">
                Tags:{" "}
                <span className="text-[#368CD6]">
                  {" "}
                  college, teens, thinking
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl h-fit">
          <img
            src={dj}
            alt=""
            className="rounded-xl w-[450px] h-60 object-cover"
          />

          <div className="mt-6 flex gap-4">
            <div className="border-2 border-yellow-600 w-[180px] h-[60px]">
              <div className="grid justify-center text-yellow-600 font-bold">
                <p>09</p>
                <p>AUG</p>
              </div>
            </div>
            <div className="">
              <p className="font-bold text-xl hover:text-[#2C75E4] hover:cursor-pointer">
                The Surprising Reason College Tuition Is Crazy Expensive
              </p>
              <p className="text-[#66685A] ">
                The upcoming budget for the Chicago Public Schools will rely on
                $500 million in yet-to-be-enacted pension savings by Illinois,
                school officials said on Monday.
              </p>

              <p className="bg-blue-500 w-8 h-1 mt-2"></p>
              <p className="text-[#66685A]">
                posted in:{" "}
                <span className="text-[#368CD6]">Adverisement, Hobbies</span>
              </p>
              <p className="text-[#66685A]">
                Tags: <span className="text-[#368CD6]">Childhood</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
