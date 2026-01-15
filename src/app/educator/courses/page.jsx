"use client"
import Image from 'next/image'
import courseCardImg from '../../../../public/Course-card.png'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getEducatorCourses } from '@/services/educator/coursesAPIs'
import { Header } from '@/components/Header'
import { Search, Filter, Star, X, BookOpenText, ArrowBigLeft, ArrowBigLeftDash } from 'lucide-react'
import { CourseCard } from '@/components/courseCard'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
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
  const [input, setInput] = useState('')
  const [sortValue, setSortValue] = useState('Name')
  const myCoursesData = [
    { id: 1, CourseName: "OSSSC RI ARI AMIN BOTH PRELIM + MAINS MOCK", createdBy: "OneAim IT Solutions", validity: "6 months", price: 500 },
    { id: 2, CourseName: "Geography Climate", createdBy: "OneAim IT Solutions", validity: "3 Months", price: 100 },
    { id: 3, CourseName: "CGLRE 2023 Recruitment 15 Mock Test", createdBy: "OneAim IT Solutions", validity: "Live", price: 300 },
    { id: 4, CourseName: "Indain Art & Culture", createdBy: "OneAim IT Solutions", validity: "Lifetime Validity", price: 1000 },
    { id: 5, CourseName: "Indain Art & Culture", createdBy: "OneAim IT Solutions", validity: "Lifetime Validity", price: 1000 },
    { id: 6, CourseName: "Indain Art & Culture", createdBy: "OneAim IT Solutions", validity: "Lifetime Validity", price: 1000 }
  ]
  const [courses, setCourses] = useState(myCoursesData || [])
  const [lowerLimit, setLowerLimit] = useState("");
  const [upperLimit, setUpperLimit] = useState("");
  const [showFilterPanel, setShowFilterPanel] = useState(false)
  const [showFeaturedPanel, setShowFeaturedPanel] = useState(false)
  const [showAddFeatured, setShowAddFeatured] = useState(false)
  const handleSearch = () => {
    const searched = myCoursesData.filter((item) => item.CourseName.toLowerCase().includes(input.toLowerCase().trim()))
    setCourses(searched)
  }
  useEffect(() => {
    handleSearch()
  }, [input])

  useEffect(() => {
    const handleSort = () => {
      let sorted = [...myCoursesData]
      if (sortValue === "lowest") {
        sorted.sort((a, b) => { return a.price - b.price })
      }
      else if (sortValue === "highest") {
        sorted.sort((a, b) => { return b.price - a.price })
      }
      console.log(sorted)
      setCourses(sorted)
    }
    handleSort()
  }, [sortValue])


  const handleSortValue = (value) => {
    setSortValue(value)
    console.log(sortValue)
  }
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getEducatorCourses()
      console.log(data)
      setCourses(data)
    }
    fetchCourses()
    const intervalId = setInterval(fetchCourses, 15000);

    // cleanup
    return () => clearInterval(intervalId);
  }, [])
  return <>
    <main className='w-full bg-indigo-50'>
      <Header heading='Manage Your Courses' para='Add/View courses of your brand' ></Header>
      <motion.section variants={itemVariants} initial="hidden" animate="visible" className='py-5'>
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center gap-3 ">
            {/* search */}
            <div className="searchbar shadow-sm flex w-2/5 items-center  bg-white rounded-2xl border border-gray-200 relative ">
              <Input type="text" placeholder='Search by name' className='bg-white rounded-2xl px-2 outline-none w-full py-2 h-full' value={input} onChange={(e) => setInput(e.target.value)} />
              <Search className=' absolute h-6 right-4 text-gray-600'></Search>
            </div>
            {/* sort */}

            <Select onValueChange={handleSortValue}>
              <SelectTrigger className='bg-white py-5 rounded-2xl shadow-sm cursor-pointer'>
                <SelectValue placeholder="Sort by" className='py-2' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='name'>Course Name</SelectItem>
                <SelectItem value='newest'>Newest</SelectItem>
                <SelectItem value='low'>Price Low to High</SelectItem>
                <SelectItem value='high'>Price High to Low</SelectItem>
                <SelectItem value='top'>Top Selling</SelectItem>
                <SelectItem value='popular'>Most Popular</SelectItem>
              </SelectContent>
            </Select>


            {/* filter */}
            <div className="bg-white cursor-pointer shadow-sm  border-gray-200 w-30 text-slate-900 p-2 border rounded-2xl">
              <button className='flex items-center cursor-pointer justify-center gap-2 w-full' onClick={() => setShowFilterPanel(true)}>
                Filter
                <Filter className='text-gray-700 h-5'></Filter>
              </button>
              {/* filter Panel */}
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

                    <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
                      <h3 className='text-gray-900 font-semibold my-2'>Course Type</h3>
                      <RadioGroup className="flex flex-col gap-1">

                        <div className="flex gap-2 my-1 ">
                          <RadioGroupItem className="bg-white " value="me" id='me' />
                          <Label htmlFor="me">Created by me</Label>
                        </div>
                        <div className="flex gap-2  my-1">
                          <RadioGroupItem className="bg-white" value="institute" id='institute' />
                          <Label htmlFor="institute">Created by Institute</Label>
                        </div>
                        <div className="flex gap-2  my-1 ">
                          <RadioGroupItem className="bg-white text-black" value="imported" id='imported' />
                          <Label htmlFor="imported">imported Course</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="bg-indigo-50 shadow-sm p-3 flex  gap-1 flex-col rounded-xl">
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
                    <div className="bg-indigo-50 shadow-sm p-3 rounded-xl">
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
            {/* featured */}
            <div className="bg-white shadow-sm  text-primary p-2 rounded-2xl w-1/7 cursor-pointer border-primary border">
              <button onClick={() => setShowFeaturedPanel(true)} className='flex cursor-pointer items-center font-semibold justify-around w-full'><Star></Star> Featured</button>

              {/* featured Panel */}
              {showFeaturedPanel &&
                <div className="fixed right-0 top-0 bg-white text-gray-700 w-1/3 z-100 rounded-s-2xl h-screen overflow-x-auto">
                  <div className=" sticky border-b pb-5 top-0  bg-white flex items-center justify-between px-5 pt-5">
                    <h1 className='text-2xl font-bold text-gray-950'>Featured</h1>
                    <X onClick={() => setShowFeaturedPanel(false)}></X>
                  </div>
                  <div className="p-4 my-2">
                    <p className='bg-linear-to-r from-indigo-50 font-semibold to bg-purple-50 rounded-xl p-2 text-center'>Featured Courses is a list of maximum 10 courses shown upfront to students.Changes might take some time to reflect</p>
                    <div className="flex gap-4 flex-col items-center h-85 justify-center mt-8 ">
                      <BookOpenText className='h-50 w-50 text-primary '></BookOpenText>
                      <p className='text-xl'>No Courses added to Featured list</p>
                    </div>
                  </div>
                  {/* <div className="flex flex-col my-4 gap-4 px-5 py-3">

                  
                </div> */}
                  <div className="sticky border-t bottom-0 right-0 bg-white py-4 px-4 w-full">
                    <div className="flex justify-between gap-4">
                      <button onClick={() => setShowAddFeatured(true)} className='bg-white cursor-pointer text-primary rounded-xl border border-primary px-4 py-3'>Add Course</button>
                      <button className='bg-primary text-white cursor-pointer rounded-xl px-5 py-3'>Save</button>
                    </div>
                  </div>
                </div>
              }

              {/* add featuredPanel */}
              {showAddFeatured &&
                <div className="fixed right-0 top-0 bg-white text-gray-700 w-1/3 z-100 rounded-s-2xl h-screen overflow-x-auto">
                  <div className=" sticky border-b pb-5 top-0  bg-white flex items-center justify-between px-5 pt-5">
                    <ArrowBigLeft onClick={() => setShowAddFeatured(false)}></ArrowBigLeft>
                    <h1 className='text-2xl font-bold text-gray-950'>Add Courses to Featured panel</h1>
                  </div>
                  <div className="p-4 my-2">
                    <p className='bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl p-2 text-center  font-semibold'>You can only select 10 Courses</p>
                  </div>
                  <div className="flex flex-col my-2 gap-4 px-5 py-3">
                    {myCoursesData.map((item) => {
                      return <div key={item.id} className="flex gap-4 hover:shadow-sm  border-b border-gray-200 py-4 px-2 rounded-xl">
                        <input type="checkbox" name="" id="" />
                        <Image src={courseCardImg} width={100} height={100} alt='course image'></Image>
                        <p className='font-semibold'>{item.CourseName}</p>
                      </div>
                    })}


                  </div>
                  <div className="sticky border-t bottom-0 right-0 bg-white py-4 px-4 w-full">
                    <div className="flex justify-end gap-4">
                      <button className='bg-primary text-white cursor-pointer rounded-xl px-5 py-3'>Save</button>
                    </div>
                  </div>
                </div>
              }
            </div>
            {/* create */}
            <div className="text-white bg-primary p-2 rounded-2xl w-1/7 border-primary border">
              <Link href={'/educator/courses/create'}>
                <button className='flex items-center font-semibold justify-around w-full'>Create Course</button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 my-6">
            {courses.map((course) => {
              return <CourseCard key={course.id} name={course.title} validity={course.validity_type} price={course.discounted_price} createdBy={course.created_By} />
            })}

          </div>
        </div>
      </motion.section>
    </main>
  </>
}
