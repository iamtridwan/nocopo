import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="fixed top-0 left-0">
      <nav className="flex items-center justify-between">
        <NavLink to="/">NOCOPO</NavLink>
        <ul>
          <div className="flex-items-center w-full">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/">
              <p>Open Data</p>
            </NavLink>
            <NavLink to="/">
              <p>About Us</p>
            </NavLink>
            <NavLink to="/">
              <p>Covid 19 Emergency Procurement</p>
            </NavLink>
          </div>
          <button className="bg-[#03012C] p-1 rounded-md text-white">
            Download Json
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
