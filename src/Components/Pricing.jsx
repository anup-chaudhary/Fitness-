import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MdOutlineChecklist } from "react-icons/md";

const Pricing = () => {
    const [alignment, setAlignment] = React.useState('Monthly');

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) setAlignment(newAlignment);
    };

    const Gymplan = [
        { name: "Basic", price: 39, yearly: 390 },
        { name: "Premium", price: 79, yearly: 790 },
        { name: "Elite", price: 129, yearly: 1290 }
    ];

    return (
        <>
            <div className='text-white p-3 m-3 max-w-full h-fit'>
                <div className='flex flex-col justify-between items-center gap-3'>
                    <p className='text-lg text-orange-500'>Pricing</p>
                    <h1 className='text-3xl font-semibold'>
                        Choose Your <span className='text-orange-500'>Plan</span>
                    </h1>

                    {/* Toggle for Monthly / Yearly */}
                    <ToggleButtonGroup
                        color=" "
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Pricing Period"
                        sx={{
                            '& .MuiToggleButton-root': {
                                color: 'white',
                                backgroundColor: '#F25912',
                                border: 'none',
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 600,
                                padding: '8px 20px',
                                '&:hover': {
                                    backgroundColor: '#AA2B1D',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#CF0F0F',
                                    color: 'white',
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: '#CF0F0F',
                                },
                            },
                        }}
                    >

                        <ToggleButton value="Monthly">Monthly</ToggleButton>
                        <ToggleButton value="Yearly">Yearly</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>

            <div className='text-white  p-4 m-3 gap-6 grid sm:grid-cols-2 lg:grid-cols-3'>
                {Gymplan.map((item, index) => {

                    const displayPrice = alignment === 'Monthly' ? item.price : item.yearly;

                    return (
                        <div
                            key={index}
                            className='border price  shadow-gray-600/50 shadow-xl m-3 flex flex-col  gap-2 rounded-xl p-3'
                        >
                            <p className='text-4xl font-semibold'>{item.name}</p>
                            <p className='text-orange-500 text-3xl font-semibold'>
                                ${displayPrice}{' '}
                                <span className='text-lg'>
                                    {alignment === 'Monthly' ? '/per month' : '/per year'}
                                </span>
                            </p>
                            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima?</p>

                            {/* Basic Plan Features */}
                            {item.name === "Basic" && (
                                <div className='p-3 price  grid sm:grid-cols-1 gap-2 text-lg'>
                                    <div className='flex p-2 items-center justify-between '>
                                        <p>Mobile app access</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='p-2 justify-between items-center flex'>
                                        <p>Access to gym equipment</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='flex p-2 items-center justify-between '>
                                        <p>Basic fitness classes</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='flex p-2 items-center justify-between'>
                                        <p className='text-lg'>Locker room access</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                </div>
                            )}

                            {/* Premium Plan Features */}
                            {item.name === "Premium" && (
                                <div className='p-3 price grid sm:grid-cols-1'>
                                    <div className='flex items-center p-2 justify-between'>
                                        <p>All Basic features</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='flex items-center p-2 justify-between'>
                                        <p>Unlimited CrossFit Classes</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='flex items-center p-2 justify-between'>
                                        <p className='text-lg'>Yoga and mobility classes</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='flex items-center p-2 justify-between'>
                                        <p className='text-lg'>Priority class booking</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                </div>
                            )}

                            {/* Elite Plan Features */}
                            {item.name === "Elite" && (
                                <div className='grid sm:grid-cols-1 gap-2 p-3'>
                                    <div className='flex justify-between gap-2 items-center p-2'>
                                        <p>All premium features</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='flex justify-between items-center p-2'>
                                        <p>Personal training sessions 2</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='flex justify-between items-center p-2'>
                                        <p>Custom meal planning</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                    <div className='flex justify-between items-center p-2'>
                                        <p>Recovery and message therapy</p>
                                        <MdOutlineChecklist size={45} color='#F25912' />
                                    </div>
                                </div>
                            )}

                            {/* Orange Button */}
                            <div className=' m-4  p-3 '>
                                <button className='bg-orange-500 cursor-pointer p-3 transition hover:bg-orange-600 font-semibold py-3 text-lg rounded'>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Pricing;
