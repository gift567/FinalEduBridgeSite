import Navbar from "../Navbar/Navbar.jsx";
import headerCover from "../../assets/studyabroad_cover.png"
import socialEnterprise from "../../assets/social_enteprise.png"
import AbroadCard from "./ui/AbroadCard.jsx";

import applicationAssistant from '../../assets/application-assistant.png'
import universitySelection from '../../assets/university-selection.png'
import profileAssessment from '../../assets/profile-assessment.png'
import {RiseOutlined, StockOutlined} from "@ant-design/icons";
import DefaultDocument from "./ui/DefaultDocument.jsx";
import SocialEnterpriseCard from "./ui/SocialEnterpriseCard.jsx";
import {Input} from "antd";
import Footer from "../../Footer.jsx";
import {useEffect} from "react";

const StudyAbroad = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return(
        <div>
            <Navbar />
            <header
                style={{ backgroundImage: `url(${headerCover})` }}
                className="h-screen flex items-center bg-no-repeat bg-cover bg-center
                    bg-gray-800 bg-opacity-75 px-5 md:px-24
                "
            >
                <h1 className="text-white font-extrabold text-6xl">Look through Our Study Abroad <br /> services </h1>
            </header>
            <div className="flex flex-col py-24 pb-24 border">
                <div className="flex flex-col mx-auto text-center">
                    <h1 className="text-3xl mb-4">OUR STUDY SERVICES</h1>
                    <span>We are a true representation of excellence company</span>
                </div>

                {/*👇👇 Animate these components */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/5 gap-5 md:gap-10 md: mx-auto mt-20">
                    <AbroadCard
                        image={profileAssessment}
                        title="Profile Assessment"
                        description="
                        Jasper Consultancy extends a helping
                        hand to students seeking guidance on their educational
                        journey through our free consultancy services
                        "
                    />
                    <AbroadCard
                        image={universitySelection}
                        title="University Selection"
                        description="
                        Jasper Consultancy extends a helping
                        hand to students seeking guidance on their educational
                        journey through our free consultancy services
                        "
                    />
                    <AbroadCard
                        image={applicationAssistant}
                        title="Application Assistant"
                        description="
                        Jasper Consultancy extends a helping
                        hand to students seeking guidance on their educational
                        journey through our free consultancy services
                        "
                    />

                </div>
            </div>
            <div className="bg-black h-screen flex justify-between items-center">

                {/*👇👇 Animate these components */}

                <div className="flex flex-col md:flex-row gap-24 mx-auto w-4/5 justify-between">
                    <div className="flex flex-col justify-center space-y-8 max-w-lg text-center md:text-left ">
                        <h1 className="text-4xl md:text-5xl text-white font-semibold">
                            Let us create a <span className="text-yellow-500">customized</span> plan of action with 100% success
                        </h1>
                        <span className="text-gray-100">
                            Improve your English and French speaking, listening,reading
                            and writing skills with our expert teachersImprove your English
                            and French speaking,
                            listening,reading and writing skills with our expert teachers
                        </span>
                    </div>

                    <AbroadCard
                        title="Customized Plan of Action"
                        description="
                            Jasper Consultancy extends a helping hand to students
                            seeking guidance on their
                            educational journey through our Free Counselling services.
                        "
                        image={universitySelection}
                    />
                </div>
            </div>
            <div className="py-24">
                <h2 className="text-3xl font-semibold text-center"><span className="bg-yellow-500 px-6 rounded-lg text-white">Document</span> Preparation</h2>
                <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 gap-20 md:grid-cols-2">
                    <div className="grid grid-cols-1  gap-8">
                        <DefaultDocument
                            title="Resume"
                        />
                        <DefaultDocument
                            title="SOP"
                        />
                        <DefaultDocument
                            title="LORs"
                        />
                        <DefaultDocument
                            title="Essays"
                        />
                        <DefaultDocument
                            title="Videos"
                        />
                    </div>
                    <div>
                        <span className="text-xl text-gray-700">
                            Improve your English and French speaking,listening, reading
                            and writing skills with our expert teachersImprove your English and French
                            speaking, listening,reading and writing skills with our expert teachers
                        </span>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${socialEnterprise})`
            }}
            className="bg-no-repeat bg-cover bg-center py-24 grid grid-rows-2 text-white"
            >
                <div className="grid items-center mx-auto w-5/6 text-4xl">
                    <span>
                        We are a <span className="text-yellow-500 mr-3"> Social Enterprise</span>
                        that<br/> seeks to provide services to our<br/> community
                    </span>
                </div>
                <div className="grid items-center md:text-right mx-auto w-5/6 text-4xl">
                    <span>
                        Improve your <span className="text-yellow-500 mr-3"> English</span> and <span className="text-yellow-500 mr-3"> French</span><br/> speaking,
                        listening,reading and writing skills <br/> with our
                        expert teachers. Improve
                        your English <br/> and French speaking/writring.
                    </span>
                </div>
            </div>
            <div className="py-24 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">Our <span
                    className="text-yellow-500 rounded-lg"> Social Enterprise </span> Services.</h2>

                <span className="text-xl mt-8 font-semibold">Book your slot</span>

                {/*👇👇 Animate these components */}

                <div className="grid  place-items-center py-16 mx-auto w-4/5 gap-8 grid-cols-1 sm:grid-cols-2">
                    <SocialEnterpriseCard
                        title="Community Development"
                        description="
                         Improve your English and French speaking,
                         listening,reading and writing skills with our
                         expert teachersking, listening,reading
                         and writing skills with us.
                        "
                    />
                    <SocialEnterpriseCard
                        title="Enviromental Sustainablity"
                        description="
                         Improve your English and French speaking,
                         listening,reading and writing skills with our
                         expert teachersking, listening,reading
                         and writing skills with us.
                        "
                    />
                    <SocialEnterpriseCard
                        title="Community Development"
                        description="
                         Improve your English and French speaking,
                         listening,reading and writing skills with our
                         expert teachersking, listening,reading
                         and writing skills with us.
                        "
                    />
                    <SocialEnterpriseCard
                        title="Community Development"
                        description="
                         Improve your English and French speaking,
                         listening,reading and writing skills with our
                         expert teachersking, listening,reading
                         and writing skills with us.
                        "
                    />
                </div>
                <span className="text-xl mt-8 font-semibold">Connect with us now!</span>
                <div className="flex mt-5">
                    <Input
                        placeholder="Enter your email..."
                        className="max-w-lg md:w-[340px] mr-2"
                    />
                    <button className="bg-black text-sm text-white px-10 rounded">Subscribe</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default StudyAbroad