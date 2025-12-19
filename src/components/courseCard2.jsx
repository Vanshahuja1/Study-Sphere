import Image from "next/image"
import courseImg from "../../public/Course-card.png"
export const  CourseCard2 = ({name,price,createdBy,validity,imported})=> {
    return (
        <>
        <div className="bg-white flex max-w-120 w-full my-2 rounded-2xl shadow-lg cursor-pointer  ease-in-out duration-300">
            <Image src={courseImg} height={200} className="rounded-s-2xl" alt="Courses"></Image>
            <div className="px-4 my-3 w-full bg-white">
            <p className="font-semibold overflow-hidden mt-3 ">{name}</p>
            <p className="text-gray-600 my-2 text-sm">{createdBy}</p>
            <span className="text-blue-500 my-1  px-1 py-1 rounded font-bold">Imported by {imported} tutors</span>
            <p className=" fixed bottom-3 font-bold text-xl mt-5">₹{price}</p>
            </div>
        </div>
        </>
    )
} 