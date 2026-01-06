'use client'
import { Header } from "@/components/Header"
import { motion } from "framer-motion"
import Link from "next/link"
import { Search, Filter, X, MoreVertical, LucideMessageCircle, Mic, Mic2, Speaker, LucideBookmarkCheck, LucideFileBadge, LucideTicketCheck, LucideUser, LucideFileArchive, LucideBookOpen, LucideSettings, LucideImagePlus, LucideImage } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@radix-ui/react-separator"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import React from "react"
const tags = Array.from({ length: 20 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
import { useState } from "react"
import Image from "next/image"
export default function educatorTeamMembers() {
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
    const Team = [
        { username: "John Doe", inCourses: "10" },
        { username: "Alex Pierra", inCourses: "All" },
        { username: "Sean Hayfie", inCourses: "4" },
        { username: "Mark Galloway", inCourses: "-" },
        { username: "John Doe", inCoursess: "-" },
        { username: "Alex Pierra", inCourses: "4" },
        { username: "Sean Hayfiel", inCourses: "5" },
        { username: "Mark Galloway", inCourses: "5" },
        { username: "John Doe", inCourses: "All" },
        { username: "Alex Pierra", inCourses: "-" },
        { username: "Sean Hayfiel", inCourses: "7" },
        { username: "Mark Galloway", inCourses: "9" },
    ]
    const [input, setInput] = useState('')
    const [showFilterPanel, setShowFilterPanel] = useState(false)
    return <main className='w-full'>
        <Header heading='My Team (28)' para="View, Filter & Manage all your Team on site/app" ></Header>
        <motion.section variants={itemVariants} initial='hidden' animate='visible' className="py-5 bg-indigo-50">
            <div className="container max-w-5xl mx-auto">
                <div className="flex items-center gap-3 ">
                    {/* search */}
                    <div className="searchbar flex w-2/5 items-center  bg-white rounded-2xl border border-gray-300 ">
                        <Input type="text" placeholder='Search by name' className='bg-white rounded-2xl px-2 outline-none w-full py-2 h-full' value={input} onChange={(e) => setInput(e.target.value)} />
                        <Search className=' absolute h-6 right-4 text-gray-600'></Search>

                    </div>
                    {/* filter */}
                    <div className="bg-white border-gray-300 w-30 text-gray-700 py-1 px-1 border rounded-2xl">
                        <button className='flex items-center  justify-center gap-2 w-full' onClick={() => setShowFilterPanel(true)}>
                            Filter
                            <Filter className='text-gray-600 h-5'></Filter>
                        </button>
                        {/* filter Panel */}
                        {showFilterPanel &&
                            <div className="shadow-2xl fixed right-0 top-0 bg-white w-2/5 z-100 rounded-s-2xl h-screen overflow-x-auto">
                                <div className=" sticky top-0  bg-white flex items-center justify-between px-5 py-5 border-b">
                                    <h1 className='text-2xl font-bold text-gray-950'>Filter</h1>
                                    <X onClick={() => setShowFilterPanel(false)}></X>
                                </div>
                                <div className="flex flex-col my-3 gap-4 px-5 py-4 h-120">
                                    <div className="bg-gray-50 p-3 rounded-xl">
                                        <h3 className='text-gray-800 font-semibold my-2'>Course</h3>
                                        <select name="" id="" className="bg-white w-full p-3 rounded-2xl
                                                                border">
                                            <option value="">Geography Climate of India</option>
                                            <option value="">UPSC exams</option>
                                            <option value="">SSC Prepartion</option>
                                        </select>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-2xl">
                                        <h3 className='text-gray-800 font-semibold my-2'>Permissions</h3>
                                        <select name="" id="" className="bg-white w-full p-3 rounded-2xl
                                                                border">
                                            <option value="">All Permissions</option>
                                            <option value="">Marketing Suite</option>
                                            <option value="">Chats</option>
                                            <option value="">Banners</option>
                                            <option value="">Coupons</option>
                                            <option value="">Tests</option>
                                            <option value="">People</option>
                                            <option value="">Free Study Material</option>
                                            <option value="">Settings</option>
                                            <option value="">Courses</option>
                                        </select>
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
                </div>
                <div className="w-full bg-white rounded-2xl my-4 px-4">
                    <div className="flex py-5 border-b ">
                        <h2 className="font-semibold text-gray-700 px-3 flex-3">Member Name</h2>
                        <h2 className="font-semibold text-gray-700 px-3 flex-3 text-center">Permissions</h2>
                        <h2 className="font-semibold text-gray-700 px-3 flex-2 text-center">In Courses</h2>
                        <h2 className="font-semibold text-gray-700 px-3 flex-1 text-center">Actions</h2>
                    </div>
                    <ScrollArea className="h-100 w-full ">
                        <div className="py-2">
                            {Team.map((item, i) => (
                                <React.Fragment key={i}>
                                    <div className="py-2 items-center flex gap-4">
                                        <div className="flex gap-5 flex-3 ">
                                            <input type="checkbox" name="" id="" />
                                            <div className="bg-blue-400 rounded-2xl font-semibold text-2xl px-5 py-2 text-white">A</div>
                                            <div className="">
                                                <p className=" text-slate-800 font-semibold">{item.username}</p>
                                                <span className="text-gray-500 text-xs">+91234567890</span>
                                            </div>
                                        </div>
                                        <div className="grid grid-rows-2 grid-cols-6 gap-y-2 flex-3">
                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideMessageCircle className="h-5 text-gray-400" />
                                                    <TooltipContent>Chat Permission</TooltipContent>
                                                </TooltipTrigger>
                                            </Tooltip>

                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideBookmarkCheck className="h-5 w-5 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>Marketing Suite Permission</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideFileBadge className="h-5 w-5 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>Tests Permission</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideTicketCheck className="h-5 w-5 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>Coupons Permission</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideUser className="h-5 w-5 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>Users Permission</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideFileArchive className="h-5 w-5 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>Free Study Material Permission</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideBookOpen className="h-5 w-5 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>Course Permission</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideSettings className="h-5 w-5 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>Settings Permission</TooltipContent>
                                            </Tooltip>
                                            <Tooltip>
                                                <TooltipTrigger className="flex justify-center">
                                                    <LucideImagePlus className="h-5 w-5 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>Banner Permission</TooltipContent>
                                            </Tooltip>
                                        </div>
                                        <p className="flex-2 text-center  text-gray-500 font-semibold">{item.inCourses}</p>
                                        <div className="flex-1 text-center">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="outline-none text-gray-700"><MoreVertical /></DropdownMenuTrigger>
                                                <DropdownMenuContent className="text-gray-700">
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>

                                    </div>
                                    <Separator className="my-2" />
                                </React.Fragment>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </motion.section>
    </main>
}