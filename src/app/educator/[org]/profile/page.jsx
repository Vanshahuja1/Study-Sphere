'use client'
import { Header } from "@/components/Header"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { LucideGlobe, Share2, Copy, ChevronRight, Plus, ImageIcon, TicketCheck, TabletSmartphone, Book, ArrowRight, LayoutTemplate, Target, FileText, X, Video, LucideLayoutDashboard } from "lucide-react"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
export default function EducatorDashboard() {
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
    const [showClassPanel, setShowClassPanel] = useState(false)
    return <main className='w-full bg-background'>
        <Header heading='Welcome back, Sahil ' para='Manage your profile details' ></Header>
        <motion.section variants={containerVariants} initial="hidden" animate="visible" className="py-5 ">
            <div className="container max-w-5xl mx-auto">
                <div className="flex gap-4">

                    <div className="bg-white shadow-sm flex gap-5 px-7 py-3 rounded-2xl w-3/5">
                        <div className="w-1/3">
                            <Image src={"https://github.com/shadcn.png"} className="rounded-4xl" unoptimized height={115} width={115} alt="profile"></Image>
                        </div>
                        <div className="flex flex-col w-2/4 gap-1">
                            <h1 className="text-4xl mt-2  font-semibold text-primary-foreground">Sahil Khan</h1>
                            <p className="text-primary text-lg">sahiladmin@gmail.com</p>
                            <div className="flex gap-3 text-xs">
                            <p className="bg-secondary text-center font-semibold text-primary-foreground">Organisation Admin</p>
                            <p className="text-slate-300">joined 1 year ago</p>
                            </div>
                        </div>
                        <div className="self-center justify-center flex w-1/3">
                            <button className="bg-primary text-white px-5 py-1 rounded">Edit Details</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 px-2 w-2/5 shadow-sm">
                        <div className="flex gap-15 px-7">
                            <div className="my-1">
                                <h2 className="text-slate-500 text-xs font-semibold">Organisation Name</h2>
                                <p className="text-primary  font-semibold text-2xl">OneAIm Institute</p>
                            </div>
                            <div className="my-1">
                                <h2 className="text-slate-500 text-xs font-semibold">Org Code</h2>
                                <p className="text-primary font-semibold text-2xl">OA7</p>
                            </div>
                        </div>
                        <div className="flex gap-7 mt-2 px-7">
                            <div className="bg-secondary rounded-2xl border border-green-300 px-3 py-2 text-center">
                                <h2 className=" text-slate-500 text-xs font-semibold">sub-Admins</h2>
                                <p className="font-semibold text-xl text-primary">6</p>
                            </div>
                            <div className="bg-sky-50 rounded-2xl border border-blue-300 px-3 py-2 text-center">
                                <h2 className=" text-slate-500 text-xs font-semibold">instructors</h2>
                                <p className="text-sky-500 text-2xl font-semibold">18</p>
                            </div>
                            <div className="bg-amber-50 rounded-2xl border border-amber-300 px-3 py-2 text-center">
                                <h2 className="text-slate-500 font-semibold text-xs">students</h2>
                                <p className="text-amber-500 text-2xl font-semibold">500+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-sm bg-white rounded-2xl my-4 p-4">
                    <h2 className="font-semibold text-xl">Basic Information</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Full Name</Label>
                            <Input placeholder="Username" className="text-lg w-110" disabled ></Input>
                        </div>
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Email</Label>
                            <Input placeholder="sahiladmin@gmail.com" className="text-lg w-110" disabled ></Input>
                        </div>
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Mobile</Label>
                            <Input placeholder="+91 123456789" className="text-lg w-110" disabled ></Input>
                        </div>
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>About</Label>
                            <Input placeholder="tell us about yourself..." className="text-lg w-110" disabled ></Input>
                        </div>
                    </div>
                    <h2 className="font-semibold text-xl mt-4 mb-1">Qualifications & Experience</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Speicialisation</Label>
                            <Input placeholder="General Studies" className="text-lg w-100" disabled ></Input>
                        </div>
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Qualification</Label>
                            <Input placeholder="M.C.A" className="text-lg w-full" disabled ></Input>
                        </div>
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Experience</Label>
                            <Input placeholder="20 years" className="text-lg w-100" disabled ></Input>
                        </div>
                    </div>
                    <h2 className="font-semibold text-xl mt-4 mb-1">Bank Details</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Beneficiary Name</Label>
                            <Input placeholder="John Doe" className="text-lg w-100" disabled ></Input>
                        </div>
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Account Number</Label>
                            <Input placeholder="89393482438341" className="text-lg w-full" value={89393482438341} disabled ></Input>
                        </div>
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>IFSC Code</Label>
                            <Input placeholder="20 years" className="text-lg w-100" disabled value={'SBI000011231'} ></Input>
                        </div>
                    </div>
                    <h2 className="font-semibold text-xl mt-4 mb-1">Tax Details</h2>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>Billing Address</Label>
                            <Input placeholder="John Doe" className="text-lg w-100" value={'add your billing address'} disabled ></Input>
                        </div>
                        <div className="mt-4 flex gap-2 flex-col">
                            <Label>GSTIN</Label>
                            <Input placeholder="89393482438341" className="text-lg w-full" value={89393482438341} disabled ></Input>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    </main>
}