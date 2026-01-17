'use client'
import { Header } from "@/components/Header";
import { Search, Filter, Star, X, BookOpenText, ArrowBigLeft, ArrowBigLeftDash, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from "react";
import { CourseCard2 } from "@/components/courseCard2";
import { CourseCard } from "@/components/courseCard";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"

export default function GlobalCourses() {
    const [input, setInput] = useState('')
    const [showFilterPanel, setShowFilterPanel] = useState(false)
    const [lowerLimit, setLowerLimit] = useState("");
    const [upperLimit, setUpperLimit] = useState("");
    const globalCoursesData = [
        { id: 1, CourseName: "OSSSC RI ARI AMIN BOTH PRELIM + MAINS MOCK", createdBy: "OneAim IT Solutions", validity: "6 months", price: 500, imported: 30 },
        { id: 2, CourseName: "Geography Climate", createdBy: "OneAim IT Solutions", validity: "3 Months", price: 100, imported: 30 },
        { id: 3, CourseName: "CGLRE 2023 Recruitment 15 Mock Test", createdBy: "OneAim IT Solutions", validity: "Live", price: 300, imported: 30 },
        { id: 4, CourseName: "Indain Art & Culture", createdBy: "OneAim IT Solutions", validity: "Lifetime Validity", price: 1000, imported: 30 },
        { id: 5, CourseName: "Indain Art & Culture", createdBy: "OneAim IT Solutions", validity: "Lifetime Validity", price: 1000, imported: 30 },
        { id: 6, CourseName: "Indain Art & Culture", createdBy: "OneAim IT Solutions", validity: "Lifetime Validity", price: 1000, imported: 30 }
    ]
    const [courses, setCourses] = useState(globalCoursesData || [])
    const handleSearch = () => {
        const searched = globalCoursesData.filter((item) => item.CourseName.toLowerCase().includes(input.toLowerCase().trim()))
        setCourses(searched)
    }
    useEffect(() => {
        handleSearch()
    }, [input])

    const HPrevArrow = ({ onClick }) => {
        return (
            <button className="absolute hover:text-primary cursor-pointer right-7 -top-14" onClick={onClick}>
                <ChevronLeft></ChevronLeft>
            </button>
        )
    }

    const HNextArrow = ({ onClick }) => {
        return (
            <button className="absolute hover:text-primary cursor-pointer right-0 -top-14" onClick={onClick}>
                <ChevronRight></ChevronRight>
            </button>
        )
    }

    const VPrevArrow = ({ onClick }) => {
        return (
            <button className="absolute hover:text-primary cursor-pointer right-7 -top-14" onClick={onClick}>
                <ChevronLeft></ChevronLeft>
            </button>
        )
    }

    const VNextArrow = ({ onClick }) => {
        return (
            <button className="absolute hover:text-primary cursor-pointer right-0 -top-14" onClick={onClick}>
                <ChevronRight></ChevronRight>
            </button>
        )
    }
    const verticalSettings = {
        dots: true,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 600,
        prevArrow: <VPrevArrow />,
        nextArrow: <VNextArrow />
    };

    // Horizontal slider settings
    const horizontalSettings = {
        dots: true,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 600,
        prevArrow: <HPrevArrow />,
        nextArrow: <HNextArrow />
    };
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

    return (<>
        <main className=" w-full bg-indigo-50">
            <Header heading='Global Courses' para='Import courses from global courses of my courses' ></Header>
            <motion.section variants={itemVariants} initial="hidden" animate="visible" className='py-5'>
                <div className="container max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 ">
                        {/* search */}
                        <div className="searchbar shadow-sm flex w-2/5 items-center  bg-white rounded-2xl border border-gray-200 relative ">
                            <Input type="text" placeholder='Search by name' className='bg-white rounded-2xl px-2 outline-none w-full py-2 h-full' value={input} onChange={(e) => setInput(e.target.value)} />
                            <Search className=' absolute h-6 right-4 text-gray-600'></Search>
                        </div>
                        <div className="bg-white cursor-pointer shadow-sm border-gray-300 w-35 text-gray-700 p-2 border rounded-2xl">
                            <button className='cursor-pointer flex items-center justify-around w-full' onClick={() => setShowFilterPanel(true)}>
                                Filter
                                <Filter className='text-gray-700 h-5'></Filter>

                                {/* filter Panel */}
                            </button>
                            {showFilterPanel &&
                                <aside className="shadow-2xl fixed right-0 top-0 bg-white w-1/3 z-100 rounded-s-2xl h-screen overflow-x-auto">
                                    <div className="sticky top-0  bg-white flex items-center justify-between px-5 py-5 border-b">
                                        <h1 className='text-2xl font-semibold text-gray-950'>Filter</h1>
                                        <X onClick={() => setShowFilterPanel(false)}></X>
                                    </div>
                                    <div className="flex flex-col my-4 gap-4 px-5 py-3">

                                        <div className="bg-indigo-50 shadow-sm px-3 py-3 rounded-xl">
                                            <h3 className='text-gray-900 font-semibold my-2'>Categories/ Sub-categories</h3>
                                            <Select >
                                                <SelectTrigger className='bg-white  w-full p-2 rounded-xl'>
                                                    <SelectValue placeholder="Categories"></SelectValue>
                                                </SelectTrigger>
                                                <SelectContent
                                                    sideOffset={4}
                                                    className="w-(--radix-select-trigger-width) z-100">
                                                    <SelectItem value="poltical">Political Science</SelectItem>
                                                    <SelectItem value="maths">Mathematics</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="bg-indigo-50 p-3 shadow-sm rounded-xl">
                                            <h3 className='text-gray-900 font-semibold my-2'>Course Type</h3>
                                            <RadioGroup className="flex flex-col gap-1">

                                                <div className="flex gap-2 text-gray-700 my-1 ">
                                                    <RadioGroupItem className="bg-white " value="me" id='me' />
                                                    <Label htmlFor="me">Created by me</Label>
                                                </div>
                                                <div className="flex gap-2 text-gray-700 my-1">
                                                    <RadioGroupItem className="bg-white" value="institute" id='institute' />
                                                    <Label htmlFor="institute">Created by Institute</Label>
                                                </div>
                                                <div className="flex gap-2 text-gray-700 my-1 ">
                                                    <RadioGroupItem className="bg-white text-black" value="imported" id='imported' />
                                                    <Label htmlFor="imported">imported Course</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                        <div className="bg-indigo-50 p-3 shadow-sm flex flex-col rounded-xl">
                                            <h3 className='text-slate-900 font-semibold my-2'>Course Status</h3>
                                            <div className="flex gap-2 my-1">
                                                <Checkbox name="public" className="bg-white" id="" />
                                                <Label htmlFor="public">Published (Public)</Label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <Checkbox name="public" className="bg-white" id="" />
                                                <Label htmlFor="public">Published (Private)</Label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <Checkbox type="checkbox" className="bg-white" name="public" id="" />
                                                <Label htmlFor="public">Unpublished</Label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <Checkbox type="checkbox" className="bg-white" name="public" id="" />
                                                <Label htmlFor="public">Expired</Label>
                                            </div>
                                        </div>
                                        <div className="bg-indigo-50 p-3 shadow-sm rounded-xl">
                                            <h3 className='text-gray-900 font-semibold my-2'>Price Range</h3>
                                            <div className="flex gap-4">
                                                <Input
                                                    type="text"
                                                    value={lowerLimit}
                                                    onChange={(e) => {
                                                        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                                                        setLowerLimit(onlyNums);
                                                    }} className='bg-white rounded-xl outline-none p-1 w-1/2' placeholder=' ₹ Enter lower limit' />
                                                <Input
                                                    type="text"
                                                    value={upperLimit}
                                                    onChange={(e) => {
                                                        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                                                        setUpperLimit(onlyNums);
                                                    }} className='bg-white rounded-xl outline-none p-1 w-1/2' placeholder=' ₹ Enter upper limit' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sticky border-t bottom-0 right-0 bg-white py-4 px-4 w-full">
                                        <div className="flex justify-end gap-4">
                                            <button className='bg-white cursor-pointer text-primary rounded-xl border border-primary px-4 py-3'>Clear Filter</button>
                                            <button className='bg-primary text-white cursor-pointer rounded-xl px-4 py-3'>Apply Filter</button>
                                        </div>
                                    </div>
                                </aside>
                            }
                        </div>
                    </div>
                    <div className="my-5 flex w-240 justify-between items-center">
                        <h2 className="text-2xl text-gray-700">Exam-oriented test series</h2>
                        <button className="text-primary border  bg-white hover:text-white hover:bg-primary cursor-pointer border-primary p-3 rounded-xl">View All</button>
                    </div>
                    <Slider {...horizontalSettings}>
                        {courses && courses.length > 0 ? (
                            courses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    name={course.CourseName || course.title}
                                    validity={course.validity || course.validity_type}
                                    price={course.price || course.discounted_price}
                                    createdBy={course.createdBy || course.created_By}
                                    thumbnail={course.thumbnail}
                                />
                            ))
                        ) : null}
                    </Slider>

                    <div className="my-5 flex w-240 justify-between items-center">
                        <h2 className="text-2xl text-gray-700">Top selling Courses</h2>
                        <button className="text-primary border hover:text-white hover:bg-primary cursor-pointer border-primary p-3 bg-white rounded-xl">View All</button>
                    </div>
                    <Slider {...verticalSettings}>
                        {courses && courses.length > 0 ? (
                            courses.map((course) => (
                                <CourseCard2
                                    key={course.id}
                                    name={course.CourseName || course.title}
                                    validity={course.validity || course.validity_type}
                                    price={course.price || course.discounted_price}
                                    imported={course.imported}
                                    createdBy={course.createdBy || course.created_By}
                                    thumbnail={course.thumbnail}
                                />
                            ))
                        ) : null}
                    </Slider>

                    <div className="my-5 flex w-240 justify-between items-center">
                        <h2 className="text-2xl text-gray-700">Org relevant Courses</h2>
                        <button className="text-primary border hover:text-white hover:bg-primary cursor-pointer border-primary p-3 bg-white rounded-xl">View All</button>
                    </div>
                    <Slider {...horizontalSettings}>
                        {courses && courses.length > 0 ? (
                            courses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    name={course.CourseName || course.title}
                                    validity={course.validity || course.validity_type}
                                    price={course.price || course.discounted_price}
                                    createdBy={course.createdBy || course.created_By}
                                    thumbnail={course.thumbnail}
                                />
                            ))
                        ) : null}
                    </Slider>
                </div>
            </motion.section>
        </main>
    </>)
}