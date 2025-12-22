import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import weight from "../assets/weight.jpg"
import cardio from "../assets/cardio.jpg"
import lefting from "../assets/lefting.jpg"
import fitness from "../assets/fitness.jpg"


const Team = () => {
    const Trainers = [{ picture: weight, role: "Head Crossfit Coach", name: "Alex Mercer" },
    { picture: cardio, role: "Functional Training", name: "Berek Holt" },
    { picture: lefting, role: "Wellness Expert", name: "Minan Carter" },
    { picture: fitness, role: "Werllness Expert", name: "Megan Paul" }
    ]

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 m-3  text-white">
                <div className="flex flex-col  justify-center gap-6 sm:items-start items-center text-center sm:text-left">
                    <p className="text-2xl text-orange-500 font-medium">Our Team</p>
                    <h1 className="text-4xl font-extrabold">
                        Meet Our <span className="text-orange-500">Trainers</span>
                    </h1>
                </div>

                {/* Right Column: Description */}
                <div className="flex items-center ">
                    <article className="text-gray-100 text-lg  leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Deleniti, asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </article>
                </div>
            </div>

            <div className="grid grid-cols-1 p-4 m-4 gap-8 text-white md:grid-cols-2 lg:grid-cols-3">
                {Trainers.map((item, index) => (
                    <div
                        key={index}
                        className="group flex flex-col gap-3 overflow-hidden rounded bg-gray-900 shadow-sm shadow-gray-400 team-hover"
                    >
                        <img
                            className="h-[40vh] w-full rounded object-cover lg:h-[60vh]"
                            src={item.picture}
                            alt="fitness"
                        />

                        <div className="flex items-center justify-between p-3">
                            <div>
                                <h1 className="text-2xl font-bold">{item.name}</h1>
                                <p className="text-md font-semibold">{item.role}</p>
                            </div>

                            <MdArrowOutward
                                size={40}
                                color="#CF4B00"
                                className="transition-transform duration-300 ease-in-out group-hover:rotate-90"
                            />
                        </div>
                    </div>
                ))}
            </div>


        </>
    );
};

export default Team;
