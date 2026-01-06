'use client'
import { Header } from "@/components/Header"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { LucideGlobe, Share2, Copy, ChevronRight, Plus, ImageIcon, TicketCheck, TabletSmartphone, Book, ArrowRight, LayoutTemplate, Target, FileText, X, Video } from "lucide-react"
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
  return <main className='w-full'>
    <Header heading='Hi, Sahil khan' para='Welcome to your Dashboard' ></Header>
    <motion.section variants={containerVariants} initial="hidden" animate="visible" className="py-5 bg-indigo-50">
      <div className="container max-w-5xl mx-auto">

        <div className="flex gap-4">
          {/* dashboard */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="w-3/4 ">
            <div className="flex gap-4">

              <div className="relative flex bg-white px-3 py-4 rounded-2xl gap-5 items-center t w-1/2 ">
                <div className="bg-purple-200 rounded-4xl p-4">
                  <LucideGlobe className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h3 className="font-semibold text-xl text-primary">Your Website</h3>
                  <div className="flex gap-3 mt-2">
                    <span className="flex items-center gap-1 text-sm text-gray-900 hover:text-primary cursor-pointer"> <Share2 className="h-4 w-4"></Share2>Share</span>
                    <span className="flex items-center gap-1 text-sm text-gray-900 hover:text-primary cursor-pointer"><Copy className="h-4 w-4"></Copy>  Copy Link</span>
                  </div>
                </div>
                <div className="absolute right-4 text-primary">
                  <ChevronRight className="h-7 w-7"></ChevronRight>
                </div>
              </div>

              <div className="relative flex bg-white px-3 py-4 rounded-2xl gap-5 items-center  w-1/2 ">
                <div className="bg-purple-200 rounded-4xl p-4">
                  <TabletSmartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h3 className="font-semibold text-xl text-primary">Your App</h3>
                  <div className="flex gap-3 mt-2">
                    <span className="flex items-center gap-1 text-sm text-gray-900 hover:text-primary cursor-pointer"> <Share2 className="h-4 w-4"></Share2>Share</span>
                    <span className="flex items-center gap-1 text-sm text-gray-900 hover:text-primary cursor-pointer"><Copy className="h-4 w-4"></Copy>  Copy Link</span>
                  </div>
                </div>
                <div className="absolute right-4">
                  <ChevronRight className="h-7 w-7 text-primary"></ChevronRight>
                </div>
              </div>

            </div>

            <div className="bg-white my-4 p-4 rounded-2xl">
              <h2 className="text-slate-900 font-semibold text-lg">Our Offerings</h2>
              <div className="grid grid-cols-2 py-5 gap-4 ">

                <div className="relative h-45 bg-white px-5 py-4 rounded-2xl border-gray-200 border w-full ">

                  <div className="flex items-center gap-5">
                    <div className="bg-purple-200 rounded-4xl p-3">
                      <Book className="h-6 w-6 text-primary" />
                    </div>
                    <div className="">
                      <h3 className="font-semibold text-xl">Courses</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-slate-800">13 Courses published</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 px-3 text-gray-700 h-10 text-sm">Easily course and sell courses online</p>
                  <Link href={'/educator/courses'}>
                    <motion.div whileHover={{}} className="w-full">
                      <p className="text-primary absolute bottom-3 px-3 font-semibold inline-flex items-end gap-1 cursor-pointer">Create Course
                        <ArrowRight className="h-5" /></p>
                    </motion.div>
                  </Link>
                </div>

                <div className="relative  bg-white px-5 py-4 rounded-2xl border-gray-200 border w-full ">

                  <div className="flex items-center gap-5">
                    <div className="bg-purple-200 rounded-4xl p-3">
                      <LayoutTemplate className="h-6 w-6 text-primary" />
                    </div>
                    <div className="">
                      <h3 className="font-semibold text-xl">Landing Page</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-slate-800">2 landing pages</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 px-3 h-10 text-slate-700 text-sm">Boost your conversions with stand alone landing pages</p>
                  <p className="text-primary  px-3 absolute bottom-3 font-semibold flex items-end gap-1">Create Landing page<ArrowRight className="h-5" /></p>
                </div>

                <div className="relative h-45  bg-white px-3 py-4 rounded-2xl border-gray-200 border w-full ">

                  <div className="flex items-center gap-5">
                    <div className="bg-purple-200 rounded-4xl p-3">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div className="">
                      <h3 className="font-semibold text-xl">Campaign</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-slate-800">No campaign created</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 px-3 h-10 text-gray-700 text-sm">Create targeted marketing campaigns & boost engagement</p>
                  <p className="text-primary  px-3 font-semibold absolute bottom-3 flex items-end gap-1">Explore Campaign<ArrowRight className="h-5" /></p>
                </div>


                <div className="relative h-45 bg-white px-3 py-4 rounded-2xl border-gray-200 border w-full ">

                  <div className="flex items-center gap-5">
                    <div className="bg-purple-200 rounded-4xl p-3">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="">
                      <h3 className="font-semibold text-xl">Test portal</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-slate-800">315 Tests created</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 px-3 h-10 text-gray-700 text-sm">Create online Tests and assign it it your courses</p>
                  <p className="text-primary absolute bottom-3 px-3 font-semibold flex items-end gap-1">Create Tests<ArrowRight className="h-5" /></p>
                </div>

              </div>
            </div>

            <div className="bg-white my-4 p-4 rounded-2xl">

              <div className="flex justify-between items-start">
                <div className="">
                  <h2 className="text-slate-900 font-semibold  text-lg">Analytics</h2>
                  <p className="my-1  text-gray-700 text-xs">Last 7 days</p>
                </div>
                <p className="text-primary  px-3 font-semibold  flex items-end gap-1">View Details<ArrowRight className="h-5" /></p>
              </div>
              <div className="grid grid-cols-2 py-4 gap-3">
                <div className="flex w-full justify-between">
                  <h3 className="text-lg text-gray-900 border-s-4 border-purple-400 px-3">Website Sessions</h3>
                  <p className="text-primary text-2xl font-semibold">0</p>
                </div>

                <div className="flex w-full justify-between">
                  <h3 className="text-lg text-gray-900 border-s-4 border-purple-400 px-3">Buy New Clicks</h3>
                  <p className="text-primary text-2xl font-semibold">0</p>
                </div>

                <div className="flex w-full justify-between">
                  <h3 className="text-lg text-gray-900 border-s-4 border-purple-400 px-3">Transactions</h3>
                  <p className="text-primary text-2xl font-semibold">0</p>
                </div>

                <div className="flex w-full justify-between">
                  <h3 className="text-lg text-gray-900 border-s-4 border-purple-400 px-3">Revenue</h3>
                  <p className="text-primary text-2xl font-semibold">0</p>
                </div>
              </div>

            </div>
          </motion.div>
          {/* options */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="bg-white w-1/4 p-4 rounded-2xl">
            <h2 className="text-gray-700 font-semibold mb-5 border-gray-200 pb-3 border-b text-xl">Upcoming Classes</h2>
            <button onClick={() => setShowClassPanel(true)} className="bg-primary w-full text-white justify-center py-2 rounded-lg flex items-center"><Plus className="h-5"></Plus>Create Class</button>
            {showClassPanel &&
              <div className="shadow-2xl fixed right-0 top-0 bg-white w-2/5 z-100 rounded-s-2xl h-screen overflow-x-auto">
                <div className="sticky top-0  bg-white flex items-center justify-between px-5 py-5 border-b">
                  <h1 className='text-2xl font-bold text-gray-950'>Live Class</h1>
                  <X onClick={() => setShowClassPanel(false)}></X>
                </div>
                <div className="flex flex-col my-4 gap-4 px-5 py-3">

                  <div className="bg-indigo-50 flex items-center gap-7 px-3 py-3 rounded-xl">
                    <div className="bg-indigo-200 flex items-center relative flex-col py-3 px-4 rounded-2xl">
                      <Video className="h-12 w-12 text-primary"></Video>
                      <p className="bg-red-500 rounded  text-white text-xs p-1 absolute bottom-0">Live Class</p>
                    </div>
                    <div className='my-2 flex flex-col gap-1'>
                      <h3 className="font-semibold text-lg">Live Class Online </h3>
                      <p className="text-slate-600 text-sm">Schedule Live Class online in your courses or batch</p>
                      <p className=" text-sm text-primary font-semibold  flex items-end gap-1">View Details<ArrowRight className="h-5" /></p>
                    </div>

                  </div>

             

                  <div className="bg-indigo-50 flex items-center gap-7 px-3 py-3 rounded-xl">
                    <div className="bg-indigo-200 flex relative justify-center items-center flex-col py-3 px-4 rounded-2xl">
                      <Video className="h-12 w-12 text-primary"></Video>
                      <p className="bg-orange-500 rounded w-13 text-center text-white text-xs absolute bottom-0 p-1">Demo</p>
                    </div>
                    <div className='my-2 flex flex-col gap-1'>
                      <h3 className="font-semibold text-lg">Demo Live Class Online </h3>
                      <p className="text-slate-600 text-sm">Schedule Demo Class to promote this course to other students</p>
                      <p className=" text-sm text-primary font-semibold  flex items-end gap-1">Schedule Demo Class<ArrowRight className="h-5" /></p>
                    </div>

                  </div>



                </div>

              </div>
            }
            <h2 className="text-gray-700 font-semibold my-5  text-xl">Additional Offerings</h2>

            <div className="flex bg-purple-50 my-3 px-3 py-3 rounded-2xl gap-3 items-center text-primary  ">
              <div className="bg-purple-200 rounded-4xl p-2">
                <ImageIcon className="h-5" />
              </div>
              <div className="px-2">
                <h3 className="font-semibold">Banners</h3>
                <div className="flex  gap-3">
                  <span className="flex  gap-2 text-xs"> 5 Live</span>
                </div>
              </div>
              <div className="px-7">
                <ChevronRight className="h-5"></ChevronRight>
              </div>
            </div>

            <div className="flex my-3 bg-purple-50 px-3 py-3 rounded-2xl gap-3 items-center text-primary  ">
              <div className="bg-purple-200 rounded-4xl p-2">
                <TicketCheck className="h-5" />
              </div>
              <div className="px-2">
                <h3 className="font-semibold ">Coupons</h3>
                <div className="flex gap-3">
                  <span className="flex items-center gap-2 text-xs"> 0 Live</span>
                </div>
              </div>
              <div className="px-7">
                <ChevronRight className="h-5"></ChevronRight>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  </main>
}
