import React from 'react'
import crossfit from "../assets/Crossfit.jpg"
import personel from "../assets/Personel.jpg"
import studio from '../assets/Studio.jpg'
const Programs = () => {

    const Ourprogram = [{
        feature: "Basic", program: "Crossfit",
        picture: crossfit
    }, { feature: "Fitness", program: "Studio", picture: studio }, {
        feature: "Personal", program: "Training", picture: personel
    }]

    return (
        <>
            <div className='grid sm:grid-cols-2 justify-center gap-3 m-4   text-white '>
                <div className='flex flex-col justify-center gap-2 p-4'>
                    <p className='text-orange-500 text-lg'>Program</p>
                    <h1 className='text-4xl'>Our <span className='text-orange-500'>Fitness</span> Programs </h1>
                </div>
                <div className=' p-4 text-gray-200 text-justify tracking-tighter '><p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatum eaque quam consequuntur dignissimos, laborum autem repellendus assumenda qui fugiat.</p></div>
            </div>
            <div className='text-white  grid rounded-xl
             gap-6 lg:grid-cols-3 sm:grid-cols-2  p-3 m-3'>
                {Ourprogram.map((item, index) => (
                    <div key={index} className=' flex overflow-hidden flex-col border-gray-300 program shadow-md shadow-gray-500  justify-center rounded '>
                        <div className='bg-gray-900 p-3 flex flex-col items-center gap-2 '>
                            <p className='font-semibold text-lg'>{item.feature.toUpperCase()}</p>
                            <h1 className='text-orange-500 text-4xl font-semibold'>{item.program.toUpperCase()}</h1>
                            <p className='text-justify tracking-tight'>Lorem, ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita, at! amet consectetur adipisicing elit. Laboriosam, numquam.</p>

                        </div>
                        <img className='object-cover lg:h-65 w-full' src={item.picture} alt="" />
                    </div>
                ))}

            </div>

        </>
    )
}

export default Programs