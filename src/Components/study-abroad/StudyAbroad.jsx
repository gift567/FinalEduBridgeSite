import Navbar from "../Navbar/Navbar.jsx";
import headerCover from "../../assets/studyabroad_cover.png"
import AbroadCard from "./ui/AbroadCard.jsx";

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
            <div className="flex flex-col py-14 border">
                <div className="flex flex-col mx-auto text-center">
                    <h1 className="text-3xl mb-4">OUR STUDY SERVICES</h1>
                    <span>We are a true representation of excellence company</span>
                </div>
                <div>
                    <AbroadCard />
                    <AbroadCard />
                    <AbroadCard />
                </div>
            </div>
        </div>
    )
}

export default StudyAbroad