import servicesImage from "../../assets/services_image.png"
import examPreparationImage from "../../assets/examination-preparation-image.png"
import Navbar from "../Navbar/Navbar.jsx";
import DefaultOnlineCourseCard from "./ui/DefaultOnlineCourseCard.jsx";
import {BankOutlined, EditOutlined, FileDoneOutlined} from "@ant-design/icons";
import {Input} from "antd";
import {useEffect} from "react";



const Services = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <div>
            <Navbar/>
            <div
                style={{
                    backgroundImage: `url(${servicesImage})`
                }}
                className="h-screen flex items-center bg-no-repeat bg-cover bg-center
                    bg-gray-800 bg-opacity-75 px-5 md:px-24"
            >
                <div className="flex flex-col gap-4 w-full">
                    <span
                        className="text-gray-300 font-semibold text-xl">Let us be the bridge to your academic success</span>
                    <h1 className="text-white font-extrabold text-4xl md:text-7xl">Best Online Study <br/> Center </h1>

                    <div className="bg-yellow-500 text-white w-fit px-4 py-3 font-semibold mt-4">
                        <span>Online Courses</span>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto w-4/5 justify-center gap-10 mt-[-70px] my-16 ">
                <DefaultOnlineCourseCard
                    title="Profile Assessment"
                    Icon={FileDoneOutlined}
                />
                <DefaultOnlineCourseCard
                    title="University Selection"
                    Icon={BankOutlined}
                />
                <DefaultOnlineCourseCard
                    title="Application Assistance"
                    Icon={EditOutlined}
                />
            </div>
            <div className="w-full text-center flex flex-col items-center">
                <span className="text-xl mt-4 font-semibold">Connect with us now!</span>
                <div className="flex mt-5">
                    <Input
                        placeholder="Enter your email..."
                        className="max-w-lg md:w-[340px] mr-2"
                    />
                    <button className="bg-black text-sm text-white px-10 rounded">Subscribe</button>
                </div>
            </div>
            <div
                className="relative"
                // style={{
                //     backgroundImage: `url(${})`
                // }}
                // className="h-screen flex items-center bg-no-repeat bg-cover bg-center
                //     bg-white bg-opacity-75 px-5 md:px-24"
            >
                <img src={examPreparationImage}
                     className="object-cover"
                     alt="exam-img" />

                <div className="absolute flex flex-col gap-4 top-1/4 right-32">
                    <h1 className="font-extrabold text-3xl text-center
                     md:text-6xl md:text-left mb-5">Need Preparations for <br/> IETS Exams?</h1>

                    <span
                        className="md:text-xl text-gray-700"
                    >
                        Jasper Consultancy extends a helping hand to students <br/>
                        seeking guidance on their educational journey through our<br/>
                        free consultancy.
                    </span>

                    <button
                        className="my-3 bg-black text-white rounded-md py-2
                         px-6 cursor-pointer text-sm font-semibold w-fit">Call
                        Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services;