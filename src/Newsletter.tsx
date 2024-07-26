import { useState, useEffect } from 'react'
import './App.css';

import Telephone from '../public/image/telephone.png'

import Mailbox from '../public/image/mailbox.png'
import { Link, useLocation, useParams } from 'react-router-dom'
import BackgroundImage from '../public/image/real.png'
import { FaLinkedinIn } from "react-icons/fa";
import { RiMediumFill } from "react-icons/ri";

import 'prismjs'; // Import the core library  
//@ts-ignore
// @ts-expect-error
import remarkPrism from 'remark-prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';  // Import the plugin  
import { useBlogContext } from './DataContext';

interface Params extends Record<string, string | undefined> {
    id: string;
}

interface BlogAttributes {
    createdAt: string;
    Title: string;
    Content: string;
    CoverPicture: {
        data: {
            attributes: {
                url: string;
            };
        };
    };
    Category: string;
}

interface Blog {
    id: string;
    attributes: BlogAttributes;
}

interface BlogProps {
    blogss: {
        data: Blog[];
    } | null;
    loading: boolean;
    error: string;
}

const HomePage = ({ blogss, loading, error }: BlogProps) => {
    const { id } = useParams<Params>();
    const { blogs: blogsss, toggleBlog, toggleLoading, toggleError } = useBlogContext();
    const [selectedItem, setSelectedItem] = useState('Home');
    const location = useLocation();
    console.log(id)
    console.log(blogss)

    useEffect(() => {
        console.log(blogss); // Add this to debug
        if (blogss && blogss.data) {
            toggleBlog(blogss.data);
        }
        if (error) {
            toggleError(error);
        }
        if (loading) {
            toggleLoading(loading);
        } else {
            toggleLoading(false);
        }
    }, [blogss, error, loading, toggleLoading, toggleError, toggleBlog]);
    console.log(blogsss)
    let blog: Blog | null = null;

    if (blogsss.length > 0) { // Check if blogsss array has elements
        let arr = blogsss.filter((blogItem: Blog) => blogItem.id == id); // Use the correct type for filtering
        blog = arr[0]; // Assign the first item if exists
    }

    console.log(blog);
    // let blog = {}
    // if (blog) {
    //     let arr = blogsss.filter((blog: any) => blog.id == id)
    //     blog = arr[0]

    // } else {
    //     blog = {}
    // }
    // console.log(blog)
    useEffect(() => {
        if (location.pathname === `/newsletter/${id}`) {
            setSelectedItem('Newsletters');
        }
    }, [location.pathname]);

    const handleClick = (item: any) => {
        setSelectedItem(item);
    };



    useEffect(() => {
        let lastScrollX: any;
        // if (process.browser) {
        lastScrollX = window.pageXOffset || window.scrollX;
        const slideer = document.getElementById("sliderItem")
        //event
        slideer && slideer.addEventListener('scroll', function () {

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
    // const data = blogss.data
    const isoDate = blog?.attributes?.createdAt; // Optional chaining ensures safety when accessing nested properties
    const date = new Date(isoDate ?? ''); // Provide a fallback value ('') in case isoDate is undefined

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }; // Specify the type for options

    const theDate = date.toLocaleDateString('en-US', options);
    console.log(theDate);
    // const isoDate = blog?.attributes?.createdAt;
    // const date = new Date(isoDate);

    // const options: any = {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // };


    // const theDate = date.toLocaleDateString('en-US', options);
    // console.log(theDate)

    return (
        <div className="bg-black min-h-screen w-full pt-10 " style={{ backgroundImage: `url(${BackgroundImage})` }}>

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
                <p className='text-[#3A49A4] font-[Poppins] font-[600] text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px]'>{blog?.attributes.Title}</p>
            </div>
            <div className='min-h-fit mx-10 mt-10 max-md:mx-4 bg-[#100F0F] border-5 border-[#161616] p-5 rounded-[30px]'>
                <p className='font-[Inter] font-[600] text-[14px] max-lg:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-[#6941C6]'>{theDate}</p>
                <p className='font-[Inter] font-[700] text-[36px] max-lg:text-[33px] max-md:text-[27px] max-sm:text-[24px] text-[#FFFFFF] mt-5'>{blog?.attributes.Title}</p>
                {/* <p className='font-[Inter] font-[400] text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-[#FFFFFF] mt-5'>

                </p> */}
                <div className="markdown-container">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]} >
                        {blog?.attributes.Content}
                    </ReactMarkdown>
                </div>


            </div>
            <p className='font-[600] font-[Poppins] text-[24px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[12px] text-white pt-20 mx-10 max-md:mx-4'>Recent Newsletters</p>
            <div className='flex flex-col mx-10 max-md:mx-4 items-center justify-between gap-4 relative pt-5'>
                <div className='w-full  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide ' >
                    {loading && <p>Loading...</p>}
                    {error && <p> </p>}
                    {blogsss && blogsss.map((blog: any, index: any) => {
                        const yet = `${blog.attributes.CoverPicture.data.attributes.url}`
                        console.log(yet)
                        const isoDate = blog.attributes.createdAt;
                        const date = new Date(isoDate);

                        const options: any = {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        };

                        const theDate = date.toLocaleDateString('en-US', options);
                        console.log(theDate)
                        return (
                            <div className='w-[25%]  pb-5 max-md:w-[40%] max-sm:w-[42%] max-xsm:w-[44%] max-xsxl:w-[46%] pt-5 ' >
                                <Link to={`/newsletter/${blog.id}`} key={index}>
                                    <div style={{ backgroundImage: `url(${yet})` }} className=" rounded-[20px] bg-no-repeat object-cover w-full h-40 flex flex-row justify-end items-end relative  ">

                                    </div>
                                    <div className='py-2 whitespace-nowrap'>
                                        <div className='bg-[#F2F4F7] rounded-3xl h-fit w-fit p-3 flex flex-row justify-center items-center'>
                                            <p className='text-[#000000] font-[400] font-[Inter] text-[15px] max-lg:text-[13px] max-md:text-[11px] max-sm:text-[9px]'>
                                                {blog.attributes.Title.length > 30
                                                    ? `${blog.attributes.Title.slice(0, 30)}...`
                                                    : blog.attributes.Title}
                                            </p>
                                        </div>
                                        <div className=' flex flex-row justify-start items-center max-lg:flex-col  max-md:flex-row max-xsm:flex-col max-md:items-center max-xsm:items-start max-lg:items-start gap-4 py-3'>
                                            <div className=' flex flex-row justify-start items-center gap-2'>
                                                <div className='h-[7px] w-[7px] rounded-md bg-[#FD853A]'></div>
                                                <p className='font-[400] font-[Inter] text-[16px]  max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-white'>{theDate}</p>
                                            </div>
                                            <div className=' flex flex-row justify-start items-center gap-2'>
                                                <div className='h-[7px] w-[7px] rounded-md bg-[#FD853A]'></div>
                                                <p className='font-[400] font-[Inter] text-[16px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] text-white'>{blog.attributes.Category}</p>
                                            </div>
                                        </div>
                                        <p className='text-[#FFFFFF] overflow-hidden  whitespace-nowrap text-ellipsis w-[82%] font-[400] font-[Poppins] text-[24px] max-lg:text-[18px] max-md:text-[14px] max-sm:text-[12px] pt-2'>
                                            {blog.attributes.Content.length > 50
                                                ? `${blog.attributes.Content.slice(0, 50)}...`
                                                : blog.attributes.Content}
                                        </p>


                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mt-18 max-md:mt-14 pt-10 mx-10 max-md:mx-4'>

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
            <div className='mt-20 py-6 px-6 rounded-t-[33px] bg-[#161515] '>
                <div className='gap-6  flex flex-row justify-start items-center max-md:flex-col max-md:items-start'>
                    <p className='text-[#FFFFFF] font-[600] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Poppins] '> Contact me via: </p>
                    <div className='flex flex-row justify-start items-center gap-4'>
                        <img src={Mailbox} />
                        <p className='text-[#FFFFFF] font-[300] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Inter] '> visitolawaleomoyeni@gmail.com          </p>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-4'>
                        <img src={Telephone} />
                        <p className='text-[#FFFFFF] font-[300] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Inter] '> 1 (646) 290-0518   </p>
                    </div>
                </div>
                <div className=' mt-3 max-md:mt-8 flex flex-row justify-start  items-center gap-4  '>
                    <p className='text-[#FFFFFF] font-[600] text-[16px]   max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px]  font-[Poppins] '> Follow me on: </p>
                    <Link to='https://medium.com/@olawaleomoyeni.o/' target='_blank'>
                        <RiMediumFill className='text-white max-md:h-3 max-md:w-3' />
                    </Link>
                    <Link to='https://linkedin.com/in/olawale-omoyeni-148b851b2' target='_blank'>
                        <FaLinkedinIn className='text-white max-md:h-3 max-md:w-3' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
