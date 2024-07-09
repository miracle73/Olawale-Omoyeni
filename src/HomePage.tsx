import  { useState, useEffect } from 'react'
import './App.css';
import AI_Image from '../public/image/AI.png'
import SecondImage from '../public/image/Group.png'
import Specialist from '../public/image/Specialist.png'
import Vector from '../public/image/Vector.png'
import Frame from '../public/image/Frame.png'
import Telephone from '../public/image/telephone.png'
import Mailbox from '../public/image/mailbox.png'
import { Link, useLocation } from 'react-router-dom'

const HomePage = () => {

  const [selectedItem, setSelectedItem] = useState('Home'); 
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/blog') {
        setSelectedItem('Blog');
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
    // event
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
  return (
    <div className="bg-black min-h-screen bg-secondMyImage bg-no-repeat w-full pt-10 ">

      <div className='w-full flex fixed top-10 flex-row justify-center items-center px-20 max-xl:px-10 max-sm:px-4'>
        <div className='h-14 max-xl:h-12 max-lg:h-10 max-md:h-8 w-1/2 max-lg:w-[65%] max-sm:w-3/4 max-xsm:w-[80%] max-xsxl:w-[92%] rounded-[25px] border-[0.03px] border-[#CBCBCB] bg-[#171717] flex flex-row justify-between items-center  px-10 max-lg:px-7 max-md:px-5 max-sm:px-3'>
          <Link to="/"
            className={`font-[400] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] max-xsm:text-[8px] font-[Poppins] text-white ${selectedItem === 'Home' ? 'bg-[#9259F7] px-1 py-1 md:px-2  md:py-2 rounded-2xl md:rounded-[22px]' : ''
              }`}
            onClick={() => handleClick('Home')}
          >
            Home
          </Link>
          <div
            className={`font-[400] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] max-xsm:text-[8px] font-[Poppins] text-white ${selectedItem === 'About me' ? 'bg-[#9259F7] px-1 py-1 md:px-2  md:py-2 rounded-2xl md:rounded-[22px]' : ''
              }`}
            onClick={() => handleClick('About me')}
          >
            <a href='#about-me'>
              About me
            </a>
          </div>

          <Link to="/newsletters"
            className={`font-[400] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] max-xsm:text-[8px] font-[Poppins] text-white ${selectedItem === 'Newsletters' ? 'bg-[#9259F7] px-1 py-1 md:px-2  md:py-2 max-sm:rounded-xl rounded-2xl md:rounded-[17px]' : ''
              }`}
            onClick={() => handleClick('Newsletters')}
          >
            Newsletters
          </Link>
          <div
            className={`font-[400] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] max-xsm:text-[8px] font-[Poppins] text-white ${selectedItem === 'Contact' ? 'bg-[#9259F7] px-1 py-1 md:px-2  md:py-2 rounded-2xl md:rounded-[22px]' : ''
              }`}
            onClick={() => handleClick('Contact')}
          >
            <a href='#contact'>
              Contact
            </a>
          </div>
        </div>
      </div>


      <div className='w-full flex flex-row justify-between items-center px-20 max-xl:px-10 max-sm:px-4 max-md:flex-col max-md:items-start max-md:pt-20'>
        <div className='w-1/2 max-lg:w-[55%] max-md:w-[100%] flex flex-col gap-4'>
          <p className='text-[#E5E9F0] font-[400] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px] font-[Poppins]'>Hi all. I am</p>
          <p className='text-[#E5E9F0] font-[600] text-[52px] max-xl:text-[48px] max-lg:text-[44px] max-md:text-[40px] max-sm:text-[28px] max-xsm:text-[20px] font-[Poppins]'>Olawale O. Omoyeni,</p>
          <img src={Specialist} className=' w-44' />
          <p className='text-[#FFFFFF] font-[400] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] font-[Poppins]'>I am an experienced professional in IT controls, cybersecurity, and risk management.</p>
          <div className='h-[55px] w-[190px] max-sm:w-fit max-sm:h-fit max-sm:py-4 max-sm:px-4 border border-[#585858] rounded-[80px] flex flex-row justify-center items-center'>
            <p className='text-[#FFFFFF] font-[500] text-[15px] max-xl:text-[13px] max-lg:text-[11px] max-md:text-[9px] font-[Poppins] text-center'>Olawale O. Omoyeni</p>
          </div>
        </div>
        <div className='w-1/2 max-lg:w-[40%] flex flex-row justify-center items-center max-md:justify-start max-md:items-start max-md:w-[100%]'>
          <img src={AI_Image} />
        </div>
      </div>

      <div id="about-me" className='mx-20 max-xl:mx-10 max-sm:mx-4 border-dashed border-t-[3px] border-[#201E1E] mt-40 max-md:mt-20 pt-24 max-md:pt-10 flex flex-row max-md:flex-col justify-between items-center max-md:items-start' >
        <div className='w-1/2 max-lg:w-[55%] max-md:w-[100%]  flex flex-col justify-start gap-8'>
          <p className='text-[#9259F7] font-[600] text-[36px] max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px] font-[Poppins]'> About Me</p>
          <p className='text-[#FFFFFF] font-[400]  text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px] font-[Poppins]'>
            Olawale O. Omoyeni is a dedicated Ph.D. candidate at the University of the Cumberlands, specializing in Information Technology with a concentration in Artificial Intelligence. With extensive experience in IT controls, cybersecurity, and risk management, Olawale possesses a profound understanding of machine learning, generative AI, AI risk management, and ethical considerations in AI development. He combines a strong theoretical foundation with practical skills in programming, data analysis, and threat modeling, making him a valuable asset to any academic or professional team.
          </p>
        </div>
        <div className='w-1/2 max-lg:w-[40%] max-md:w-[100%] max-md:pt-10  flex flex-row justify-center max-md:justify-start items-start'>
          <img src={SecondImage} />
        </div>
      </div>
      <div className='bg-thirdMyImage bg-no-repeat'>
      <div className='mt-32 pt-10 px-20 max-xl:px-10 max-sm:px-4'>
        <div className='flex flex-row justify-start gap-4 items-start mb-10'>
          <p className='text-[#9259F7] font-[600] text-[36px] max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px] font-[Poppins]'> Area of expertise </p>
          <img src={Vector} className='mt-6' />
        </div>

        <div className='flex max-sm:my-3 flex-row justify-between max-md:flex-col items-start px-5 h-20'>
          <div className='w-[47%] max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]   text-white'>· IT General Controls (ITGCs) and Security Risk Assessment</p>
          </div>
          <div className='w-[47%] max-sm:pt-3  max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· Vendor Risk Management and Continous Monitoring</p>
          </div>
        </div>
        <div className='flex max-sm:my-3 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
          <div className='w-[47%] max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· SOX and SSAE 18/SOC Audit Processes</p>
          </div>
          <div className='w-[47%] max-sm:pt-3  max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· Familiarity with NIST, ISO27001, PCI DSS, SOC 2, and COBIT</p>

          </div>
        </div>
        <div className='flex max-sm:my-3 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
          <div className='w-[47%] max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· SIEM, firewalls, IDS/IPS, vulnerability assessment, and encryption</p>
          </div>
          <div className='w-[47%] max-sm:pt-3  max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· Project management using Wrike; proficient with Microsoft Office Suite</p>
          </div>
        </div>
        <div className='flex max-sm:my-3 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
          <div className='w-[47%] max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· Data analytics with MS Excel, Power Query, MS Power BI, and SQL</p>
          </div>
          <div className='w-[47%] max-sm:pt-3 ma  max-md:w-[100%]'>

            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· Programming and data analysis using Python, Pandas, NumPy, Matplotlib, and Seaborn</p>
          </div>
        </div>
        <div className='flex max-sm:my-6 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
          <div className='w-[47%] max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· Knowledge in Machine Learning, NLP, and Generative AI with LLM</p>
          </div>
          <div className='w-[47%] max-sm:pt-3 max-md:w-[100%]'>
            <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'>· Understanding of Responsible AI and Ethical AI principles</p>
          </div>
        </div>

      </div>
      <div className='mt-32 max-md:mt-20 pt-10 px-20 max-xl:px-10 max-sm:px-4'>

        <p className='text-[#9259F7] font-[600] text-[36px] max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px]  font-[Poppins]'> WORK EXPERIENCE </p>
        <div className='flex flex-col items-center justify-between gap-4 relative pt-5'>
          <div className='w-full p-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide ' >
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 max-sm:p-2 " >
                <p className='font-[700] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px]  text-[#FFFFFF] whitespace-normal'>University of the People – Pasadena, California</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#3A49A4] whitespace-normal'>Online Adjunct Instructor</p>
                <p className='font-[400] italic font-[Poppins] text-[14px] text-[#FFFFFF] whitespace-normal'>February 2024 - Present</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal pt-5'>· Facilitates weekly discussion board threads for students in Information Security/Cybersecurity and Information Technology graduate programs.</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Grade assignments and provide feedback within 72 hours of due dates. </p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Responds to student inquiries within 24 hours. </p>

              </div>
            </div>
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 max-sm:p-2 " >
                <p className='font-[700] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>Instructional Connections, LLC – Dallas, Texas </p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#3A49A4] whitespace-normal'>Online Academic Coach/Teacher's Assistant </p>
                <p className='font-[400] italic font-[Poppins] text-[14px] text-[#FFFFFF] whitespace-normal'>January 2024 - Present</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal pt-5'>· Supports students in online graduate programs in Information Security/Cybersecurity and Information Science/Technology.</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Provides feedback on assignments and responds to student questions promptly.</p>
              </div>
            </div>
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 max-sm:p-2" >
                <p className='font-[700] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>Sun Communities & Sun Outdoors – Southfield, Michigan</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#3A49A4] whitespace-normal'>Senior IT Controls Analyst</p>
                <p className='font-[400] italic font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>December 2021 – October 2023</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal pt-5'>· Tested IT general and application controls, identified deficiencies and provided recommendations.</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Managed SOX compliance and collaborated with external auditors.</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Automated compliance reporting processes, reducing manual effort by 40%.</p>
              </div>
            </div>
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 max-sm:p-2" >
                <p className='font-[700] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>RWJ Barnabas Health (Insight Global) - New Jersey</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#3A49A4] whitespace-normal'>Third-Party Risk Analyst Intern</p>
                <p className='font-[400] italic font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>June 2021 – November 2021</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal pt-5'>· Performed vendor security assessments and ongoing monitoring.</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Evaluated and documented residual risks before contract execution.</p>

              </div>
            </div>
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 max-sm:p-2" >
                <p className='font-[700] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>Hackensack Meridian Health (Robert Half) - New Jersey</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#3A49A4] whitespace-normal'>IT Technical Support (Contract)</p>
                <p className='font-[400] italic font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>April 2019 – June 2020</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal pt-5'>· Provided technical support and problem resolution to clients.</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Deployed and configured new workstations and peripheral equipment.</p>
              </div>
            </div>
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 max-sm:p-2" >
                <p className='font-[700] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>Standard Chartered Bank - Nigeria</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#3A49A4] whitespace-normal'>Specialist, Financial Crime Compliance</p>
                <p className='font-[400] italic font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>April 2013 – October 2017</p>
                <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal pt-5'>· Assessed risks arising from various business activities and provided risk management support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-32 max-md:mt-20 pt-10 px-20 max-xl:px-10 max-sm:px-4'>

        <p className='text-[#9259F7] font-[600] text-[36px] max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px] font-[Poppins]'> EDUCATIONAL QUALIFICATIONS </p>
        <div className='flex flex-row justify-between items-start px-5 h-80 pt-10 max-md:flex-col'>
          <div className='w-1/2 max-md:w-[100%] h-full pr-20 flex flex-col justify-between'>
            <div>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>University Of the Cumberlands - Williamsburg, KY
              </p>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>Doctor of Philosophy (Ph.D.) Information Technology
              </p>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>(Concentration in Artificial Intelligence)
              </p>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>May 2023 – Dec 2025(4.0GPA)
              </p>
            </div>
            <div className='mt-10'>
              <p className='font-[450] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>University Of the Cumberlands - Williamsburg, KY
              </p>
              <p className='font-[450] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>Certificate in Information Technology
              </p>
            </div>
          </div>
          <img src={Frame} className='max-md:hidden' />
          <div className='w-1/2 max-md:w-[100%] pl-20  max-md:pl-0 max-md:mt-10 flex flex-col h-full justify-between'>
            <div className='w-full'>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>Grand Canyon University - Phoenix, AZ
              </p>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>Master of Science
              </p>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>Master of Science in Information Assurance and
              </p>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>Cybersecurity
              </p>
              <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>Completed 2022 (3.96 GPA)
              </p>
            </div>
            <div className='mt-10'>
              <p className='font-[450] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>Ekiti State University
              </p>
              <p className='font-[450] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#FFFFFF]'>Bachelor of Science in Microbiology
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-32 max-md:mt-28 max-xsm:mt-36 pt-10 px-20 max-xl:px-10 max-sm:px-4'>

        <p className='text-[#9259F7] font-[600] text-[36px] max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px] font-[Poppins]'> CERTIFICATION </p>
        <div className='flex flex-col items-center justify-between gap-4 relative pt-5'>
          <div className='w-full p-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide ' >
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 flex flex-row justify-center items-center" >
                <p className='font-[600] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'> Certified Information Systems Auditor (CISA) </p>

              </div>
            </div>
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 flex flex-row justify-center items-center" >
                <p className='font-[600] font-[Poppins] text-[14px]  max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'> 	Certified Information Security Manager (CISM) </p>

              </div>
            </div>
            <div id="sliderItem" className='w-[40%] max-lg:w-[50%] max-sm:w-[55%] max-xsm:w-[65%] relative overflow-hidden shadow-md pb-2 rounded-md hover:cursor-pointer inline-block hover:scale-105 ease-in-out duration-300 mx-3'>
              <div className=" bg-[#111111]  h-fit rounded-[15px]  border border-[#1E2D3D] p-4 flex flex-row justify-center items-center" >

                <p className='font-[600] font-[Poppins] text-[14px]  max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'> 	CompTIA Security+ </p>

              </div>
            </div>

          </div>
        </div>
      </div>
      <p className='font-[Poppins] font-[500] text-[16px]  max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#FFFFFF] mt-10 max-md:mt-6 px-20 max-xl:px-10 max-sm:px-4'>
        Olawale's comprehensive background in IT controls, cybersecurity, and risk management, coupled with his academic pursuits in Artificial Intelligence, position him as a valuable asset capable of contributing significantly to any team. His technical expertise, practical experience, and commitment to excellence in education make him well-suited to shape the next generation of IT, Artificial Intelligence, and cybersecurity professionals.
      </p>
      <div id="contact" className='mt-32 max-md:mt-20 pt-10 px-20 max-xl:px-10 max-sm:px-4'>

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
    </div>
  )
}

export default HomePage
