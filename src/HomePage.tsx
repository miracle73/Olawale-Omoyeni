import { useState, useEffect } from 'react'
import './App.css';
import AI_Image from '../public/image/AI.png'
import SecondImage from '../public/image/Group.png'
// import Specialist from '../public/image/Specialist.png'
import { FaXTwitter } from "react-icons/fa6";
import Vector from '../public/image/Vector.png'
import Frame from '../public/image/Frame.png'
import Telephone from '../public/image/telephone.png'
import Mailbox from '../public/image/mailbox.png'
import { Link, useLocation } from 'react-router-dom'
import Background from '../public/image/Background.png'
import Background2 from '../public/image/Background2.png'
import { FaLinkedinIn } from "react-icons/fa";
import { RiMediumFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
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
    <div className="bg-black min-h-screen bg-no-repeat w-full pt-10 " style={{ backgroundImage: `url(${Background})` }}>

      <div className='w-full flex fixed top-10 flex-row justify-center items-center px-20 max-xl:px-10 max-sm:px-4 z-10'>
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

          <p className='text-[#FFFFFF] font-[400] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] font-[Poppins]'>An AI expert currently pursuing a PhD in Information Technology & Artificial Intelligence, with hands-on experience in machine learning, data analysis, and statistical modeling.</p>
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
            I am a Ph.D. candidate specializing in Generative AI, Machine learning, AI assurance, responsible AI concentrating on adversarial AI and an adjunct instructor. My professional background includes extensive experience in IT risk and compliance, GRC (Governance, Risk Management, and Compliance), and TPRM (Third Party Risk Management). I bring a profound understanding of machine learning, generative AI, and the critical aspects of AI assurance. This includes managing risks, ensuring ethical development, and mitigating bias in AI systems. My strong theoretical foundation is coupled with practical skills in programming, data analysis, and threat modeling, making me a valuable asset to any team seeking to develop and deploy sustainable AI.
          </p>
        </div>
        <div className='w-1/2 max-lg:w-[40%] max-md:w-[100%] max-md:pt-10  flex flex-row justify-center max-md:justify-start items-start'>
          <img src={SecondImage} />
        </div>
      </div>
      <div className=' bg-no-repeat' style={{ backgroundImage: `url(${Background2})` }}>
        <div className='mt-32 pt-10 px-20 max-xl:px-10 max-sm:px-4'>
          <div className='flex flex-row justify-start gap-4 items-start mb-10'>
            <p className='text-[#9259F7] font-[600] text-[36px] max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px] font-[Poppins]'> Area of expertise </p>
            <img src={Vector} className='mt-6' />
          </div>
          <div className='flex max-sm:my-6 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
            <div className='w-[47%] max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Machine Learning</p>
            </div>
            <div className='w-[47%] max-sm:pt-3 max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Statistical Analysis</p>
            </div>
          </div>
          <div className='flex max-sm:my-3 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
            <div className='w-[47%] max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Large Language Model (LLM)</p>
            </div>
            <div className='w-[47%] max-sm:pt-3 ma  max-md:w-[100%]'>

              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Deep Learning</p>
            </div>
          </div>
          <div className='flex max-sm:my-3 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
            <div className='w-[47%] max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Adversarial Machine Learning</p>
            </div>
            <div className='w-[47%] max-sm:pt-3  max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> AI Security & Threat Modeling</p>

            </div>
          </div>
          <div className='flex max-sm:my-6 flex-row justify-between  max-md:flex-col items-start px-5 h-24'>
            <div className='w-[47%] max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Natural Language Processing (NLP)</p>
            </div>
            <div className='w-[47%] max-sm:pt-3 max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Generative AI</p>
            </div>
          </div>
          <div className='flex max-sm:my-6 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
            <div className='w-[47%] max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Computer Vision</p>
            </div>
            <div className='w-[47%] max-sm:pt-3 max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Responsible AI</p>
            </div>
          </div>
          <div className='flex max-sm:my-3 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
            <div className='w-[47%] max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Ethical AI Techniques</p>
            </div>
            <div className='w-[47%] max-sm:pt-3  max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> AI Ethics and Governance</p>
            </div>
          </div>

          <div className='flex max-sm:my-6 flex-row justify-between  max-md:flex-col items-start px-5 h-20'>
            <div className='w-[47%] max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Project Management </p>
            </div>
            <div className='w-[47%] max-sm:pt-3 max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> Vendor Risk Management and Continous Monitoring</p>
            </div>
          </div>

          <div className='flex max-sm:my-3 flex-row justify-between max-md:flex-col items-start px-5 h-20'>
            <div className='w-[47%] max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]   text-white'><span className='text-[#9259F7]'>·</span> IT General Controls (ITGCs) and Security Risk Assessment</p>
            </div>
            <div className='w-[47%] max-sm:pt-3  max-md:w-[100%]'>
              <p className='font-[400] font-[Poppins] text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]  text-white'><span className='text-[#9259F7]'>·</span> NIST Cybersecurity Framework, ISO27001, PCI DSS, SOC1 and SOC 2</p>
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
                  <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal pt-5'>· Currently serving as an instructor for online graduate programs in Artificial Intelligence, Big Data, Systems & Application Security, Operating Systems I and II, Computer Systems and Information Technology utilizing moodle platform.</p>
                  <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Participates and facilitates weekly discussion board threads for students.</p>
                  <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Grades all students' assignments with feedback and return to students within 72 hours of the due date.</p>
                  <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Respond to student emails within 24 hours or less.</p>
                  <p className='font-[400] font-[Poppins] text-[14px] max-xl:text-[12px] max-lg:text-[10px] max-md:text-[8px] text-[#FFFFFF] whitespace-normal'>· Answer student questions relating to course content, exam answer explanation, and/or general course inquiries within 24 hours.</p>
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
                <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>University of the Cumberlands - Williamsburg, KY
                </p>
                <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>Doctor of Philosophy (Ph.D.) Information Technology
                </p>
                <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>(Concentration in Artificial Intelligence)
                </p>
                <p className='font-[400] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>May 2023 – Dec 2025(4.0GPA)
                </p>
              </div>
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

            </div>
            <img src={Frame} className='max-md:hidden' />
            <div className='w-1/2 max-md:w-[100%] pl-20  max-md:pl-0 max-md:mt-10 flex flex-col h-full justify-between'>


              <div className='mt-10'>
                <p className='font-[450] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>PC AGE Career Institute - Jersey City, NJ
                </p>
                <p className='font-[450] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>Certificate in Information Technology
                </p>
              </div>

              <div className='mt-10'>
                <p className='font-[450] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-white'>Ekiti State University
                </p>
                <p className='font-[450] font-[Poppins] text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#3A49A4]'>Bachelor of Science in Microbiology
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
        <div className='mt-10 max-md:mt-28 max-xsm:mt-36 pt-10 px-20 max-xl:px-10 max-sm:px-4'>

          <p className='text-[#9259F7] font-[600] text-[36px] max-xl:text-[33px] max-lg:text-[30px] max-md:text-[25px] font-[Poppins]'>SKILLS</p>
          <p className='font-[Poppins] font-[500] text-[16px]  max-xl:text-[14px] max-lg:text-[12px] max-md:text-[10px] text-[#FFFFFF] mt-10 max-md:mt-6 px-20 max-xl:px-10 max-sm:px-4'>

            PowerBI <span className='text-[#9259F7]'>·</span> Wrike <span className='text-[#9259F7]'>·</span> Microsoft Office Suite <span className='text-[#9259F7]'>·</span> Tableau <span className='text-[#9259F7]'>·</span> Git <span className='text-[#9259F7]'>·</span> API Integration <span className='text-[#9259F7]'>·</span> Linux <span className='text-[#9259F7]'>·</span> Data Analysis & Visualization <span className='text-[#9259F7]'>·</span> Python <span className='text-[#9259F7]'>·</span> SQL <span className='text-[#9259F7]'>·</span>
            Machine Learning <span className='text-[#9259F7]'>·</span> Jupyter Notebooks <span className='text-[#9259F7]'>·</span>  Pandas <span className='text-[#9259F7]'>·</span> NumPy <span className='text-[#9259F7]'>·</span> Keras <span className='text-[#9259F7]'>·</span> Scikit-learn <span className='text-[#9259F7]'>·</span> Matplotlib <span className='text-[#9259F7]'>·</span> Seaborn <span className='text-[#9259F7]'>·</span> Feature Extraction <span className='text-[#9259F7]'>·</span> Data Preprocessing <span className='text-[#9259F7]'>·</span> Data Augmentation <span className='text-[#9259F7]'>·</span>  Deep Learning <span className='text-[#9259F7]'>·</span>
            TensorFlow <span className='text-[#9259F7]'>·</span> Pytorch <span className='text-[#9259F7]'>·</span>  NLP <span className='text-[#9259F7]'>·</span> Transformers <span className='text-[#9259F7]'>·</span> GANs <span className='text-[#9259F7]'>·</span> VAEs <span className='text-[#9259F7]'>·</span> HuggingFace <span className='text-[#9259F7]'>·</span> Autoregressive Models <span className='text-[#9259F7]'>·</span>
            OpenAI <span className='text-[#9259F7]'>·</span> GPT <span className='text-[#9259F7]'>·</span> GPT-3 <span className='text-[#9259F7]'>·</span> GPT-4 <span className='text-[#9259F7]'>·</span> BERT <span className='text-[#9259F7]'>·</span> OpenCV <span className='text-[#9259F7]'>·</span> Image Classification <span className='text-[#9259F7]'>·</span> Prompt Engineering <span className='text-[#9259F7]'>·</span> Model Training <span className='text-[#9259F7]'>·</span> Fine-Tuning
            <span className='text-[#9259F7]'>·</span> Transfer Learning <span className='text-[#9259F7]'>·</span> Bias Mitigation <span className='text-[#9259F7]'>·</span> Bias Detection
            <span className='text-[#9259F7]'>·</span> Scalability <span className='text-[#9259F7]'>·</span>  Evaluation Metrics <span className='text-[#9259F7]'>·</span> Model Validation <span className='text-[#9259F7]'>·</span> STRIDE threat modeling framework <span className='text-[#9259F7]'>·</span> IBM Fairness 360 <span className='text-[#9259F7]'>·</span> Ethical AI <span className='text-[#9259F7]'>·</span>
            Responsible AI Principles <span className='text-[#9259F7]'>·</span> AI Governance <span className='text-[#9259F7]'>·</span> Ethical AI Frameworks
            <span className='text-[#9259F7]'>·</span> AI Risks <span className='text-[#9259F7]'>·</span> AI algorithm audit <span className='text-[#9259F7]'>·</span> Third-party Risk Assesment <span className='text-[#9259F7]'>·</span> IT General Controls <span className='text-[#9259F7]'>·</span> JASP
          </p>
        </div>

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
            <Link to='https://x.com/Waleomoyeni1?t=jE6uUR5D866-5zQkoee9FA&s=08' target='_blank'>
              <FaXTwitter className='text-white max-md:h-3 max-md:w-3' />
            </Link>
            <Link to='https://github.com/Olahubert' target='_blank'>
              <FaGithub className='text-white max-md:h-3 max-md:w-3' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
