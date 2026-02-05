import Image from "next/image"
import courseImg from "../../public/Course-card.png"
import { SERVER_URL } from "@/config/env"
import { useState, useEffect } from "react"
export const CourseCard2 = ({ name, price, createdBy, validity, imported, thumbnail }) => {
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        setImgError(false);
    }, [thumbnail]);

    const getImageUrl = (src) => {
        if (imgError || !src || src === "" || src === "null") return courseImg;
        if (src.startsWith('http')) return src;
        if (src.startsWith('/')) return src;
        return `${SERVER_URL}/${src}`;
    };

    return (
        <>
            <div className="bg-white flex max-w-120 w-full my-2 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer  ease-in-out duration-300">
                <Image
                    src={getImageUrl(thumbnail)}
                    height={250}
                    width={250}
                    className="rounded-s-2xl object-cover"
                    alt={name || "Course Image"}
                    onError={() => setImgError(true)}
                />
                <div className="px-4 my-3 relative w-full bg-white">
                    <p className="font-semibold text-medium overflow-hidden mt-3 line-clamp-2">{name}</p>
                    <p className="text-gray-600 my-2 text-sm">{createdBy}</p>
                    <span className="text-primary text-sm mt-3 inline font-semibold bg-linear-to-r from-secondary bg-size-[100%_100%] to-white px-3 w-40 py-1 rounded">Imported by {imported} tutors</span>
                    <p className=" absolute bottom-0 font-bold text-lg mt-5">₹{price}</p>
                </div>
            </div>
        </>
    )
}