import Image from "next/image"
import courseImg from "../../public/Course-card.png"
export const  CourseCard = ({name,price,createdBy,validity})=> {
    return (
        <>
        <div className="bg-white relative max-w-70 mx-2 h-100 my-4 pb-1 rounded-2xl shadow-lg cursor-pointer  ease-in-out duration-300">
            <Image src={courseImg} className="rounded-t-2xl" alt="Courses"></Image>
            <div className="px-4 my-3">
            <p className="font-semibold my-2">{name}</p>
            <p className="text-gray-600 my-2">Created by You({createdBy})</p>
            <span className="text-blue-400 my-4 bg-sky-100 px-3 py-1 rounded">{validity}</span>
            <p className=" absolute bottom-0 font-bold text-xl my-4">₹{price}</p>
            </div>
        </div>
        </>
    )
} 