import hero from "../img/hero_bg.jpg";
import Nav from "./Nav";
const Hero = () => {
  return (
    <div className="relative">
      <Nav />
      <img src={hero} alt="" className="h-[80vh] w-full object-cover" />
      <div
        className="absolute top-0 h-full w-full flex flex-col items-center justify-center
       text-3xl md:text-6xl font-bold  bg-green-700/50 "
      >
        <span className="text-orange-400 ">Take the first step </span>
        <span className="text-slate-300 pl-2">
          To your to knowledge with us
        </span>
        <button className="text-xl text-white border-2 p-3 mt-4 rounded-full hover:bg-blue-500 hover:border-blue-500 cursor-pointer">
          Ready to get started?
        </button>
      </div>
    </div>
  );
};

export default Hero;
