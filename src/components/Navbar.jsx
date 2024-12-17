import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 font-bold">
                <Image src="logo.png" alt="fajar logo" w={32} h={32} />
                <span>fajarblog</span>
            </Link>

            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE BUTTON */}
                <div className="cursor-pointer text-4x"
                    onClick={() => setOpen((prev) => !prev)}>
                    {/* Change Hamburger Icon */}
                    {/* {open ? "X" : "☰"} */}
                    <div className="fle flex=col gap-[5.4px]">
                        <div className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open && "rotate-45"
                            }`}>
                            <div
                                className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${open && "opacity-0"
                                    }`}
                            ></div>
                            <div
                                className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open && "-rotate-45"
                                    }`}
                            ></div>
                        </div>
                    </div>

                    {/* MOBILE a LIST */}
                    <div
                        className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"
                            }`}
                    >
                        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>Trending</Link>
                        <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>Most Popular</Link>
                        <Link to="/" onClick={() => setOpen(false)}>About</Link>
                        <Link to="/login" onClick={() => setOpen(false)}>
                            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                                Login 👋
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/posts?sort=trending">Trending</Link>
                <Link to="/posts?sort=popular">Most Popular</Link>
                <Link to="/">About</Link>
                {/* <SignedOut> */}
                <Link to="/login">
                    <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                        Login 👋
                    </button>
                </Link>
                {/* </SignedOut> */}
                {/* <SignedIn>
                    <UserButton />
                </SignedIn> */}
            </div>
        </div >
    )
}

export default Navbar

