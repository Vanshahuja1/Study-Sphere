'use client'
import { Header } from "@/components/Header";
import { Search, Filter, Star, X, BookOpenText, ArrowBigLeft, ArrowBigLeftDash, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from "react";
import { CourseCard2 } from "@/components/courseCard2";
import { CourseCard } from "@/components/courseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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


    return (<>
        <main className="py-5 w-full bg-gray-50">
            <Header heading='Global Courses' para='Import courses from global courses of my courses' ></Header>
            <section className='py-5'>
                <div className="container max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 ">
                        {/* search */}
                        <div className="searchbar flex w-2/5 items-center  bg-white rounded-2xl border border-gray-400 ">
                            <input type="text" placeholder='Search by name' className='bg-white rounded-2xl px-2 outline-none w-full py-2 h-full' value={input} onChange={(e) => setInput(e.target.value)} />
                            <Search className='w-1/5 h-7 text-gray-600'></Search>
                        </div>
                        <div className="bg-white border-gray-400 w-35 text-gray-700 p-2 border rounded-2xl">
                            <button className='flex items-center justify-around w-full' onClick={() => setShowFilterPanel(true)}>
                                Filter
                                <Filter className='text-gray-700'></Filter>
                                {/* filter Panel */}
                            </button>
                            {showFilterPanel &&
                                <div className="fixed right-0 top-0 bg-white w-1/3 z-100 rounded-s-2xl h-screen overflow-x-auto">
                                    <div className=" sticky top-0  bg-white flex items-center justify-between px-5 pt-5">
                                        <h1 className='text-2xl font-bold text-gray-950'>Filter</h1>
                                        <X onClick={() => setShowFilterPanel(false)}></X>
                                    </div>
                                    <div className="flex flex-col my-4 gap-4 px-5 py-3">

                                        <div className="bg-gray-100 px-3 py-3 rounded-xl">
                                            <h3 className='text-gray-900 font-bold my-2'>Categories/ Sub-categories</h3>
                                            <select className='bg-white w-full p-2 rounded-xl'>
                                                <option value="">Political Science</option>
                                                <option value="">Mathematics</option>
                                            </select>
                                        </div>

                                        <div className="bg-gray-100 p-3 rounded-xl">
                                            <h3 className='text-gray-900 font-bold my-2'>Course Type</h3>
                                            <div className="flex gap-2 text-gray-700 my-1 ">
                                                <input type="radio" name="radio" id='me' />
                                                <label htmlFor="radio">Created by me</label>
                                            </div>
                                            <div className="flex gap-2 text-gray-700 my-1">
                                                <input type="radio" name="radio" id='institute' />
                                                <label htmlFor="radio">Created by Institute</label>
                                            </div>
                                            <div className="flex gap-2 text-gray-700 my-1 ">
                                                <input type="radio" name="radio" id='imported' />
                                                <label htmlFor="radio">imported Course</label>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded-xl">
                                            <h3 className='text-gray-900 font-bold my-2'>Course Status</h3>
                                            <div className="flex gap-2 my-1">
                                                <input type="checkbox" name="public" id="" />
                                                <label htmlFor="public">Published (Public)</label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <input type="checkbox" name="public" id="" />
                                                <label htmlFor="public">Published (Private)</label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <input type="checkbox" name="public" id="" />
                                                <label htmlFor="public">Unpublished</label>
                                            </div>
                                            <div className="flex gap-2 my-1">
                                                <input type="checkbox" name="public" id="" />
                                                <label htmlFor="public">Expired</label>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded-xl">
                                            <h3 className='text-gray-900 font-bold my-2'>Price Range</h3>
                                            <div className="flex gap-4">
                                                <input
                                                    type="text"
                                                    value={lowerLimit}
                                                    onChange={(e) => {
                                                        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                                                        setLowerLimit(onlyNums);
                                                    }} className='bg-white rounded-xl outline-none p-1 w-1/2' placeholder=' ₹ Enter lower limit' />
                                                <input
                                                    type="text"
                                                    value={upperLimit}
                                                    onChange={(e) => {
                                                        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                                                        setUpperLimit(onlyNums);
                                                    }} className='bg-white rounded-xl outline-none p-1 w-1/2' placeholder=' ₹ Enter upper limit' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sticky bottom-0 right-0 bg-white py-4 px-4 w-full">
                                        <div className="flex justify-end gap-4">
                                            <button className='bg-white cursor-pointer text-primary rounded-xl border border-primary px-4 py-3'>Clear Filter</button>
                                            <button className='bg-primary text-white cursor-pointer rounded-xl px-4 py-3'>Apply Filter</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="my-5 flex w-240 justify-between items-center">
                        <h2 className="text-2xl text-gray-700">Exam-oriented test series</h2>
                        <button className="text-primary border hover:text-white hover:bg-primary cursor-pointer border-primary p-3 rounded-xl">View All</button>
                    </div>
                    <Slider {...horizontalSettings}>
                        {globalCoursesData.map((course) => {
                            return <CourseCard key={course.id} name={course.CourseName} validity={course.validity} price={course.price} createdBy={course.createdBy} />
                        })}
                    </Slider>

                    <div className="my-5 flex w-240 justify-between items-center">
                        <h2 className="text-2xl text-gray-700">Top selling Courses</h2>
                        <button className="text-primary border hover:text-white hover:bg-primary cursor-pointer border-primary p-3 rounded-xl">View All</button>
                    </div>
                    <Slider {...verticalSettings}>
                        {globalCoursesData.map((course) => {
                            return <CourseCard2 key={course.id} name={course.CourseName} validity={course.validity} price={course.price} imported={course.imported} createdBy={course.createdBy} />
                        })}
                    </Slider>

                    <div className="my-5 flex w-240 justify-between items-center">
                        <h2 className="text-2xl text-gray-700">Org relevant Courses</h2>
                        <button className="text-primary border hover:text-white hover:bg-primary cursor-pointer border-primary p-3 rounded-xl">View All</button>
                    </div>
                    <Slider {...horizontalSettings}>
                        {globalCoursesData.map((course) => {
                            return <CourseCard key={course.id} name={course.CourseName} validity={course.validity} price={course.price} createdBy={course.createdBy} />
                        })}
                    </Slider>
                </div>
            </section>
        </main>
    </>)
}