import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="px-6 md:px-16 fixed top-0 left-0  w-full bg-[#F8F9FA] px py-6 flex items-center justify-between shadow-b-sm z-50">
      <p>NOCOPO</p>
      <nav className="flex items-center justify-between w-[60%]">
        <ul className="hidden md:flex items-center justify-between font-light w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "relative after:content[''] after:absolute after:-bottom-1.5 after:w-10 after:h-1 after:rounded-md after:bg-[#03012C] after:left-[8%] font-semibold"
                : "font-normal"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/open-data"
            className={({ isActive }) =>
              isActive
                ? "relative after:content[''] after:absolute after:-bottom-1.5 after:w-10 after:h-1 after:rounded-md after:bg-[#03012C] after:left-[30%] font-semibold"
                : "font-normal"
            }
          >
            Open Data
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "relative after:content[''] after:absolute after:-bottom-1.5 after:w-10 after:h-1 after:rounded-md after:bg-[#03012C] after:left-[30%] font-semibold"
                : "font-normal"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/covid"
            className={({ isActive }) =>
              isActive
                ? "relative after:content[''] after:absolute after:-bottom-1.5 after:w-16 after:h-1 after:rounded-md after:bg-[#03012C] after:left-[50%] font-semibold"
                : "font-normal"
            }
          >
            Covid 19 Emergency Procurement
          </NavLink>
        </ul>
      </nav>
      <button className="hidden md:inline-block bg-[#03012C] text-white h-10 font-sans rounded-xl p-2">
        Download Json
      </button>
      <svg
        width="22"
        height="16"
        viewBox="0 0 26 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      >
        <path
          d="M1 1H25M1 9H25M1 17H25"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showNav && (
        <div className="fixed z-40 top-0 left-0 h-screen w-full bg-white flex items-start justify-center">
          <div className="w-full pt-5">
            <div className="flex items-end justify-end mb-6 pr-6">
              <button
                className="text-[#03012C]/40 text-2xl"
                onClick={() => setShowNav(!showNav)}
              >
                x
              </button>
            </div>
            <ul className="font-light w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "relative inline-block w-full mb-6 text-xl px-3 after:content[''] after:absolute after:-bottom-1.5 after:w-10 after:h-1 after:rounded-md after:bg-[#03012C] after:left-4 font-semibold"
                    : "font-normal inline-block w-full mb-6 text-xl px-3"
                }
                onClick={() => setShowNav(!showNav)}
              >
                Home
              </NavLink>
              <NavLink
                to="/open-data"
                className={({ isActive }) =>
                  isActive
                    ? "relative inline-block w-full mb-6 text-xl px-3 after:content[''] after:absolute after:-bottom-1.5 after:w-10 after:h-1 after:rounded-md after:bg-[#03012C] after:left-4 font-semibold"
                    : "font-normal inline-block w-full mb-6 text-xl px-3"
                }
                onClick={() => setShowNav(!showNav)}
              >
                Open Data
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "relative inline-block w-full mb-6 text-xl px-3 after:content[''] after:absolute after:-bottom-1.5 after:w-10 after:h-1 after:rounded-md after:bg-[#03012C] after:left-4 font-semibold"
                    : "font-normal inline-block w-full mb-6 text-xl px-3"
                }
                onClick={() => setShowNav(!showNav)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/covid"
                className={({ isActive }) =>
                  isActive
                    ? "relative inline-block w-full mb-6 text-xl px-3 after:content[''] after:absolute after:-bottom-1.5 after:w-16 after:h-1 after:rounded-md after:bg-[#03012C] after:left-4 font-semibold"
                    : "font-normal inline-block w-full mb-6 text-xl px-3"
                }
                onClick={() => setShowNav(!showNav)}
              >
                Covid 19 Emergency Procurement
              </NavLink>
            </ul>
            <button
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="block ml-3 w-[80%] bg-[#03012C] text-white h-10 font-sans rounded-xl p-2"
            >
              Download Json
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
