'use client'
import { Header } from "@/components/Header"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Search, Filter, X, MoreVertical, CheckCheck } from "lucide-react"
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
import React from "react"
const tags = Array.from({ length: 20 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const users = [
    { username: "John Doe", startDate: "25 June 2025" },
    { username: "Alex Pierra", startDate: "1 March 2025" },
    { username: "Sean Hayfield", startDate: "5 jun 2025" },
    { username: "Mark Galloway", startDate: "11 August 2025" },
    { username: "John Doe", startDate: "25 June 2025" },
    { username: "Alex Pierra", startDate: "1 March 2025" },
    { username: "Sean Hayfield", startDate: "5 jun 2025" },
    { username: "Mark Galloway", startDate: "11 August 2025" },
    { username: "John Doe", startDate: "25 June 2025" },
    { username: "Alex Pierra", startDate: "1 March 2025" },
    { username: "Sean Hayfield", startDate: "5 jun 2025" },
    { username: "Mark Galloway", startDate: "11 August 2025" },
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
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
export default function educatorUsers() {
    const [showFilterPanel, setShowFilterPanel] = useState(false)
    const [input, setInput] = useState('')
    return <main className='w-full bg-background'>
        <Header heading='Users (18)' para="View, Filter & Manage all your users on site/app" ></Header>
        <motion.section variants={itemVariants} initial='hidden' animate='visible' className="py-5">
            <div className="container max-w-5xl mx-auto">
                <div className="flex items-center gap-3 ">
                    {/* search */}
                    <div className="searchbar shadow-sm relative flex w-2/5 items-center  bg-white rounded-2xl border border-gray-300 ">
                        <Input type="text" placeholder='Search by name' className='bg-white rounded-2xl px-2 outline-none w-full py-2 h-full' value={input} onChange={(e) => setInput(e.target.value)} />
                        <Search className=' absolute h-6 right-4 text-gray-600'></Search>
                    </div>
                    {/* filter */}
                    <div className="bg-white shadow-sm border-gray-300 w-30 text-gray-700 p-2 border rounded-2xl">
                        <button className='flex items-center  justify-center gap-2 w-full' onClick={() => setShowFilterPanel(true)}>
                            Filter
                            <Filter className='text-gray-600 h-5'></Filter>
                        </button>
                        {/* filter Panel */}
                        {showFilterPanel &&
                            <div className="shadow-2xl fixed right-0 top-0 bg-white w-2/5 z-50 rounded-s-2xl h-screen overflow-x-auto">
                                <div className=" sticky top-0  bg-white flex items-center justify-between px-5 py-5 border-b">
                                    <h1 className='text-2xl font-bold text-gray-950'>Filter</h1>
                                    <X onClick={() => setShowFilterPanel(false)}></X>
                                </div>
                                <div className="flex flex-col my-3 gap-4 px-5 py-3">
                                    <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
                                        <h3 className='text-gray-900 font-semibold my-2'>Course</h3>
                                        <Select >
                                            <SelectTrigger className="w-full bg-white rounded-2xl" >
                                                <SelectValue className="bg-white z-51 w-full p-3 rounded-2xl
                                        border" placeholder="Select Course"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1">Geography Climate of India</SelectItem>
                                                <SelectItem value="2">UPSC exams</SelectItem>
                                                <SelectItem value="3">SSC Prepartion</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <h3 className='text-gray-900 font-semibold my-2 border-t pt-3'>User Status</h3>
                                        <div className="flex gap-2 text-gray-600 my-3 ">
                                            <Checkbox id='me' className="bg-white" />
                                            <Label htmlFor="radio">Active</Label>
                                        </div>
                                        <div className="flex gap-2 text-gray-600 my-3">
                                            <Checkbox id="installment" className="bg-white" />
                                            <Label htmlFor="installment">Pending Installment</Label>
                                        </div>
                                        <div className="flex gap-2 text-gray-600 my-3 ">
                                            <Checkbox id='inactive' className="bg-white" />
                                            <Label htmlFor="inactive">Inactive</Label>
                                        </div>
                                        <div className="flex gap-2 text-gray-600 my-3 ">
                                            <Checkbox id='expired' className="bg-white" />
                                            <Label htmlFor="expired">Expired</Label>
                                        </div>
                                    </div>
                                    <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
                                        <h3 className='text-gray-900 font-semibold my-2'>User Type</h3>
                                        <div className="flex gap-2 my-3">
                                            <Checkbox id="" className="bg-white" />
                                            <Label htmlFor="parent" className="">Parent</Label>
                                        </div>
                                        <div className="flex gap-2 my-3">
                                            <Checkbox id="" className="bg-white" />
                                            <Label htmlFor="student">Student</Label>
                                        </div>
                                    </div>
                                    <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
                                        <h3 className='text-gray-900 font-semibold my-2'>App Downloads</h3>
                                        <div className="flex gap-2 my-3">
                                            <Checkbox id="yes" className="bg-white"/>
                                            <Label htmlFor="yes">App Downloaded</Label>
                                        </div>
                                        <div className="flex gap-2 my-3">
                                            <Checkbox id="no" className="bg-white" />
                                            <Label htmlFor="no">App Not Downloaded</Label>
                                        </div>
                                    </div>
                                    <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
                                        <h3 className='text-gray-900 font-semibold my-2'>Block Status</h3>
                                        <div className="flex gap-2 text-gray-700 my-3">
                                            <Checkbox  id='blocked' className="bg-white" />
                                            <Label htmlFor="blocked">Blocked Students</Label>
                                        </div>
                                        <div className="flex gap-2 text-gray-700 my-3">
                                            <Checkbox  id='unblocked' className="bg-white" />
                                            <Label htmlFor="unblocked">Unblocked Students</Label>
                                        </div>
                                    </div>
                                    <div className="bg-indigo-50 shadow-sm p-3 rounded-2xl">
                                        <h3 className='text-gray-900 font-semibold my-2'>Date of joining</h3>
                                        <Select name="" >
                                            <SelectTrigger className="bg-white w-full p-3 rounded-2xl
                                        border">
                                                <SelectValue placeholder="Select Date"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="yes">Yesterday</SelectItem>
                                                <SelectItem value="7">Last 7 Days</SelectItem>
                                                <SelectItem value="15">Last 15 Days</SelectItem>
                                                <SelectItem value="30">Last 30 Days</SelectItem>
                                                <SelectItem value="3m">Last 3 Months</SelectItem>
                                            </SelectContent>
                                        </Select>
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
                <div className="w-full bg-white shadow-sm rounded-2xl my-4 px-4">
                    <div className="flex py-5 border-b ">
                        <h2 className=" font-semibold text-gray-700 px-3 flex-6">User Info</h2>
                        <h2 className=" font-semibold text-gray-700 px-3 flex-2">Registration Date</h2>
                        <h2 className=" font-semibold text-gray-700 px-3 flex-1">Actions</h2>
                    </div>
                    <ScrollArea className="h-100 w-full ">
                        <div className="py-2">
                            {users.map((item, i) => (
                                <React.Fragment key={i}>
                                    <div className="py-2 items-center flex gap-4">
                                        <div className="flex gap-5 flex-6 ">
                                            <input type="checkbox" name="" id="" />
                                            <div className=" bg-blue-400 rounded-2xl font-semibold text-2xl px-5 py-2 text-white">A</div>
                                            <div className="">
                                                <p className=" text-slate-800 font-semibold">{item.username}</p>
                                                <span className="text-gray-500 text-xs">+911234567890</span>
                                            </div>
                                        </div>
                                        <p className="flex-2 text-gray-500 text-sm font-semibold">{item.startDate}</p>
                                        <div className="flex-1">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="outline-none text-gray-700"><MoreVertical /></DropdownMenuTrigger>
                                                <DropdownMenuContent className="text-gray-700">
                                                    <DropdownMenuItem>See logged devices</DropdownMenuItem>
                                                    <DropdownMenuItem>Give certificate</DropdownMenuItem>
                                                    <DropdownMenuItem>Revoke access</DropdownMenuItem>
                                                    <DropdownMenuItem>Make active/inactive in course</DropdownMenuItem>
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