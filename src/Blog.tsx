import React, { useState, useEffect } from 'react'
import './App.css';
import Arrow from './assets/image/arrow.png'
import Telephone from './assets/image/telephone.png'
import Mailbox from './assets/image/mailbox.png'
import { Link, useLocation } from 'react-router-dom'



const HomePage = () => {

    const [selectedItem, setSelectedItem] = useState('Home');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/newsletters') {
            setSelectedItem('Newsletters');
        }
    }, [location.pathname]);

    const handleClick = (item: any) => {
        setSelectedItem(item);
    };

    const blogs = [
        {
            image: 'bg-myimage',
            name: "App Design",
            text1: "Jayesh Patil",
            text2: "09 Oct, 2023",
            text3: "Sugee: Loan Management System for Rural Sector."
        },
        {
            image: 'bg-myimage',
            name: " UI/ UX Design",
            text1: "Jayesh Patil",
            text2: "10 Nov, 2023",
            text3: "Design Unraveled: Behind the Scenes of UI/UX Magic"
        },
        {
            image: 'bg-myimage',
            name: "App Design",
            text1: "Jayesh Patil",
            text2: "09 Oct, 2023",
            text3: "Sugee: Loan Management System for Rural Sector."
        },
        {
            image: 'bg-myimage',
            name: " UI/ UX Design",
            text1: "Jayesh Patil",
            text2: "10 Nov, 2023",
            text3: "Design Unraveled: Behind the Scenes of UI/UX Magic"
        },
        {
            image: 'bg-myimage',
            name: "App Design",
            text1: "Jayesh Patil",
            text2: "09 Oct, 2023",
            text3: "Sugee: Loan Management System for Rural Sector."
        },
        {
            image: 'bg-myimage',
            name: " UI/ UX Design",
            text1: "Jayesh Patil",
            text2: "10 Nov, 2023",
            text3: "Design Unraveled: Behind the Scenes of UI/UX Magic"
        },

    ]


    return (
        <div className="bg-black min-h-screen bg-fourthMyImage w-full pt-10 ">

            <div className='w-full flex fixed top-10 flex-row justify-center items-center px-20 max-xl:px-10 max-sm:px-4'>
                <div className='h-14 max-xl:h-12 max-lg:h-10 max-md:h-8 w-1/2 max-lg:w-[65%] max-sm:w-3/4 max-xsm:w-[80%] max-xsxl:w-[92%] rounded-[25px] border-[0.03px] border-[#CBCBCB] bg-[#171717] flex flex-row justify-between items-center px-10 max-lg:px-7 max-md:px-5 max-sm:px-3'>
                    <Link to="/"
                        className={`font-[400] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] max-xsm:text-[8px] font-[Poppins] text-white ${selectedItem === 'Home' ? 'bg-[#9259F7] px-1 py-1  md:px-2  md:py-2 rounded-2xl md:rounded-[22px]' : ''
                            }`}
                        onClick={() => handleClick('Home')}
                    >
                        Home
                    </Link>
                    <Link to="/"
                        className={`font-[400] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] max-xsm:text-[8px] font-[Poppins] text-white ${selectedItem === 'About me' ? 'bg-[#9259F7] px-1 py-1  md:px-2  md:py-2 rounded-2xl md:rounded-[px]' : ''
                            }`}
                        onClick={() => handleClick('About me')}
                    >
                        About me
                    </Link>

                    <Link to="/newsletters"
                        className={`font-[400] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] max-xsm:text-[8px] font-[Poppins] text-white ${selectedItem === 'Newsletters' ? 'bg-[#9259F7] px-1 py-1  md:px-2  md:py-2 rounded-2xl max-sm:rounded-xl md:rounded-[17px]' : ''
                            }`}
                        onClick={() => handleClick('Newsletters')}
                    >
                        Newsletters
                    </Link>
                    <Link to="/"
                        className={`font-[400] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] max-xsm:text-[8px] font-[Poppins] text-white ${selectedItem === 'Contact' ? 'bg-[#9259F7] px-1 py-1  md:px-2  md:py-2 rounded-2xl md:rounded-[22px]' : ''
                            }`}
                        onClick={() => handleClick('Contact')}
                    >
                        Contact
                    </Link>
                </div>
            </div>


            <p className='font-[600] font-[Poppins] text-[24px] text-white pt-32 px-20 max-xl:px-10 max-sm:px-4'>All Newsletters</p>

            <div className="flex w-full flex-row gap-10 max-md:gap-14 max-sm:gap-0 flex-wrap justify-between max-md:justify-around max-sm:justify-between items-center px-20 max-xl:px-10 max-sm:px-4 mt-10">
                {blogs.map((blog, index) => {
                    return (
                        <div className='w-[25%] max-md:w-[40%] max-sm:w-[42%] max-xsm:w-[44%] max-xsxl:w-[46%] pt-5' key={index}>
                            <div className="bg-myimage rounded-[20px] bg-no-repeat object-cover w-full h-40 flex flex-row justify-end items-end relative">
                            
                            </div>
                            <div className='py-2 '>
                                <div className='bg-[#F2F4F7] rounded-3xl h-fit w-fit p-3 flex flex-row justify-center items-center'>
                                    <p className='text-[#000000] font-[400] font-[Inter] text-[15px] max-lg:text-[13px] max-md:text-[11px] max-sm:text-[9px]'>{blog.name}</p>
                                </div>
                                <div className=' flex flex-row justify-start items-center max-lg:flex-col  max-md:flex-row max-xsm:flex-col max-md:items-center max-xsm:items-start max-lg:items-start gap-4 py-3'>
                                    <div className=' flex flex-row justify-start items-center gap-2'>
                                        <div className='h-[7px] w-[7px] rounded-md bg-[#FD853A]'></div>
                                        <p className='font-[400] font-[Inter] text-[16px]  max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-white'>{blog.text1}</p>
                                    </div>
                                    <div className=' flex flex-row justify-start items-center gap-2'>
                                        <div className='h-[7px] w-[7px] rounded-md bg-[#FD853A]'></div>
                                        <p className='font-[400] font-[Inter] text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-white'>{blog.text2}</p>
                                    </div>
                                </div>
                                <p className='text-[#FFFFFF] font-[400] font-[Poppins] text-[24px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[12px] pt-2'>{blog.text3}</p>
                            </div>
                        </div>

                    )
                })}

            </div>
            <div className='mt-32 max-md:mt-20 pt-10 px-20 max-xl:px-10 max-sm:px-4'>

                <p className='text-[#9259F7] font-[600] text-[36px]  max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px] font-[Poppins]'>CONTACT ME </p>
                <div className='mt-10'>
                    <p className='text-[#FFFFFF] font-[400] text-[16px]  max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] font-[Poppins]'>If you ever want to grab a coffee/bubble tea (virtually) or
                    </p>
                    <p className='text-[#FFFFFF] font-[400] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Poppins]'>
                        just want a quick chat - you can send me a message here!</p>

                </div>
                <div className='mt-10 flex flex-row justify-start gap-6 items-center'>
                    <div className='h-[55px] w-fit max-md:h-fit max-md:py-4 px-4 border border-[#585858] rounded-[50px] flex flex-row justify-center gap-4 items-center bg-black'>
                        <img src={Mailbox} />
                        <p className='text-[#FFFFFF] font-[300] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] max-sm:text-[8px] max-xsm:text-[7px]  font-[Poppins] '> Send an email </p>
                    </div>
                    <div className='h-[55px] w-fit px-4 max-md:h-fit max-md:py-4 border border-[#585858] rounded-[50px] flex flex-row justify-center gap-4 items-center bg-black'>
                        <img src={Telephone} />
                        <p className='text-[#FFFFFF] font-[300] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] max-sm:text-[8px] max-xsm:text-[7px] font-[Poppins] '> 1 (646) 290-0518 </p>
                    </div>
                </div>

            </div>
            <div className='mt-20 gap-6 py-6 px-6 rounded-t-[33px] bg-[#161515] flex flex-row justify-start items-center max-md:flex-col max-md:items-start'>
                <p className='text-[#FFFFFF] font-[600] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Poppins] '> Contact me: </p>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <img src={Mailbox} />
                    <p className='text-[#FFFFFF] font-[300] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Inter] '> visitolawaleomoyeni@gmail.com          </p>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <img src={Telephone} />
                    <p className='text-[#FFFFFF] font-[300] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Inter] '> 1 (646) 290-0518   </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage
