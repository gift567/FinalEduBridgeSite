import servicesImage from "../../assets/services_image.png"
import examPreparationImage from "../../assets/exam_image.JPG"
import Navbar from "../Navbar/Navbar.jsx"
import ServiceCard from "./ui/ServiceCard.jsx";
import community_development from "../../assets/community_development.JPG";
import environmental_sustainability from "../../assets/environmental_sustainability.png";
import profile_assessment from "../../assets/profile_assessment.JPG";
import university_selection from "../../assets/university_selection.JPG";
import application_assistance from "../../assets/application_assistance.JPG";

import {
    ArrowRightOutlined,
    BankOutlined,
    BuildOutlined,
    DesktopOutlined,
    EditOutlined,
    FileDoneOutlined,
    FileOutlined, VideoCameraOutlined
} from "@ant-design/icons";
import {Input} from "antd";
import {useEffect} from "react";

import Footer from "../../Footer.jsx";
import Hero from "../Hero/Hero.jsx";
import SocialResponsiblityComponent from "../study-abroad/ui/social-responsibility-section.component.jsx";



const Services = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <div>
            <Navbar/>
          

          <div
                className="h-screen grid place-items-center"
                style={{
                    backgroundImage: `url(${examPreparationImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'

                }}
            >
                 <div className="flex flex-col items-center gap-4 top-1/4 md:right-32">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">Need Preparations for <br/> IETS Exams?</h1>

                    <span
                        className="mt-6 text-lg leading-8 text-gray-200"
                    >
                        Jasper Consultancy extends a helping hand to students <br/>
                        seeking guidance on their educational journey through our<br/>
                        free consultancy.
                    </span>

                            <a
                                href="#"
                                className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                               Get in Touch
                            </a>
                </div>
            </div>
            <div className="py-24 flex flex-col">
                <div className="flex flex-col mx-auto text-center">
                    <h1 className="text-3xl mb-4">OUR SERVICES</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 w-4/5 mx-auto gap-8 place-items-center">

                    <ServiceCard 
                        title="Profile Assessment"
                        description="
                         Jasper Consultancy extends a helping hand to 
                         students seeking guidance on their educational
                         journey through our Free Counselling services.
                        "
                        image={profile_assessment}
                    />
                    <ServiceCard 
                        title="University Selection"
                        description="
                         Jasper Consultancy extends a helping hand to 
                         students seeking guidance on their educational
                         journey through our Free Counselling services.
                        "
                        image={university_selection}

                    />
                    <ServiceCard 
                        title="Application Assistance"
                        description="
                         Jasper Consultancy extends a helping hand to 
                         students seeking guidance on their educational
                         journey through our Free Counselling services.
                        "
                        image={application_assistance}

                    />

                </div>
                <a
                                href="#"
                                className="rounded-md bg-[#d3ad56] px-3.5 py-2.5 mx-auto text-sm w-fit font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                               Learn More
                               <ArrowRightOutlined className="text-xs ml-2"/>
                            </a>
            </div>
            <div className="py-20 flex flex-col mx-auto">
                <SocialResponsiblityComponent />
                             <a
                                href="#"
                                className="rounded-md bg-[#d3ad56] mt-10 px-3.5 py-2.5 mx-auto text-sm w-fit font-semibold text-white shadow-sm hover:bg-[]-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                               Learn More
                               <ArrowRightOutlined className="text-xs ml-2"/>
                            </a>
              </div>
            <Footer/>
        </div>
    )
}

export default Services;