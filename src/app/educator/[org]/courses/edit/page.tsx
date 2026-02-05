"use client"
import { useState } from 'react'
import { Header } from "@/components/Header"
import Link from 'next/link'
import { LucideArrowRight, PlusCircle, MoreVertical, Folder, Check, LoaderCircleIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Stepper,
    StepperContent,
    StepperIndicator,
    StepperItem,
    StepperNav,
    StepperPanel,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from '@/components/ui/stepper';
const steps = [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }];
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useEducator } from '@/app/educatorContext/educatorContext'

export default function EducatorEditCourse() {
    function formatDate(date: Date | undefined) {
        if (!date) {
            return ""
        }

        return date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })
    }

    function isValidDate(date: Date | undefined) {
        if (!date) {
            return false
        }
        return !isNaN(date.getTime())
    }

    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(
        new Date("2025-06-01")
    )
    const [month, setMonth] = useState<Date | undefined>(date)
    const [value, setValue] = useState(formatDate(date))
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
    const { createCourseData, setCreateCourseData } = useEducator();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setCreateCourseData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    return <main className=" w-full">
        <Header heading='Create Courses' para='Add/View content of your course' ></Header>
        <motion.section variants={itemVariants} animate="visible" initial="hidden" className="py-5 shadow-sm bg-indigo-50">
            <div className="container max-w-5xl mx-auto">
                <div className="bg-white rounded-t-2xl border-b pt-4">
                    <Stepper defaultValue={2}
                        indicators={{
                            completed: <Check className="size-3.5" />,
                            active: <LoaderCircleIcon className="size-3.5 animate-spin" />,
                        }}
                        className="space-y-8 py-6 px-4">
                        <StepperNav>
                            {steps.map((step, index) => (
                                <StepperItem key={index} step={index + 1} className="relative flex-1 items-start">
                                    <StepperTrigger className="flex flex-col gap-2.5">
                                        <StepperIndicator>{index + 1}</StepperIndicator>
                                        <StepperTitle>{step.title}</StepperTitle>
                                    </StepperTrigger>

                                    {steps.length > index + 1 && (
                                        <StepperSeparator className="absolute top-3 inset-x-0 left-[calc(50%+0.875rem)] m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem+0.225rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none group-data-[state=completed]/step:bg-primary" />
                                    )}
                                </StepperItem>
                            ))}
                        </StepperNav>

                        <StepperPanel className="text-sm">
                            {steps.map((step, i) => (
                                <StepperContent className="w-full flex items-center  text-slate-800  font-semibold justify-center" key={i} value={i + 1}>
                                    {step.title} - Basic Information
                                </StepperContent>
                            ))}
                        </StepperPanel>
                    </Stepper>
                </div>
                <div className="flex bg-white px-7  py-6 gap-3 rounded-b-2xl">
                    <div className="w-3/4 ">
                        <h2 className=" font-semibold text-slate-800 px-3 mt-2">Course type</h2>
                        <RadioGroup defaultValue="r1" className='mt-2'>
                            <div className="flex gap-18 text-slate-800 py-3 px-3">
                                <div className="flex gap-2">
                                    <RadioGroupItem value={'paid'} id="r1" />
                                    <Label htmlFor="r1">Paid Course</Label>
                                </div>
                                <div className=" flex gap-2">
                                    <RadioGroupItem value={'free'} id="r2" />
                                    <Label htmlFor="r2">Free Course</Label>
                                </div>
                            </div>
                        </RadioGroup>
                        <div className="">
                            <h2 className=" font-semibold text-slate-800 px-3 mt-4">Course duration type</h2>

                            <Select name="" onValueChange={(value) => setCreateCourseData((prev) => ({ ...prev, validity_type: value }))}>
                                <SelectTrigger className='bg-white m-2 w-120 shadow-sm border-gray-300 py-4 rounded-lg'>
                                    <SelectValue placeholder="Select Category" className='py-2' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="single">Single Validity</SelectItem>
                                    <SelectItem value="multiple">Multiple Validity</SelectItem>
                                    <SelectItem value="lifetime">Lifetime Validity</SelectItem>
                                    <SelectItem value="expiry">Course Expiry date</SelectItem>
                                </SelectContent>
                            </Select>

                            <div className="py-2 my-4 px-2">
                                <Label htmlFor="date" className="p-1">
                                    Course will expire for all students after your selected course expiry date
                                </Label>
                                <div className="relative w-120 flex gap-2">
                                    <Input
                                        id="date"
                                        value={value}
                                        placeholder="June 01, 2025"
                                        className="bg-background border-gray-300 w-120 py-4 mt-2 shadow-sm"
                                        onChange={(e) => {
                                            const date = new Date(e.target.value)
                                            setValue(e.target.value)
                                            if (isValidDate(date)) {
                                                setDate(date)
                                                setMonth(date)
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "ArrowDown") {
                                                e.preventDefault()
                                                setOpen(true)
                                            }
                                        }}
                                    />
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                id="date-picker"
                                                variant="ghost"
                                                className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                                            >
                                                <CalendarIcon className="size-3.5" />
                                                <span className="sr-only">Select date</span>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-auto overflow-hidden p-0"
                                            align="end"
                                            alignOffset={-8}
                                            sideOffset={10}
                                        >
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                captionLayout="dropdown"
                                                month={month}
                                                onMonthChange={setMonth}
                                                onSelect={(date) => {
                                                    setDate(date)
                                                    setValue(formatDate(date))
                                                    setOpen(false)
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-160 px-2 pb-4 mt-6">
                            <div className="">
                                <Label className=" font-semibold text-slate-800 px-3">Price</Label>
                                <Input type="text" onChange={handleChange} name='createCourseData.price' value={createCourseData.price}  placeholder="₹100" className=" border mt-2 shadow-sm  border-gray-400 rounded-lg  px-3" />
                            </div>
                            <div className="">
                                <Label className=" font-semibold text-slate-800 px-3">Discount</Label>
                                <Input type="text" onChange={handleChange} placeholder="20%" value={createCourseData.discount_percent} className=" border mt-2 shadow-sm  border-gray-400 rounded-lg  px-3" />
                            </div>
                            <div className="">
                                <Label className=" font-semibold text-slate-800 px-3">Effective Price</Label>
                                <Input type="text"  name=''   disabled placeholder="₹80" className="  shadow-sm border mt-2 border-gray-400 rounded-lg  px-3" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="bg-gradient-to-r shadow-sm from-indigo-50 to-purple-50 p-5 h-70 border mt-4 border-gray-100 rounded-2xl">
                            <h2 className="font-semibold text-center text-lg text-slate-900 my-4 ">What is Course Validity?</h2>
                            <p className="text-medium text-justify text-slate-900">Course Validity is the predefined time period during which your students can access their Courses, You can choose between single validity,multiple validity, lifetime validity or set course expiry date</p>

                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
        <motion.footer variants={containerVariants} initial="hidden" animate="visible" className="bg-white shadow-2xl w-full px-5 py-4 sticky bottom-0 flex justify-between">
            <button className="border border-primary text-primary cursor-pointer rounded-2xl px-7 py-2">Previous</button>
            <Link href={'content'}>
                <button className="bg-primary text-white cursor-pointer rounded-2xl px-9 py-2 hover:font-bold ">Next</button>
            </Link>
        </motion.footer>
    </main>
}