const DefaultOnlineCourses = ({Icon, title}) => {
    return (
        <div className="flex flex-col items-center bg-black/70 w-1/5">
           <div className="p-5 gap-3 text-white flex flex-col items-center">
                <Icon className="md:text-6xl"/>
                <span className="md:text-2xl text-center font-semibold">{title}</span>

           </div>
        </div>
    )
}

export default DefaultOnlineCourses