import "../components/styles/headerstyle.css";
import { motion } from "framer-motion";
const Header = () => {
  
  return (
    <div className="header flex items-center justify-center w-full md:h-[80vh] rounded-xl md:rounded-3xl">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full md:w-[50%] pt-4 md:pt-0 pb-12 md:pb-0 px-6 md:px-0">
        <h1
          className="text-white font-sans font-bold text-[1.8rem] md:text-3xl text-center"
        >
          Welcome To The Official Nigeria
          <br />
          Open Contracting Portal (NOCOPO)
        </h1>
        <h3 className="text-white font-light text-sm md:text-xl my-4 md:w-[85%] md:mx-auto text-center">
          Track and manage contracts files of the federal government of Nigeria
        </h3>
        <div className="relative md:w-[65%] md:mx-auto  mt-10 md:mt-0 md:mb-6">
          <input
            type="text"
            className="w-full bg-white rounded-lg h-12 placeholder:text-[#18181B] focus:outline-[#084116] focus:border-[#084116] pl-2 md:pl-4 font-light placeholder:text-sm"
            placeholder="Input keyword"
          />
          <button className="rounded-lg text-white text-sm md:text-base text-center px-2 md:px-0 w-24 h-10 absolute right-1 top-1 bg-[#03012C]">
            Search
          </button>
        </div>
        <p className="text-white text-center text-xs md:text-base font-light mb-16 md:mb-0">
          **Search for any project data**
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
