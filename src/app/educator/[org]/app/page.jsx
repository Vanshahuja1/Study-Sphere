'use client'
import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import Image from "next/image"
import mobTab from '@/../public/mobTab-removebg-preview.png'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
export default function EducatorApp() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    }
    return <main className='w-full bg-indigo-50'>
        <Header heading='Mobile App Configuration' para='Set up your Mobile App here' ></Header>
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className=" bg-indigo-50">
            <div className="flex">
                <div className="w-1/2 bg-gray-50 p-4">
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-2">
                            <Label className="font-semibold">Upload Logo</Label>
                            <Input type="file" className="w-50"></Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Upload SplashScreen</Label>
                            <Input type="file"></Input>
                        </div>
                    </div>
                   <div className="flex flex-col gap-2 my-2">
                            <Label className="font-semibold">App Name</Label>
                            <Input className="w-120 bg-white" placeholder="StudySphere"></Input>
                        </div>
                </div>
                <div className="bg-indigo-600 w-1/2 flex justify-center h-screen">
                    <Image src={mobTab} alt="image" height={500} width={500} ></Image>
                </div>
            </div>
        </motion.section>
    </main>
}