// import React from 'react'
import "../components/styles/access.css";
// import bg from "../assets/sectionBg.svg";

const Access = () => {

    const accessData = [
        {
            title: "Citizens",
            content: "Citizens can access public procurement information, track procurement process and give us feedback on planning, tender, award, contract and implementation stages."
        },
        {
            title: "Citizens",
            content: "Citizens can access public procurement information, track procurement process and give us feedback on planning, tender, award, contract and implementation stages."
        },
        {
            title: "Citizens",
            content: "Citizens can access public procurement information, track procurement process and give us feedback on planning, tender, award, contract and implementation stages."
        },
        {
            title: "Citizens",
            content: "Citizens can access public procurement information, track procurement process and give us feedback on planning, tender, award, contract and implementation stages."
        },
        {
            title: "Citizens",
            content: "Citizens can access public procurement information, track procurement process and give us feedback on planning, tender, award, contract and implementation stages."
        },
        {
            title: "Citizens",
            content: "Citizens can access public procurement information, track procurement process and give us feedback on planning, tender, award, contract and implementation stages."
        },
    ]
  return (
    // <section className=" w-full relative min-h-[500px] md:min-h-[200px] pb-20 -mt-20">
    <section className="access-bg md:bg-[#084116] w-full relative py-48 md:pt-8 md:pb-36">
      {/* <img src={bg} alt="decorative background" className="object-fill md:object-cover min-h-full" /> */}
      {/* <div className="absolute top-10 md:top-60 left-0 w-full"> */}
      <div className="w-full">
        <div className="hidden md:block mx-auto w-[50%] mt-6">
          <h1 className="text-white md:text-3xl font-sans text-center font-semibold mb-3 md:mb-6">
            View And Analyse Data
          </h1>
          <p className="text-white text-xl font-light text-center">
            Users can have acess to our platform by clicking proceed below to
            have acess to their dashboard and track open data available on the
            platform
          </p>
        </div>
        <h2 className="absolute right-2 md:right-0 top-52 md:top-6 bg-white rounded-md py-2 md:py-3 px-1 md:px-4 text-[#084116] font-semibold text-[12px] md:text-sm">
          Total Number of visit: <span className="font-normal">234, 345 visitors</span>
        </h2>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-[80%] md:w-[85%] mx-auto">
        {
            accessData.map((data, idx) => (
                <div className="flex items-center justify-center flex-col border-2 border-dashed border-white p-8" key={idx+1}>
                    <h1 className="text-white font-bold text-2xl mb-6">{data.title}</h1>
                    <p className="text-normal font-light text-center mb-6 text-white">
                        {data.content}
                    </p>
                    <button className="font-medium text-[#BD8600] md:text-lg border-none outline-none">Proceed {`>`}{`>`}</button>
                </div>

            ))
        }

      </div>
      </div>
    </section>
  );
};

export default Access;