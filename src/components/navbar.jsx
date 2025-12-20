import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-4 left-8 right-8 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center bg-neutral-500/50 font-medium text-xl text-white rounded-full pl-8 pr-2 md:pr-4 py-2 border border-white backdrop-blur-md bg-[url('/noise.svg')] bg-cover bg-center z-30"
    >
      <div className="nav-left">
        <ul className="flex gap-12 list-none m-0 p-0">
          <li className="hidden md:block"><a href="/#about" data-cursor-expand data-cursor-color="transparent">ABOUT</a></li>
          <li className="hidden md:block"><a href="/#work" data-cursor-expand data-cursor-color="transparent">WORK</a></li>
          <li><a href="/#contact" data-cursor-expand data-cursor-color="transparent">CONTACT</a></li>
        </ul>
      </div>

      <a href="/" className="logo block h-[35px] w-auto justify-self-end md:mx-auto md:justify-self-center">
        <img src={logo} alt="Home" className="h-full w-auto" />
      </a>

      <div className="status justify-self-end hidden md:flex items-center gap-3">
        <div className="flex items-center rounded-full border border-white py-[1px] px-4" data-cursor-expand data-cursor-color="transparent">
          <a href="/#contact">Available Now</a>
        </div>

        <Link
          to="/allprojects"
          className="flex items-center justify-center p-2"
          data-cursor-expand
          data-cursor-color="transparent"
          aria-label="All Projects"
        >
          <div className="grid grid-cols-3 gap-0.5">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-sm"
              />
            ))}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
