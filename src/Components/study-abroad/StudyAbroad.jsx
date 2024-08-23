import Navbar from "../Navbar/Navbar.jsx";
import headerCover from "../../assets/studyabroad_cover.png"
import AbroadCard from "./ui/AbroadCard.jsx";

import applicationAssistant from '../../assets/application-assistant.png'
import universitySelection from '../../assets/university-selection.png'
import profileAssessment from '../../assets/profile-assessment.png'
import {RiseOutlined, StockOutlined} from "@ant-design/icons";

const StudyAbroad = () => {
    return(
        <div>
            <Navbar />
            <header
                style={{ backgroundImage: `url(${headerCover})` }}
                className="h-screen flex items-center bg-no-repeat bg-cover bg-center
                    bg-gray-800 bg-opacity-75 px-24
                "
            >
                <h1 className="text-white font-extrabold text-6xl">Look through Our Study Abroad <br /> services </h1>
            </header>
            <div className="flex flex-col py-24 pb-24 border">
                <div className="flex flex-col mx-auto text-center">
                    <h1 className="text-3xl mb-4">OUR STUDY SERVICES</h1>
                    <span>We are a true representation of excellence company</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-4/5 gap-10 md: mx-auto mt-20">
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
            <div className="flex flex-col md:flex-row justify-around py-14 items-center bg-black">
                <div className="flex flex-col space-y-8 max-w-lg">
                    <h1 className="text-5xl text-white font-semibold">
                        Let us create a <span className="text-yellow-500">customized</span> plan of action with 100% success
                    </h1>
                    <span className="font-bold text-gray-300">
                        Improve your English and French speaking, listening,reading
                        and writing skills with our expert teachersImprove your English
                        and French speaking,
                        listening,reading and writing skills with our expert teachers
                    </span>
                </div>
                <div className="max-w-sm bg-white flex flex-col space-y-4 text-center rounded-lg py-6">
                    <div className="">
                        <RiseOutlined className="font-extrabold text-7xl text-yellow-500"/>
                        {/*< />*/}
                    </div>
                    <span className="text-4xl font-bold">Customized Plan Of Action</span>
                    <span>
                        Jasper Consultancy extends a helping hand to students
                        seeking guidance on their
                        educational journey through our Free Counselling services.
                    </span>
                    <button
                        className="my-3 bg-black text-white
                         rounded-md py-2 px-6 cursor-pointer
                          text-sm font-semibold w-fit mx-auto">
                        Call Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StudyAbroad