import React, { useState, useEffect } from 'react'
import './App.css';
import Arrow from './assets/image/arrow.png'
import Telephone from './assets/image/telephone.png'
import Mailbox from './assets/image/mailbox.png'
import { Link, useLocation, useParams } from 'react-router-dom'

interface Params extends Record<string, string | undefined> {
    id: string;
  }
  

const HomePage = () => {
    const { id } = useParams<Params>();
    const [selectedItem, setSelectedItem] = useState('Home');
    const location = useLocation();
    console.log(id)
    useEffect(() => {
        if (location.pathname === '/newsletter/id') {
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


    useEffect(() => {
        let lastScrollX: any;
        // if (process.browser) {
        lastScrollX = window.pageXOffset || window.scrollX;
        const slideer = document.getElementById("sliderItem")
        slideer && slideer.addEventListener('scroll', function (event) {
            let currentScrollX = window.pageXOffset || window.scrollX;
            if (lastScrollX !== currentScrollX) {
                // Horizontal scrolling has occurred
                // The scroll event code goes here
                slideer.scrollLeft = slideer.scrollLeft + 500
            }
            lastScrollX = currentScrollX;
        });
        // }
    }, []);

    return (
        <div className="bg-black min-h-screen bg-fourthMyImage w-full pt-10 ">

            <div className='w-full flex flex-row justify-center items-center px-20 max-xl:px-10 max-sm:px-4'>
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

            <div className='flex flex-col justify-start items-start mt-16 mx-10 max-md:mx-4'>
                <p className='font-[Poppins] font-[600] text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-[#FFFFFF]'>{'Newsletter'}</p>
                <p className='text-[#3A49A4] font-[Poppins] font-[600] text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px]'>Grid system for better Design User Interface</p>
            </div>
            <div className='min-h-fit mx-10 mt-10 max-md:mx-4 bg-[#100F0F] border-5 border-[#161616] p-5 rounded-[30px]'>
                <p className='font-[Inter] font-[600] text-[14px] max-lg:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-[#6941C6]'>Sunday , 1 Jan 2023</p>
                <p className='font-[Inter] font-[700] text-[36px] max-lg:text-[33px] max-md:text-[27px] max-sm:text-[24px] text-[#FFFFFF] mt-5'>Grid system for better Design User Interface</p>
                <p className='font-[Inter] font-[400] text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-[#FFFFFF] mt-5'>
                    A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
                    If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.
                    There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                    Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                    Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                    Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                    Breaking Down the Grid
                    Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                    Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                    Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.
                    Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.
                    Examples of Grids in Use
                    Example 1: Hierarchical Grid
                    Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.
                    Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.
                </p>
            </div>
            <p className='font-[600] font-[Poppins] text-[24px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[12px] text-white pt-20 px-20 max-xl:px-10 max-sm:px-4'>Recent Newsletters</p>
            <div className='flex flex-col items-center justify-between gap-4 relative pt-5'>
                <div className='w-full p-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide ' >

                    {/* <div className="flex w-full flex-row gap-10 max-md:gap-14 max-sm:gap-0 flex-wrap justify-between max-md:justify-around max-sm:justify-between items-center px-20 max-xl:px-10 max-sm:px-4 mt-10"> */}
                    {blogs.map((blog, index) => {
                        return (
                            <div id="sliderItem"  key={index} className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block mx-3'>
                                <Link to='/newsletter/43' className='pt-5'>
                                    <div className="bg-myimage rounded-[20px] bg-no-repeat object-cover w-full h-40 flex flex-row justify-end items-end relative">

                                    </div>
                                    <div className='py-2 '>
                                        <div className='bg-[#F2F4F7] rounded-3xl h-fit w-fit p-3 flex flex-row justify-center items-center'>
                                            <p className='text-[#000000] font-[400] font-[Inter] text-[15px] max-lg:text-[13px] max-md:text-[11px] max-sm:text-[9px]'>{blog.name}</p>
                                        </div>
                                        <div className=' flex flex-row justify-start items-center  gap-4 py-3'>
                                            <div className=' flex flex-row justify-start items-center gap-2'>
                                                <div className='h-[7px] w-[7px] rounded-md bg-[#FD853A]'></div>
                                                <p className='font-[400] font-[Inter] text-[16px]  max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-white'>{blog.text1}</p>
                                            </div>
                                            <div className=' flex flex-row justify-start items-center gap-2'>
                                                <div className='h-[7px] w-[7px] rounded-md bg-[#FD853A]'></div>
                                                <p className='font-[400] font-[Inter] text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-white'>{blog.text2}</p>
                                            </div>
                                        </div>
                                        <p className='text-[#FFFFFF]  whitespace-normal font-[400] font-[Poppins] text-[24px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[12px] pt-2'>{blog.text3}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}

                    {/* </div> */}
                </div>


            </div>


            <div className='mt-18 max-md:mt-14 pt-10 px-20 max-xl:px-10 max-sm:px-4'>

                <p className='text-[#9259F7] font-[600] text-[36px]  max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px] font-[Poppins]'>CONTACT ME </p>
                <div className='mt-10'>
                    <p className='text-[#FFFFFF] font-[400] text-[16px]  max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] font-[Poppins]'>If you ever want to grab a coffee/bubble tea (virtually) or
                    </p>
                    <p className='text-[#FFFFFF] font-[400] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Poppins]'>
                        just want a quick chat - you can send me a message here!</p>

                </div>
                <div className='mt-10 flex flex-row justify-start gap-6 items-center'>
                    <div className='h-[55px] w-fit max-md:h-fit max-md:py-4 px-4 border border-[#585858] rounded-[50px] flex flex-row justify-center gap-4 max-sm:gap-1 items-center bg-black'>
                        <img src={Mailbox} />
                        <p className='text-[#FFFFFF] font-[300] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] max-sm:text-[8px] max-xsm:text-[7px]  font-[Poppins] '> Send an email </p>
                    </div>
                    <div className='h-[55px] w-fit px-4 max-md:h-fit max-md:py-4 border border-[#585858] rounded-[50px] flex flex-row justify-center gap-4 max-sm:gap-1 items-center bg-black'>
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
