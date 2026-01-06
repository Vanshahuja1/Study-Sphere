'use client'
import { Header } from "@/components/Header"
import testImg from '@/../public/testImg.svg'
import youtubeImg from '@/../public/youtube.svg'
import docImg from '@/../public/docImg.svg'
import Image from "next/image"
import { motion } from "framer-motion"
export default function CreateLandingPage() {
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
    return <>
        <main className='w-full bg-indigo-50 '>
            <Header heading='Free Material' para='Add / view free material for your visitors' ></Header>
            <motion.section variants={itemVariants} initial="hidden" animate="visible" className="py-5 ">
                <div className="container max-w-5xl mx-auto">
                    <div className="flex gap-5 my-5">
                        <div className="border-gray-200 bg-white shadow hover:shadow-2xl w-1/3 gap-3 flex flex-col items-center rounded-2xl border p-5">
                            <div className="">
                                <Image src={docImg} height={100} width={100} alt="documents"></Image>
                            </div>
                            <h3 className="text-xl text-gray-900 font-semibold">Documents</h3>
                            <p className="text-gray-700 text-sm">File type Includes .doc, .docx, .pdf, .png, .jpg, .csv etc</p>
                        </div>
                        <div className="border-gray-200 bg-white shadow hover:shadow-2xl w-1/3 gap-3 flex flex-col items-center rounded-2xl border p-5">
                            <div className="">
                                <Image src={youtubeImg} height={100} width={100} alt="documents"></Image>
                            </div>
                            <h3 className="text-xl text-gray-900 font-semibold">Youtube</h3>
                            <p className="text-gray-700 text-sm">Supported link : Youtube URL</p>
                        </div>
                        <div className="border-gray-200 bg-white shadow hover:shadow-2xl w-1/3 gap-3 flex flex-col items-center rounded-2xl border p-5">
                            <div className="">
                                <Image src={testImg} height={100} width={100} alt="documents"></Image>
                            </div>
                            <h3 className="text-xl text-gray-900 font-semibold">Tests</h3>
                            <p className="text-gray-700 text-sm">Import free test from CMS portal</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    </>
}