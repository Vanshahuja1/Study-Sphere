import Image from "next/image"
import courseImg from "../../public/Course-card.png"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export const CourseCard = ({ name, price, createdBy, validity }) => {
    return (
        <>
            <Card className="bg-white relative max-w-70 mx-2 gap-3 h-100 my-4 rounded-2xl shadow-lg cursor-pointer py-0">
                <CardHeader className="p-0">
                    <Image src={courseImg} height={400} width={400} className="rounded-t-2xl" alt="Courses"></Image>
                </CardHeader>
                <CardContent className="px-4">
                    <p className="font-semibold my-2">{name}</p>
                    <p className="text-gray-600 my-2 text-sm">Created by You ({createdBy})</p>
                    <p className="text-primary  text-sm mt-3 inline-block font-semibold bg-linear-to-r from-indigo-100 bg-size-[100%_100%] to-white px-3 w-40 py-1 rounded">{validity}</p>
                    <p className=" absolute bottom-0 font-bold text-lg my-4">₹{price}</p>
                </CardContent>
            </Card>
        </>
    )
} 