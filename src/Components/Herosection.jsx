import React, { useState } from "react";
import workout from "../assets/workout.jpg";

const Herosection = () => {
    const [openForm, setOpenForm] = useState(false);

    return (
        <section
            id="hero"
            className="relative text-white flex items-center justify-center h-[80vh] md:h-screen w-full"
        >
            <img
                src={workout}
                alt="Workout"
                className="absolute inset-0 w-full h-full object-cover blur-xs brightness-50"
            />


            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-100 drop-shadow-lg">
                    UNLEASH <span className="text-orange-500">POWER</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mt-6 leading-relaxed">
                    Take your fitness journey to the next level. Join us today and unlock
                    your potential with personalized training programs.
                </p>

                <button
                    onClick={() => setOpenForm((prev) => !prev)}
                    className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl"
                >
                    GET STARTED TODAY
                </button>
                {openForm && (
                    <div
                        className="mt-8 mb-3 bg-white/5 backdrop-blur-md border border-white/25 rounded-2xl p-8 w-full max-w-md shadow-lg transition-all duration-500 ease-in-out"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-white">
                            Enroll Now
                        </h2>

                        <form className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col text-left">
                                <label htmlFor="fname" className="mb-1 text-sm font-medium">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="fname"
                                    placeholder="Enter your first name"
                                    className="p-2 rounded-md text-white focus:outline-none focus:ring-3 focus:ring-orange-500"
                                />
                            </div>

                            <div className="flex flex-col text-left">
                                <label htmlFor="lname" className="mb-1 text-sm font-medium">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lname"
                                    placeholder="Enter your last name"
                                    className="p-2 rounded-md text-white focus:outline-none focus:ring-3 focus:ring-orange-500"
                                />
                            </div>

                            <div className="flex flex-col text-left">
                                <label htmlFor="email" className="mb-1 text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="p-3 rounded-md text-white focus:outline-none focus:ring-3 focus:ring-orange-500"
                                />
                            </div>

                            <div className="flex flex-col text-left">
                                <label htmlFor="confirmEmail" className="mb-1 text-sm font-medium">
                                    Confirm Email
                                </label>
                                <input
                                    type="email"
                                    id="confirmEmail"
                                    placeholder="Confirm your email"
                                    className="p-3 rounded-md text-white focus:outline-none focus:ring-3 focus:ring-orange-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white py-2 rounded-md font-semibold transition-all duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Herosection;
