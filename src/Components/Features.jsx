import { IoIosFitness } from "react-icons/io";
import { GiMuscleUp, GiTeacher } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";

const Features = () => {


    return (
        <>
            <div className="text-white p-4 m-4 max-w-full h-fit bg-gray-900 rounded-2xl">

                {/* Header Section */}
                <div className="grid gap-4 m-3 sm:grid-cols-2">
                    <div className="flex flex-col text-justify p-6 gap-2">
                        <p className="text-lg font-semibold">Features</p>
                        <h1 className="text-4xl font-bold">
                            Forged <span className="text-orange-500">Stronger</span> Every Day
                        </h1>
                    </div>

                    <div className="p-4 text-justify text-lg">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at?
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 p-4 m-3 sm:grid-cols-4">
                    <div className="flex flex-col p-3 gap-2">
                        <GiTeacher color="#CF4B00" size={50} />
                        <h2 className="text-2xl">Elite Coaches</h2>
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <IoIosFitness size={50} color="#CF4B00" />
                        <h2 className="text-2xl">Iron Clad Equipment</h2>
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <GiMuscleUp size={50} color="#CF4B00" />
                        <h2 className="text-2xl">High Intensity Programs</h2>
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                        <RiUserCommunityFill color="#CF4B00" size={50} />
                        <h2 className="text-2xl">Unbreakable Community</h2>
                        <p className="text-lg text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap justify-center p-2 m-5">
                    <button className="bg-orange-500 px-3 py-2 rounded hover:bg-orange-600">
                        Contact Us
                    </button>

                    <button
                        className="bg-orange-500 cursor-pointer px-3 py-2 rounded hover:bg-orange-600"
                    >
                        Join Us
                    </button>
                </div>



            </div>
        </>
    );
};

export default Features;
