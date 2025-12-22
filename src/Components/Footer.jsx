import React from "react";
import { IoIosFitness } from "react-icons/io";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiMailboxdotorg } from "react-icons/si";
import { Link } from "react-scroll";
const Footer = () => {
    return (
        <footer className="text-gray-100 bg-gray-900 px-6 py-10 m-5 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo & Socials */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="flex items-center gap-3">
                        <IoIosFitness size={70} color="#FF6C0C" />
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            <span className="text-orange-500">Fit </span>Forge
                        </h1>
                    </div>
                    <p className="text-sm sm:text-base text-justify max-w-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
                        minus. Empower your body and mind through strength and wellness.
                    </p>
                    <div className="flex gap-5 justify-center sm:justify-start">
                        <FaFacebook
                            className="cursor-pointer hover:text-orange-500 transition-colors"
                            size={26}
                        />
                        <FaInstagram
                            className="cursor-pointer hover:text-orange-500 transition-colors"
                            size={26}
                        />
                        <FaYoutube
                            className="cursor-pointer hover:text-orange-500 transition-colors"
                            size={26}
                        />
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-4 text-center sm:text-left">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                        <FaLocationDot color="#FF6C0C" />
                        <p>123 North Tower, Kathmandu Tinkune</p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                        <SiMailboxdotorg color="#FF6C0C" />
                        <p>ch.anup1005@gmail.com</p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                        <FaPhone color="#FF6C0C" />
                        <p>+977 1123456789</p>
                    </div>
                </div>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h2 className="text-2xl font-semibold mb-3">Quick Links</h2>

                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link to="hero" smooth duration={500} offset={-70}
                                className="cursor-pointer hover:text-orange-500">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="about" smooth duration={500} offset={-70}
                                className="cursor-pointer hover:text-orange-500">
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link to="programs" smooth duration={500} offset={-70}
                                className="cursor-pointer hover:text-orange-500">
                                Our Program
                            </Link>
                        </li>

                        <li>
                            <Link to="price" smooth duration={500} offset={-70}
                                className="cursor-pointer hover:text-orange-500">
                                Price
                            </Link>
                        </li>

                        <li>
                            <Link to="blog" smooth duration={500} offset={-70}
                                className="cursor-pointer hover:text-orange-500">
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link to="footer" smooth duration={500} offset={-70}
                                className="cursor-pointer hover:text-orange-500">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* Programs */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h2 className="text-2xl font-semibold mb-3">Our Programs</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li className="hover:text-orange-500 cursor-pointer">Basic Crossfit</li>
                        <li className="hover:text-orange-500 cursor-pointer">Fitness Studio</li>
                        <li className="hover:text-orange-500 cursor-pointer">Personal Training</li>
                        <li className="hover:text-orange-500 cursor-pointer">Boxing Classes</li>
                        <li className="hover:text-orange-500 cursor-pointer">Powerlifting</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} FitForge. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
