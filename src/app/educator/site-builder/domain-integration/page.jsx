'use client'
import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import { LucideArrowRight, LucideChevronRight } from "lucide-react"
export default function EducatorCourses() {
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
    return <main className='w-full bg-white'>
        <Header heading='Ready to publish your website' para='You can add existing domain or request for a domain' ></Header>
        <motion.section variants={itemVariants} initial="hidden" animate="visible" className='py-5'>
            <div className="container max-w-5xl mx-auto">
                <div className="flex gap-4 my-10">

                    <div className="border-gray-400 shadow-sm hover:shadow-xl transition-shadow border-dashed  border w-1/3 rounded-2xl">
                        <div className="flex flex-col items-center justify-center h-80 m-2 bg-indigo-50 hover:bg-orange-50 rounded-2xl cursor-pointer">
                            <h1 className="text-xl  font-semibold   text-gray-800">Already have a Domain Name?</h1>
                        </div>
                        <div className="text-center py-3 mb-6 flex justify-center">
                            <motion.button whileHover={{x:4}} className="bg-primary flex items-end gap-1 text-white cursor-pointer  px-7 py-4 rounded-xl font-semibold mt-7">Connect Your Existing Domain <LucideArrowRight className="h-5"/></motion.button>
                        </div>
                    </div>
                    <div className="border-gray-400 border-dashed shadow-sm hover:shadow-xl transition-shadow border w-1/3 rounded-2xl">
                        <div className="flex flex-col px-5 items-center justify-center h-80 m-2 bg-indigo-50 hover:bg-orange-50 rounded-2xl cursor-pointer">
                            <h1 className="text-xl font-semibold text-gray-800">Make it Live on Studysphere URL?</h1>
                        </div>
                        <div className="text-center py-3 justify-center flex mb-6">
                            <motion.button whileHover={{x:4}} className="bg-primary relative flex items-end gap-1 cursor-pointer text-white px-8 py-4 rounded-xl font-semibold mt-7">Live Studysphere Domain<LucideArrowRight className="h-5"/></motion.button>
                        </div>
                    </div>
                    <div className="border-gray-400 border-dashed shadow-sm hover:shadow-xl transition-shadow border w-1/3 rounded-2xl">
                        <div className="flex flex-col items-center justify-center h-80 m-2 bg-indigo-50 hover:bg-orange-50 rounded-2xl cursor-pointer">
                            <h1 className="text-xl  font-semibold   text-gray-800">Skip Publishing</h1>
                        </div>
                        <div className="text-center py-3 mb-6 flex justify-center">
                            <motion.button whileHover={{x:4}} className="bg-primary flex items-end gap-1 text-white cursor-pointer px-7 py-4 rounded-xl font-semibold mt-7">Checkout Course Creation <LucideArrowRight className="h-5"/></motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    </main>
}