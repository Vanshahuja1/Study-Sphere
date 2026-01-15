"use client"
import { Header } from "@/components/Header"
import { useEducator } from "@/app/educatorContext/educatorContext"
import greenTick from '../../../../../public/greenTick-c3c873ac..svg'
import Link from "next/link"
import Image from "next/image"
import { LucideArrowRight, PlusCircle, Check, LoaderCircleIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
const steps = [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }];
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


export default function EducatorCreateCourse() {
  useEffect(() => {
    // const pingServer = async () => {
    //   try {
    //     const res = await fetch("https://classplusproject-u8mc.onrender.com/")

    //     // Only try to parse JSON if the server actually returns JSON
    //     let data;
    //     const contentType = res.headers.get("content-type") || "";
    //     if (contentType.includes("application/json")) {
    //       data = await res.json();
    //     } else {
    //       data = await res.text(); // fallback for plain text or HTML
    //     }

    //     console.log("Root response:", data)
    //   } catch (error) {
    //     console.error("Failed to reach server:", error)
    //   }
    // }

    // pingServer()

//  const sendotp = async () => {
//       try {
//         const res = await fetch('https://classplusproject-u8mc.onrender.com/api/auth/send-otp/', {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//           body: JSON.stringify({
//             identifier: "sahilskp110@gmail.com",
//             identifier_type: "email"
//           })
//         })
//         const data = await res.json()
//         console.log(data)
//       }
//       catch (e) {
//         console.log(e)
//       }
//     }
//   sendotp
    
  }, [])
const { createCourseData, setCreateCourseData } = useEducator();
const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {name,value} = e.target
    setCreateCourseData((prev) => ({
    ...prev,
    [name]: value,
  }))
}
console.log(createCourseData)
  return <main className=" w-full">
    <Header heading='Create Courses' para='Add/View content of your course' ></Header>
    <motion.section variants={itemVariants} initial="hidden" animate="visible" className="py-5 bg-indigo-50">
      <div className="container max-w-5xl mx-auto">
        <div className="shadow-sm bg-white rounded-t-2xl pb-5 pt-8 border-b mt-5">
          <Stepper defaultValue={1} indicators={{
            completed: <Check className="size-3.5" />,
            active: <LoaderCircleIcon className="size-3.5 animate-spin" />,
          }} className="space-y-8">
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
        <div className="flex justify-between bg-white py-4 px-9 ">

          <div className="w-1/2">
            <div className="flex flex-col gap-2 my-4 h-20">
              <Label htmlFor="Name" className="font-semibold text-lg text-slate-800">Name</Label>
              <Input type="text" name="title" value={createCourseData.title} onChange={handleChange} placeholder="Enter Course Name" className="border px-4 py-5 shadow-sm border-gray-300 bg-white rounded-lg" />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <Label htmlFor="Description" className="font-semibold text-lg text-slate-800">Description</Label>
              <Textarea placeholder="Enter Course description here" value={createCourseData.description} onChange={handleChange} name="description" className="border shadow-sm border-gray-300 bg-white p-2 h-45  rounded-lg" />

            </div>
          </div>
          <div className="w-1/4">
            <div className="bg-linear-to-r shadow-sm from-indigo-50 to-purple-50 p-5 h-80 border mt-4 border-gray-100 rounded-2xl">
              <h2 className="font-bold text-lg text-gray-700 my-3">Features</h2>
              <ul className="flex gap-2 flex-col">
                <li className="flex gap-2"> <Image src={greenTick} width={20} height={20} alt="green tick"></Image> Allow offline download</li>
                <li className="flex gap-2"> <Image src={greenTick} width={20} height={20} alt="green tick"></Image> Create installments</li>
                <li className="flex gap-2"> <Image src={greenTick} width={20} height={20} alt="green tick"></Image> Promote course with trial</li>
                <li className="flex gap-2"> <Image src={greenTick} width={20} height={20} alt="green tick"></Image> Conduct LIVE classes</li>
                <li className="flex gap-2"> <Image src={greenTick} width={20} height={20} alt="green tick"></Image> Allow course preview</li>
                <li className="flex gap-2"> <Image src={greenTick} width={20} height={20} alt="green tick"></Image> Limit course access</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-2xl px-4 pt-1 pb-4">

          <div className="flex flex-col gap-2 my-4 border-b pb-5 px-6 ">
            <Label htmlFor="Description" className="font-semibold text-lg text-slate-800">Add Thumbnail</Label>
            <Input type="file" name="" id="" className="w-50 bg-white border shadow-sm" />

          </div>
          <div className="flex gap-45 pb-4 px-6">
            <div className="flex flex-col gap-2 my-4">
              <Label htmlFor="Description" className="font-semibold text-lg text-slate-800">Category</Label>
              <Select onValueChange={(value)=> setCreateCourseData((prev)=> ({...prev,category:value}))}>
                <SelectTrigger className='bg-white border-gray-300 shadow-sm py-5 rounded-lg'>
                  <SelectValue placeholder="Select Category" className='py-2' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Bank Exams</SelectItem>
                  <SelectItem value="2">UPSC Exmas</SelectItem>
                  <SelectItem value="3">SSC Exams</SelectItem>
                </SelectContent>
              </Select>

            </div>
            <div className="flex flex-col gap-2 my-4">
              <Label htmlFor="Description" className="font-semibold text-lg text-slate-800">Sub Category</Label>
              <Select onValueChange={(value)=> setCreateCourseData((prev)=> ({...prev,subCategory:value}))} >
                <SelectTrigger className='bg-white py-5 rounded-lg shadow-sm'>
                  <SelectValue placeholder="Select Subcategory" className='py-2' />
                </SelectTrigger>
                <SelectContent>

                  <SelectItem value="1">Geography</SelectItem>
                  <SelectItem value="2">History</SelectItem>
                  <SelectItem value="3">Political science</SelectItem>
                </SelectContent>
              </Select>
            </div>


          </div>
          <p className="text-sm my-2 text-primary flex px-4 gap-1 font-bold cursor-pointer"> <PlusCircle className="h-5 w-5"></PlusCircle>Add more Categories</p>
        </div>
      </div>
    </motion.section>
    <motion.footer variants={containerVariants} initial="hidden" animate="visible" className=" bg-white shadow-2xl w-full px-5 py-4 sticky bottom-0 flex justify-between">
      <button className="border border-primary text-primary cursor-pointer rounded-2xl px-7 py-2">Previous</button>
      <Link href={'/educator/courses/edit'}>
        <button className="bg-primary text-white cursor-pointer rounded-2xl px-9 py-2 hover:font-bold ">Next</button>
      </Link>
    </motion.footer>
  </main>
}
