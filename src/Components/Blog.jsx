import React from 'react';
import food from "../assets/food.png";
import recovery from "../assets/recovery.jpg";
import success from "../assets/sucess.jpg";
import { useState } from 'react';
const Blog = () => {
    const Routin = [
        { picture: food, element: "Healthy Nutrition: Fuel Your Body Right" },
        { picture: recovery, element: "The Importance of Recovery and Mobility" },
        { picture: success, element: "Member Success Story: John’s 90-Day Transformation" },
    ];

    return (
        <div className="text-white px-4 sm:px-6 lg:px-12 py-8">
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex flex-col items-center justify-center text-center md:text-left">
                    <p className="text-xl font-bold mb-2">Blog</p>
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Power Up Your <span className="text-orange-500">Knowledge</span>
                    </h1>
                </div>
                <div className="text-justify tracking-tight text-lg">
                    <p>
                        Discover insights on fitness, nutrition, and motivation to help you
                        stay strong, healthy, and inspired throughout your fitness journey.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  p-3 gap-6'>
                {Routin.map((item, index) => (
                    <div key={index} className='border blog-card overflow-hidden flex flex-col rounded-xl  bg-gray-900'>

                        <img className='h-36 w-full object-cover' src={item.picture} alt="relevant picture" />
                        <div className='flex flex-col flex-wrap  p-4 gap-4 justify-center '>
                            <h1 className='text-3xl  leading-relaxed   line-clamp-3 font-semibold text-justify'>{item.element}</h1>
                            <p className='text-lg text-justify  leading-relaxed'>Lorem ipsum dolor sit amet consectetur,
                                adipisicing eli dicta tenetur. Esse iste non natus illo reprehenderit quam error......</p>
                            <div>
                                <button className='bg-orange-500 blog-card-button text-md px-5 rounded-xl py-3'>Learn More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
