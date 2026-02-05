'use client'
import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import { LucideArrowRight, LucideBarChart, LucideBell, LucideCalendar, LucideChartArea, LucideCurrency, LucideLineChart, LucidePackage, LucideReceipt, LucideReceiptIndianRupee, LucideWallet, LucideWallet2 } from "lucide-react"
export default function EducatorAnalytics() {
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
        }
    }
    const offerings = [
        { title: "Flexible Schedule", para: "set your availabilty and let students book slots without your involvement", icon: <LucideCalendar className="text-primary h-5 w-5" /> },
        { title: "Seamless Payments", para: "set your availabilty and let students book slots without your involvement", icon: <LucideReceiptIndianRupee className="text-primary h-5 w-5" /> },
        { title: "Free and Paid Sessions", para: "set your availabilty and let students book slots without your involvement", icon: <LucideWallet className="text-primary h-5 w-5" /> },
        { title: "Testimonials and Ratings", para: "set your availabilty and let students book slots without your involvement", icon: <LucideBarChart className="text-primary h-5 w-5" /> },
        { title: "Simple Reminders", para: "set your availabilty and let students book slots without your involvement", icon: <LucideBell  className="text-primary h-5 w-5"/> },
        { title: "Analytics", para: "set your availabilty and let students book slots without your involvement", icon: <LucideChartArea className="text-primary h-5 w-5" /> },
    ]
    return <main className=" w-full">
        <Header heading='1:1 Sessions' para="Monetize your time & expertise" ></Header>
        <motion.section variants={itemVariants} initial="hidden" animate="visible" className="py-5 bg-white">
            <div className="container max-w-5xl mx-auto">
                <div className="flex gap-2  shadow-lg my-2 relative bg-linear-to-r from-secondary rounded-2xl py-7 px-6 to-white">
                    <div className="w-3/4">
                        <h2 className="text-3xl font-bold my-1"><span className="bg-linear-to-r from-primary to-primary-foreground text-transparent bg-clip-text">Connect 1-on-1</span> with your audiences to offer personalized consultations</h2>
                        <p className="mt-4 text-slate-600">Create multiple offerings as per availability set a price and collect payments seamlessly</p>
                        <motion.button whileHover={{x:5}} transition={{type:"spring",stiffness:300}} className="bg-primary absolute bottom-5 py-3 px-4 text-white rounded-2xl cursor-pointer flex items-center gap-2 font-semibold">Take me to Meet <LucideArrowRight className="h-5" /></motion.button>
                    </div>
                    <div className="w-1/4">
                        <div className="border-2 shadow-sm border-gray-300 flex justify-center items-center h-50  w-full rounded-2xl">Image illustration</div>
                    </div>
                </div>
                <div className="bg-white mt-6 border-gray-200 border p-5 rounded-2xl shadow-lg">
                    <h3 className="font-semibold text-lg">Our Offerings</h3>
                    <div className="grid grid-cols-3 grid-rows-2 gap-y-5  gap-x-4 my-3">
                        {offerings.map((card, i) => {
                            return <div key={i} className="border shadow-sm hover:shadow-md transition-shadow border-gray-200 rounded-2xl px-3 py-4">
                                <div className="flex gap-3 my-1 items-center">
                                    <div className="bg-secondary p-2 text-slate-700 rounded-3xl">{card.icon}</div>
                                    <h3 className="font-semibold text-lg">{card.title}</h3>
                                </div>
                                <p className="text-sm text-slate-600 mt-2">{card.para}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </motion.section>
    </main>
}