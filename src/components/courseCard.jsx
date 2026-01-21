import Image from "next/image"
import courseImg from "../../public/Course-card.png"
import { SERVER_URL } from "@/config/env"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState, useEffect } from "react"
export const CourseCard = ({ name, price, createdBy, validity, thumbnail }) => {
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
            <Card className="bg-white relative max-w-70 mx-1 gap-2 h-96 my-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer py-0">
                <CardHeader className="p-0">
                    <Image
                        src={getImageUrl(thumbnail)}
                        height={400}
                        width={400}
                        className="rounded-t-2xl aspect-video object-cover"
                        alt={name || "Course Image"}
                        onError={() => setImgError(true)}
                    />
                </CardHeader>
                <CardContent className="px-4">
                    <p className="font-semibold line-clamp-2">{name}</p>
                    <p className="text-gray-600 mt-2 mb-1 text-sm">Created by You ({createdBy})</p>
                    <p className="text-primary  text-sm mt-2 inline-block font-semibold bg-linear-to-r from-indigo-100 bg-size-[100%_100%] to-white px-3 w-40 py-1 rounded">{validity}</p>
                    <p className=" absolute bottom-0 font-bold text-lg my-4">₹{price}</p>
                </CardContent>
            </Card>
        </>
    )
}