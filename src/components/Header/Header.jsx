import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li><NavLink className="btn btn-outline btn-success" to="/">Home</NavLink></li>
      <li><NavLink className="btn btn-outline btn-success" to="/listed">Listed Books</NavLink></li>
      <li><NavLink className="btn btn-outline btn-success" to="/pages">Pages to Read</NavLink></li>
      <li><NavLink className="btn btn-outline btn-success" to="/blog">Blog</NavLink></li>
    </>
  );

  const login = (
    <>
      <li><NavLink className="btn btn-outline btn-success" to="/SignIn">Sign In</NavLink></li>
      <li><NavLink className="btn btn-outline btn-accent" to="/SignUp">Sign Up</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl font-bold" to="/">Book Vibe</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal gap-4 px-1">
          {login}
        </ul>
      </div>
    </div>
  );
};

export default Header;
