import { nav_items } from "../constants";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-scroll"; 

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    
    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 100);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background shadow-md" : "bg-transparent"}`}>
      <nav className='sm:py-12 py-6 flex items-center justify-between container mx-auto px-4'>
        <h2 className='text-2xl text-header font-bold font-poppins'>MicoHood</h2>

        <ul className="list-none sm:flex items-center justify-end hidden">
          {nav_items.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-[16px] font-normal text-header mr-4"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 items-center justify-end">
          <CiMenuFries
            className="text-2xl cursor-pointer text-header"
            onClick={() => setToggle(true)}
          />
          <div
            className={`fixed top-0 right-0 h-screen bg-white shadow-md p-6 w-3/4 sm:w-1/2 z-40 transition-transform duration-300 ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-end justify-end">
              <IoCloseOutline
                className="text-3xl cursor-pointer text-header"
                onClick={() => setToggle(false)}
              />
            </div>
            <ul className="list-none flex flex-col items-start gap-y-10 mt-8">
              {nav_items.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to={id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer text-[16px] font-normal text-header"
                    onClick={() => setToggle(false)} // Close menu on click
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
