import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";

const Navigation = () => {
    // State to toggle mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Map display names to Element names
    const navLinks = [
        { name: "Home", to: "hero" },
        { name: "Programs", to: "programs" },
        { name: "Blog", to: "blog" },
        { name: "Price", to: "price" },
        { name: "Contact", to: "footer" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white">
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex justify-between gap-2">
                    <FaDumbbell size={40} color="white" />

                    <h1 className="text-2xl font-bold "><span className="text-orange-500">Fit</span>Forge</h1>
                </div>

                <nav className="hidden md:flex">
                    <ul className="flex gap-6 text-lg">
                        {navLinks.map((item, i) => (
                            <li key={i} className="relative list-none">
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true}
                                    onClick={() => setIsOpen(false)}
                                    activeClass="text-orange-500 after:w-full"
                                    className="inline-block pb-1 cursor-pointer text-white hover:text-orange-500 after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:block">
                    <Link
                        to="footer"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded cursor-pointer"
                    >
                        Contact Us
                    </Link>
                </div>

                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black border-t border-gray-700">
                    <ul className="flex flex-col items-center gap-4 py-4 text-lg">
                        {navLinks.map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-white hover:text-orange-500 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="footer"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setIsOpen(false)}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded cursor-pointer"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>

    );
};

export default Navigation;
