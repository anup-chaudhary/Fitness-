import React from 'react'
import fitnesteam from "../assets/FitnessTeam.jpg"
const Story = () => {
    return (
        <>
            <div className="grid p-4  m-3 text-white gap-6 sm:grid-cols-2 ">
                <div className="p-3  flex items-center flex-col justify-center gap-3">
                    <p className="text-orange-400 text-xl font-semibold tracking-wide">Our Story</p>
                    <h1 className="text-4xl  font-bold leading-snug">
                        Where Strength, Passion, <br />
                        And Community Come <span className="text-orange-500">Together Strong</span>
                    </h1>
                    <div className="p-4  h-fit w-full  text-gray-300">
                        <p className='text-lg text-justify tracking-normal  '>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
                            dicta corrupti exercitationem perferendis eaque placeat ipsa ducimus vitae
                            expedita veritatis ratione atque dolor suscipit nihil. Nisi iure iste quasi
                            molestias quos eveniet inventore in esse ipsam enim unde, facilis veniam

                        </p>
                    </div>
                </div>


                <img className='object-cover h-90  w-full ' src={fitnesteam} alt="" />

            </div>

        </>
    )
}

export default Story