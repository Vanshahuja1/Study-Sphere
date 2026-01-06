"use client"
import { Header } from "@/components/Header"
import Link from "next/link"
import { motion } from "framer-motion"
import globalFolder from '@/../public/globalFolder.svg'
import { LucideGlobe, Share2, Copy, ChevronRight, Plus, ImageIcon, TicketCheck, Search, TabletSmartphone, Book, ArrowRight, LayoutTemplate, Target, FileText } from "lucide-react"
import Image from "next/image"
export default function contentPage() {
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
    return <main className='w-full'>
        <Header heading='Global Folder'para="Create a Global Folder for your Content" ></Header>
        <motion.section className="py-5 bg-gray-100" variants={itemVariants} initial="hidden" animate="visible">
            <div className="container max-w-5xl mx-auto">
                <div className="flex items-center justify-between ">
                    {/* search */}
                    <div className="searchbar flex w-2/5 items-center  bg-white rounded-2xl border border-gray-300 ">
                        <input type="text" placeholder='Search by name' className='bg-white rounded-2xl px-2 outline-none w-full py-3 h-full' />
                        <Search className='w-1/5 h-6 text-gray-400'></Search>
                    </div>
                    <div className="text-white bg-primary p-2 rounded-2xl w-1/5 border-primary border ">

                        <button className='flex items-center cursor-pointer font-semibold justify-around w-full py-1'>Add Global Folder</button>

                    </div>
                </div>
                <div className="w-full h-100 bg-white my-4 rounded-2xl justify-center items-center flex flex-col">
                    <Image src={globalFolder} alt="global folder " width={150} height={150}></Image>
                    <p className="text-2xl text-gray-900 mt-3">You don't have any content uploaded yet</p>
                    <span className="text-gray-400">Click on the Add Global Folder button to upload content</span>
                    <div className="text-white bg-primary p-2 my-4 rounded-2xl w-1/5 border-primary border ">
                        <button className='flex items-center cursor-pointer font-semibold justify-around w-full py-1'>Add Global Folder</button>
                    </div>
                </div>
            </div>
        </motion.section>
    </main>
}