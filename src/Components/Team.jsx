import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import cardiac from "../assets/Cardiac.jpg";
import physical from "../assets/physical.jpg";
import running from '../assets/Running.jpg';
import stretching from '../assets/stretching.jpg'
const Team = () => {
    const Trainer = [{ pictrue: cardiac, role: "Wellness Expert", name: "Mina Carter" },
    { pictrue: physical, role: "Functional Training", name: "Neena Paul" },
    { pictrue: running, role: "Wellness Expert", name: "Alex Mercer" },
    { pictrue: stretching, role: "Head CrossFit Coach", name: "Jhon Miller" }]
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

            <div className=' text-white m-3 grid   p-4 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {Trainer.map((item) => (
                    <div className='border team  overflow-hidden rounded-xl flex flex-col justify-center gap-3 bg-gray-900 '>
                        <img className='lg:h-[40vh] sm:h-[32vh] h-[26vh] w-full object-cover' src={item.pictrue} alt="" />
                        <div className='flex  p-4 items-center justify-between   '>
                            <div className='flex flex-col justify-center gap-2 p-3'>
                                <h1 className='text-2xl font-semibold'>{item.name.toUpperCase()}</h1>
                                <p className='font-bold lg:text-lg sm:text-base text-sm text-orange-500'>{item.role.toLowerCase()}</p>
                            </div>
                            <div>
                                <MdArrowOutward className='arrow_rotate' size={30} color='#FF6C0C' />
                            </div>
                        </div>

                    </div>

                ))}
            </div>




        </>
    );
};

export default Team;
