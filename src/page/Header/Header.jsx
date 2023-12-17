import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="max-w-full mx-auto shadow-sm bg-white">
      <div
        className="bg-white fixed top-0 left-0 right-0"
        style={{ zIndex: " 999" }}
      >
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink to={"/"}>
                  <li>
                    <a>Item 1</a>
                  </li>
                </NavLink>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a href="" className="text-xl">
              <img src="../../../public/imges/logo.png" alt="" />
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLink className="mr-5 font-bold text-gray-500" to={"/home"}>
                Home
              </NavLink>
              <NavLink className="mr-5 font-bold text-gray-500" to={"/home"}>
                About Us
              </NavLink>
              <NavLink className="mr-5 font-bold text-gray-500" to={"/home"}>
                Our Services
              </NavLink>
              <NavLink className="mr-5 font-bold text-gray-500" to={"/home"}>
                Pages
              </NavLink>
              <NavLink className="mr-5 font-bold text-gray-500" to={"/home"}>
                Portfolio
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
