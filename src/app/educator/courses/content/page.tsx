"use client"
import { Header } from "@/components/Header"
import { Check, LoaderCircleIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import dragIcon from '@/../public/drag-icon.svg'
import folderImg from '@/../public/folder-img.svg'
import videoImg from '@/../public/video-circle_diy.svg'
import onlineTestImg from '@/../public/online-test-active.png'
import subjective from '@/../public/subjective-test-icon.svg'
import document from '@/../public/document_diy.svg'
import img from '@/../public/image_diy.svg'
import zip from '@/../public/zip_diy.svg'
import download from '@/../public/import_diy.svg'
import { LucideArrowRight, PlusCircle, MoreVertical, Folder } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { createCourse, check } from "@/services/educator/coursesAPIs"
import { ToastContainer,toast } from "react-toastify"
import {
    Stepper,
    StepperContent,
    StepperIndicator,
    StepperItem,
    StepperNav,
    StepperPanel,
    StepperSeparator,
    StepperTrigger,
    StepperTitle
} from '@/components/ui/stepper';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import React, { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { useEducator ,buildFormData} from "@/app/educatorContext/educatorContext"
const tags = Array.from({ length: 20 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
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




export default function EducatorContentCourse() {

    const { createCourseData, setCreateCourseData } = useEducator()
    const courseCreation = async () => {
        try {
            const formData = buildFormData(createCourseData)
            console.log(formData,'formdata')
            const res = await createCourse(formData)
            console.log(res,'res',)
            toast.success(res.message)
        }
        catch (e) {
            console.log(e)
             toast.error(e?.response?.data?.message || "Something went wrong")
        }

    }
    return <main className=" w-full">
        <Header heading='Create Courses' para='Add/View content of your course' ></Header>
        <motion.section variants={itemVariants} initial="hidden" animate="visible" className="py-5 bg-indigo-50">
            <div className="container max-w-5xl mx-auto">
                <div className="bg-white rounded-t-2xl border-b px-6 pt-4">
                    <Stepper defaultValue={3} indicators={{
                        completed: <Check className="size-3.5" />,
                        active: <LoaderCircleIcon className="size-3.5 animate-spin" />,
                    }} className="space-y-8 py-6 px-4">
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
                                    {step.title} - Add Content
                                </StepperContent>
                            ))}
                        </StepperPanel>
                    </Stepper>
                </div>
                <div className="flex bg-white p-4 gap-3 rounded-b-2xl">
                    <div className="w-3/4 ">
                        <h2 className="text-xl font-semibold text-slate-900 px-3">Content</h2>
                        <ScrollArea className="h-130  w-180 rounded-md ">
                            <div className="p-5">
                                {tags.map((tag) => (
                                    <React.Fragment key={tag}>
                                        <div className="text-lg flex p-5 gap-5 relative">
                                            <Image src={dragIcon} width={10} height={10} alt="icon"></Image>
                                            <Image src={folderImg} alt="icon" height={40} width={40}></Image>
                                            <div className="">
                                                <h4 className="font-semibold ">Demo Course (IAS/RAS Foundation 2025/2026 Batch)</h4>
                                                <span className="text-gray-400 text-sm">9 video(s), 2 file(s), 7 test(s)</span>
                                            </div>
                                            <div className="absolute right-2 text-gray-500">
                                                <MoreVertical ></MoreVertical>
                                            </div>
                                        </div>
                                        <Separator className="my-2" />
                                    </React.Fragment>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="w-1/4 ">
                        <div className="bg-gradient-to-r shadow-sm from-indigo-50 to-purple-50 p-5  border mt-4 border-gray-100 rounded-2xl">
                            <h2 className="font-semibold text-xl px-3 text-slate-900 my-4 ">Add Content</h2>
                            <ul className="flex gap-4 py-3 flex-col px-3 cursor-pointer">
                                <li className="flex gap-2"> <Image src={folderImg} className="" width={25} height={25} alt="green tick"></Image> Folder</li>

                                <li className="flex gap-2"> <Image src={videoImg} width={25} height={25} alt="green tick"></Image>
                                    <Dialog>
                                        <DialogTrigger>Video</DialogTrigger>
                                        <DialogContent >
                                            <DialogHeader className="flex flex-col items-center gap-5">
                                                <DialogTitle><Image src={videoImg} width={100} height={100} alt="green tick"></Image></DialogTitle>
                                                <DialogTitle>Upload Video(s)</DialogTitle>
                                                <DialogDescription>
                                                    Select Multiple Videos from your local storage*Max upto 5GB per Video                                                </DialogDescription>
                                                <DialogDescription>
                                                    <Input type='file' placeholder="upload video"></Input>

                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter className="text-center bg-gradient-to-t my-3 from-indigo-200 to-purple-200 text-sm rounded-2xl p-3" >
                                                View restrictions (decide the maximum number of views and for the maximum view duration) are available for studysphere powered vidoes.
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </li>
                                <li className="flex gap-2"> <Image src={onlineTestImg} width={25} height={25} alt="green tick"></Image> Online Test</li>
                                <li className="flex gap-2"> <Image src={subjective} width={25} height={25} alt="green tick"></Image> Subjective</li>
                                <li className="flex gap-2"> <Image src={document} width={25} height={25} alt="green tick"></Image> document</li>
                                <li className="flex gap-2"> <Image src={img} width={25} height={25} alt="green tick"></Image> Image</li>
                                <li className="flex gap-2"> <Image src={zip} width={25} height={25} alt="green tick"></Image>Zip File</li>
                                <li className="flex gap-2"> <Image src={download} width={25} height={25} alt="green tick"></Image>Import Content</li>
                                <li className="flex gap-2"> <Image src={download} width={25} height={25} alt="green tick"></Image>Import Live</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
        <motion.footer variants={containerVariants} initial="hidden" animate="visible" className="bg-white shadow-2xl w-full px-5 py-4 sticky bottom-0 flex justify-between">
            <button  className="border border-primary text-primary cursor-pointer rounded-2xl px-7 py-2">Previous</button>
            <button onClick={() => courseCreation()} className="bg-primary text-white cursor-pointer rounded-2xl px-9 py-2 hover:font-bold ">Next</button>
        </motion.footer>
        <ToastContainer></ToastContainer>
    </main>
}