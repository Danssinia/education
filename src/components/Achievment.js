import achieve from "../img/achievment.jpg";
import { FaGlobeAfrica, FaUsers } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsFillWalletFill } from "react-icons/bs";

const Achievment = () => {
  return (
    <div className="relative">
      <img src={achieve} alt="" />
      <div className="absolute top-0 text-white bg-gray-600/70 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase">
          School Achievment
        </h1>
        <p className="text-2xl md:font-bold m-4">
          Here you can review some stastics about our Educational center
        </p>
        <div className="flex justify-between w-[80%] ">
          <p className="flex flex-col items-center">
            <FaGlobeAfrica className="text-5xl text-blue-600 md:text-6xl" />{" "}
            <span className="text-xl md:text-4xl text-orange-500 font-bold">
              924346
            </span>
            <span className="uppercase max-md:text-xs md:font-bold">
              Foreign followers
            </span>
          </p>
          <p className="flex flex-col items-center">
            <IoIosNotificationsOutline className="text-5xl text-yellow-500 md:text-6xl" />{" "}
            <span className="text-xl md:text-4xl text-orange-500 font-bold">
              23454
            </span>
            <span className="uppercase max-md:text-xs md:font-bold">
              Classes completed
            </span>
          </p>
          <p className="flex flex-col items-center">
            <FaUsers className="text-5xl text-green-500 md:text-6xl" />
            <span className="text-xl md:text-4xl text-orange-500 font-bold">
              23223
            </span>
            <span className="uppercase max-md:text-xs md:font-bold">
              Students Enrolled
            </span>
          </p>
          <p className="flex flex-col items-center">
            <BsFillWalletFill className="text-5xl text-orange-200 md:text-6xl" />
            <span className="text-xl md:text-4xl text-orange-500 font-bold">
              353
            </span>
            <span className="uppercase max-md:text-xs md:font-bold">
              Certified teachers
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievment;
