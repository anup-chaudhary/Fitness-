import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import testimonal from '../assets/Testimonal.jpg'
const Testimonial = () => {
    return (
        <>
            <div className='text-white items-center  flex-wrap  p-5 m-4 gap-3  flex flex-col'>
                <p className='text-lg font-semibold'> Testimonial</p>
                <h1 className='text-4xl text-center font-bold'>Voice of <span className='text-orange-500'>Strength</span>  And <span className='text-orange-500'>Success</span> </h1>
            </div>


            <div className='text-white  p-3 m-3 grid  sm:grid-cols-2'>
                <div className='flex flex-col justify-center p-4 m-3  gap-3 '>

                    <ImQuotesLeft size={80} color='#CC561E' />
                    <p className=' text-justify text-lg tracking-tighter'>Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Quaerat reprehenderit totam
                        assumenda dignissimos, quis eum perferendis repellat natus impedit, vitae quas ea sit dolore magnam
                        adipisci qui error nostrum veritatis.</p>
                    <div className='p-2  flex flex-col gap-3'>
                        <h1 className='text-3xl font-bold'>Elite Power</h1>
                        <p className='text-orange-500 text-2xl font-bold'>Client</p>
                    </div>
                </div>

                <div className=' m-4 overflow-hidden '>

                    <img className='w-full image-morph max-w-md sm:max-w-md  h-[350px] sm:h-[400px] rounded  object-cover' src={testimonal} alt="" />
                </div>

            </div>
        </>
    )
}

export default Testimonial