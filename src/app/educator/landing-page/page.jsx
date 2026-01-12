"use client"
import { useState } from "react"
import { Header } from "@/components/Header"
import Link from "next/link"
import { Search, Filter, X } from "lucide-react"
import { motion } from "framer-motion"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
export default function LandingPage() {
    const [showFilterPanel, setShowFilterPanel] = useState(false)
    const landingPages = [
        { id: 1, pageName: "form-tcnfb-1746179458152", pageType: "Form Page", dateOfCreation: "2 May 2025", totalVisitors: 1, conversion: 0, Status: "Active" },
        { id: 2, pageName: "course-tcnfb-1740808109704", pageType: "Course Page", dateOfCreation: "1 Mar 2025", totalVisitors: 0, conversion: 0, Status: "Draft" },
        { id: 2, pageName: "webinar-tcnfb-173659038390", pageType: "Webinar Page", dateOfCreation: "11 jan 2025", totalVisitors: 0, conversion: 0, Status: "Inactive" },
        { id: 1, pageName: "form-tcnfb-1746179458152", pageType: "Form Page", dateOfCreation: "2 May 2025", totalVisitors: 1, conversion: 0, Status: "Active" },
        { id: 2, pageName: "course-tcnfb-1740808109704", pageType: "Course Page", dateOfCreation: "1 Mar 2025", totalVisitors: 0, conversion: 0, Status: "Draft" },
        { id: 2, pageName: "webinar-tcnfb-173659038390", pageType: "Webinar Page", dateOfCreation: "11 jan 2025", totalVisitors: 0, conversion: 0, Status: "Inactive" },
        { id: 1, pageName: "form-tcnfb-1746179458152", pageType: "Form Page", dateOfCreation: "2 May 2025", totalVisitors: 1, conversion: 0, Status: "Active" },
        { id: 2, pageName: "course-tcnfb-1740808109704", pageType: "Course Page", dateOfCreation: "1 Mar 2025", totalVisitors: 0, conversion: 0, Status: "Draft" },
        { id: 2, pageName: "webinar-tcnfb-173659038390", pageType: "Webinar Page", dateOfCreation: "11 jan 2025", totalVisitors: 0, conversion: 0, Status: "Inactive" },
        { id: 1, pageName: "form-tcnfb-1746179458152", pageType: "Form Page", dateOfCreation: "2 May 2025", totalVisitors: 1, conversion: 0, Status: "Active" },
        { id: 2, pageName: "course-tcnfb-1740808109704", pageType: "Course Page", dateOfCreation: "1 Mar 2025", totalVisitors: 0, conversion: 0, Status: "Draft" },
        { id: 2, pageName: "webinar-tcnfb-173659038390", pageType: "Webinar Page", dateOfCreation: "11 jan 2025", totalVisitors: 0, conversion: 0, Status: "Inactive" }
    ]
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
    const [input, setInput] = useState('')
    return <>
        <main className='w-full'>
            <Header heading='Landing page (12)' para='List of pages created by you' ></Header>
            <motion.section variants={itemVariants} initial="hidden" animate="visible" className="py-5 bg-indigo-50">
                <div className="container max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 ">
                        {/* search */}
                        <div className="searchbar relative shadow-sm flex w-2/5 items-center  bg-white rounded-2xl border border-gray-300 ">
                            <Input type="text" placeholder='Search by name' className='bg-white rounded-2xl px-2 outline-none w-full py-2 h-full' value={input} onChange={(e) => setInput(e.target.value)} />
                            <Search className=' absolute h-6 right-4 text-gray-600'></Search>
                        </div>
                        {/* filter */}
                        <div className="bg-white shadow-sm border-gray-300 w-30 text-gray-700 p-2 border rounded-2xl">
                            <button className='flex items-center justify-around w-full' onClick={() => setShowFilterPanel(true)}>
                                Filter
                                <Filter className='text-gray-400'></Filter>
                            </button>
                            {/* filter Panel */}
                            {showFilterPanel &&
                                <div className="fixed right-0 top-0 bg-white w-1/3 z-100 rounded-s-2xl h-screen overflow-x-auto">
                                    <div className="sticky top-0  bg-white flex items-center justify-between px-5 py-5 border-b">
                                        <h1 className='text-2xl font-semibold text-gray-950'>Filter</h1>
                                        <X onClick={() => setShowFilterPanel(false)}></X>
                                    </div>
                                    <div className="flex flex-col my-4 gap-4 px-5 py-3">
                                        <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
                                            <h3 className='text-gray-900 font-semibold my-2'>Page Type</h3>
                                            <div className="flex gap-2 text-gray-700 my-1 ">
                                                <input type="radio" name="radio" id='me' />
                                                <label htmlFor="radio">All</label>
                                            </div>
                                            <div className="flex gap-2 text-gray-700 my-1">
                                                <input type="radio" name="radio" id='institute' />
                                                <label htmlFor="radio">Webinar Page</label>
                                            </div>
                                            <div className="flex gap-2 text-gray-700 my-1 ">
                                                <input type="radio" name="radio" id='imported' />
                                                <label htmlFor="radio">Course Page</label>
                                            </div>
                                            <div className="flex gap-2 text-gray-700 my-1 ">
                                                <input type="radio" name="radio" id='imported' />
                                                <label htmlFor="radio">Form Page</label>
                                            </div>
                                        </div>
                                        <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
                                            <h3 className='text-gray-900 font-semibold my-2'>Page Status</h3>
                                            <div className="flex gap-2 my-1">
                                                <input type="checkbox" name="public" id="" />
                                                <label htmlFor="public">All</label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <input type="checkbox" name="public" id="" />
                                                <label htmlFor="public">Active</label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <input type="checkbox" name="public" id="" />
                                                <label htmlFor="public">Inactive</label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <input type="checkbox" name="public" id="" />
                                                <label htmlFor="public">Draft</label>
                                            </div>
                                        </div>
                                        <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
                                            <h3 className='text-gray-900 font-semibold my-2'>Created By</h3>
                                            <div className="flex gap-2 text-gray-700 my-1 ">
                                                <input type="radio" name="radio" id='me' />
                                                <label htmlFor="radio">Me</label>
                                            </div>
                                            <div className="flex gap-2 text-gray-700 my-1">
                                                <input type="radio" name="radio" id='institute' />
                                                <label htmlFor="radio">My institute</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sticky border-t bottom-0 right-0 bg-white py-4 px-4 w-full">
                                        <div className="flex justify-end gap-4">
                                            <button className='bg-white cursor-pointer text-primary rounded-xl border border-primary px-4 py-3'>Clear Filter</button>
                                            <button className='bg-primary text-white cursor-pointer rounded-xl px-4 py-3'>Apply Filter</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="text-white bg-primary shadow-sm p-2 rounded-2xl w-1/7 border-primary border ">
                            <Link href={'/educator/landing-page/create'}>
                                <button className='flex items-center font-semibold justify-around w-full '>Create New Page</button>
                            </Link>
                        </div>
                    </div>
                    {/* table */}
                    <div className="my-4 bg-white p-4 rounded-2xl shadow-sm">
                        <Table >
                            <TableHeader className="">
                                <TableRow className="">
                                    <TableHead className="py-3 font-semibold">Page Name</TableHead>
                                    <TableHead className="py-3 font-semibold">Page Type</TableHead>
                                    <TableHead className="py-3 font-semibold">Date of Creation</TableHead>
                                    <TableHead className="py-3 font-semibold">Total Visitors</TableHead>
                                    <TableHead className="py-3 font-semibold">Conversion</TableHead>
                                    <TableHead className="py-3 font-semibold">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="">
                                {landingPages.map((item, index) => {
                                    return <TableRow key={index} className="my-5">
                                        <TableCell className="text-primary font-semibold py-3">{item.pageName}</TableCell>
                                        <TableCell className="py-3">{item.pageType}</TableCell>
                                        <TableCell className="py-3">{item.dateOfCreation}</TableCell>
                                        <TableCell className="py-3" >{item.totalVisitors}</TableCell>
                                        <TableCell className="py-3 text-gray-400" >{item.conversion}</TableCell>
                                        <TableCell className="py-3" >{item.Status}</TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </motion.section>
        </main>
    </>
}