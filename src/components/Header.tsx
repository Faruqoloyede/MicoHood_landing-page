import { nav_items } from "../constants"
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState<boolean>(false)
  return (
    <header className='fixed top-0 left-0 w-full z-50 transition-all duration-300'>
        <nav className='sm:py-12 py-6 flex items-center justify-between container mx-auto px-4'>
            <h2 className='text-2xl text-header font-bold font-poppins'>MicoHood</h2>
            <ul className="list-none sm:flex items-center justify-end hidden">
                {nav_items.map(({id, title})=>(
                    <li key={id}><a href={`#${id}`} className="text-[16px] font-normal text-header mr-4">
                        {title}
                    </a></li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 items-center justify-end">
                <CiMenuFries className="text-2xl cursor-pointer text-header" onClick={()=> setToggle(true)} />
                <div className={`fixed top-0 right-0 h-screen bg-white shadow-md p-6 w-3/4 sm:w-1/2 z-40 transition-transform ${toggle ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex items-end justify-end">
                    <IoCloseOutline className="text-3xl cursor-pointer text-header" onClick={()=> setToggle(false)} />
                </div>
                <ul className="list-none flex flex-col items-start gap-y-10 mt-8">
                    {nav_items.map(({id, title})=>(
                        <li key={id}><a href={`#${id}`} className="text-[16px] font-normal text-header mr-4">
                            {title}
                        </a></li>
                    ))}
                </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header