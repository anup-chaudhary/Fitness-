import React from "react";
import workout from "../assets/workout.jpg";
const Herosection = () => {
    return (
        <>
            <section id="hero" className="relative text-white   md:h-full h-[60vh] w-full ">
                <img
                    src={workout}
                    alt="Workout"
                    className="w-full  blur-xs h-full object-cover"
                />
                <div className="absolute gap-4 inset-0 flex flex-col bottom-3 justify-center items-center text-center px-4 md:px-8 lg:px-16">
                    <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-8xl font-bold text-gray-200">
                        UNLEASH  <span className="text-orange-500"> POWER </span>
                    </h1>
                    <p className="text-lg font-semibold sm:text-base md:text-lg lg:text-2xl text-white text-center max-w-xl mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor harum minus ea esse,
                        quam eius tempore quibusdam suscipit voluptate!
                    </p>
                    <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-semibold  sm:text-base md:text-lg transition-all duration-300">
                        GET STARTED TODAY
                    </button>
                </div>
            </section>





        </>

    );
};

export default Herosection;
