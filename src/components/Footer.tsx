// import React from 'react'
import {motion} from "framer-motion";
import nigeria from "../assets/nigeria.svg";
import bereau from "../assets/bereau.svg";
import nocopo from "../assets/NOCOPO3.svg";

const Footer = () => {
  return (
    <motion.div
    initial={{scale:0.2, opacity: 0}}
    whileInView={{scale:1, opacity: 1}}
    transition={{duration: 0.4, delay:0.2}}
      className="bg-white relative rounded-xl w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 p-4 z-10 -mt-36 md:-mt-20"
      style={boxStyle}
    >
      <div className="flex items-center">
        <img
          src={nigeria}
          alt="nigeria's coat of arm"
          className="max-w-sm h-16 mr-5"
        />
        <p className="font-light text-xs text-[#03012C] w-36">
          Bureau of Public Procurement (BPP) Competition|
          <br />
          Transparency|Efficiency
        </p>
      </div>
      <div className="flex items-center flex-col justify-center">
        <img src={nocopo} alt="nocopo logo" className="max-w-sm h-20 mb-5" />
        <div className="mb-4">
          <p className="text-xs text-[#03012C]">Copyright 2022 By Nocopo</p>
          <p className="text-xs text-[#03012C]">
            Terms Of Use | Privacy Statement
          </p>
        </div>
        <p className="font-light text-sm text-[#03012C]">
          E-Mail: nocopofeedback@bpp.gov.ng
        </p>
      </div>
      <div className="flex items-center md:justify-center -order-1 md:order-1">
        <img
          src={bereau}
          alt="nigeria's coat of arm"
          className="max-w-sm h-16 mr-5"
        />
        <p className="font-light text-xs text-[#03012C] w-32">
          Bureau of Public Procurement (BPP) Competition|
          <br />
          Transparency|Efficiency
        </p>
      </div>
    </motion.div>
  );
};

const boxStyle = {
  boxShadow: "0px -6px 38px rgba(0, 0, 0, 0.1)",
};

export default Footer;
