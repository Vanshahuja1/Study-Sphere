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
export const CourseCard = ({ name, price, createdBy, validity ,thumbnail}) => {
    console.log(thumbnail,'thumbnail')
    return (
        <>
            <Card className="bg-white relative max-w-70 mx-1 gap-2 h-96 my-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer py-0">
                <CardHeader className="p-0">
                    <Image src={thumbnail || courseImg } unoptimized={true} height={100} width={300} className="rounded-t-2xl text-center" alt="Image Illustration"></Image>
                </CardHeader>
                <CardContent className="px-4">
                    <p className="font-semibold">{name}</p>
                    <p className="text-gray-600 mt-2 mb-1 text-sm">Created by You ({createdBy})</p>
                    <p className="text-primary  text-sm mt-2 inline-block font-semibold bg-linear-to-r from-indigo-100 bg-size-[100%_100%] to-white px-3 w-40 py-1 rounded">{validity}</p>
                    <p className=" absolute bottom-0 font-bold text-lg my-4">₹{price}</p>
                </CardContent>
            </Card>
        </>
    )
} 