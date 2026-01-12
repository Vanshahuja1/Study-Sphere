"use client"
import { Header } from "@/components/Header"
import Image from "next/image"
import GoogleAna from '../../../../public/googleAnalytics.svg'
import facepixel from '../../../../public/facebook.svg'
import webhook from '../../../../public/webhooks.svg'
import googleAds from '../../../../public/googleads.svg'
import zoom from '../../../../public/zoom.svg'
import { motion } from "framer-motion"
import { LucideGlobe, Share2, Copy, ChevronRight, Plus, ImageIcon, TicketCheck, TabletSmartphone, Book, ArrowRight, LayoutTemplate, Target, FileText } from "lucide-react"
import Link from "next/link"

export default function educatiorIntegration() {
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
        <Header heading='Integrations' para='Integrate these tools to grow your business' ></Header>
        <motion.section variants={itemVariants} animate="visible" initial='hidden'  className="py-5 bg-indigo-50">
            <div className="container max-w-5xl mx-auto">
                <div className="grid grid-cols-3 grid-rows-2 py-5 gap-4 ">

                    <div className="relative h-49 shadow-sm hover:shadow-xl transition-shadow bg-white p-6 rounded-2xl border-gray-200 border w-full ">
                        <div className="flex items-center gap-7">
                            <div className="">
                                <Image src={GoogleAna} alt="image" height={40} width={40} ></Image>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-xl text-gray-900">Google Analytics</h3>
                                <div className="flex gap-3 mt-1">
                                    <span className="flex items-center gap-1 text-sm text-gray-900">Not Connected</span>
                                </div>
                            </div>
                        </div>
                        <p className="my-2 px-3 text-gray-700">Use Analytics to track visitors of your website and app</p>
                        <motion.p whileHover={{x:5}} transition={{type:"spring",stiffness:300}} className="text-primary absolute bottom-3 my-2 px-3 font-bold flex items-end gap-1 cursor-pointer">Connect <ArrowRight className="h-5" /></motion.p>
                    </div>

                     <div className="relative h-49 shadow-md hover:shadow-xl transition-shadow  bg-white p-6 rounded-2xl border-gray-200 border w-full ">
                        <div className="flex items-center gap-7">
                            <div className="">
                                <Image src={facepixel} alt="image" height={40} width={40} ></Image>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-xl text-gray-900">Facebook Pixels</h3>
                                <div className="flex gap-3 mt-1">
                                    <span className="flex items-center gap-1 text-sm text-gray-900">Not Connected</span>
                                </div>
                            </div>
                        </div>
                        <p className="my-2 px-3 text-gray-700 h-10 ">Use Facebook Pixels to manage visitors of your website and app</p>
                        <motion.p whileHover={{x:5}} transition={{type:"spring",stiffness:300}} className="text-primary absolute bottom-3 my-2 px-3 font-bold flex items-end gap-1 cursor-pointer">Connect <ArrowRight className="h-5" /></motion.p>
                    </div>

                     <div className="relative  shadow-md hover:shadow-xl transition-shadow h-49 bg-white p-6 rounded-2xl border-gray-200 border w-full ">
                        <div className="flex items-center gap-7">
                            <div className="">
                                <Image src={googleAds} alt="image" height={40} width={40} ></Image>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-xl text-gray-900">Google Ads</h3>
                                <div className="flex gap-3 ">
                                    <span className="flex items-center gap-1 text-sm text-gray-900">Not Connected</span>
                                </div>
                            </div>
                        </div>
                        <p className="my-2 px-3 text-gray-700">Use Google ads to track visitors on your website/app and advertise to them later</p>
                        <motion.p whileHover={{x:5}} transition={{type:"spring",stiffness:300}} className="text-primary absolute bottom-3 px-3 font-bold flex items-end gap-1 cursor-pointer">Connect <ArrowRight className="h-5" /></motion.p>
                    </div>

                    <div className="relative shadow-md hover:shadow-xl transition-shadow  h-49 bg-white p-6 rounded-2xl border-gray-200 border w-full ">
                        <div className="flex items-center gap-7">
                            <div className="">
                                <Image src={webhook} height={40} alt="" width={40} ></Image>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-xl text-gray-900">Webhooks</h3>
                                <div className="flex gap-3">
                                    <span className="flex items-center gap-1 text-sm text-gray-900">Not Connected</span>
                                </div>
                            </div>
                        </div>
                        <p className="my-2 px-3 text-gray-700  ">Transfer information from one app to another</p>
                        <motion.p whileHover={{x:5}} transition={{type:"spring",stiffness:300}} className="text-primary absolute bottom-3  px-3 font-bold flex items-end gap-1 cursor-pointer">Connect <ArrowRight className="h-5" /></motion.p>
                    </div>

                    <div className="relative shadow-md hover:shadow-xl transition-shadow  h-49 bg-white p-6 rounded-2xl border-gray-200 border w-full ">
                        <div className="flex items-center gap-7">
                            <div className="">
                                <Image src={zoom} height={40} alt="image" width={40} ></Image>
                            </div>
                            <div className="">
                                <h3 className="font-semibold text-xl text-gray-900">Zoom</h3>
                                <div className="flex gap-3">
                                    <span className="flex items-center gap-1 text-sm text-gray-900">Not Connected</span>
                                </div>
                            </div>
                        </div>
                        <p className="my-2 px-3 text-gray-700  ">Conduct live sessions on Zoom and interact with your students</p>
                        <motion.p whileHover={{x:5}} transition={{type:"spring",stiffness:300}} className="text-primary absolute bottom-3 px-3 font-bold flex items-end gap-1 cursor-pointer">Connect <ArrowRight className="h-5" /></motion.p>
                    </div>

                </div>
            </div>
        </motion.section>
    </main>
}
