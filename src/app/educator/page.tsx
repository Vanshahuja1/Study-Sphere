import { Header } from "@/components/Header"
import Link from "next/link"
import { LucideGlobe, Share2, Copy, ChevronRight, Plus, ImageIcon, TicketCheck, TabletSmartphone, Book, ArrowRight, LayoutTemplate, Target, FileText} from "lucide-react"
export default function EducatorDashboard() {
  return <main className='w-full bg-gray-50'>
    <Header heading='Hi, Sahil khan' para='Welcome to your Dashboard' ></Header>
    <section className="py-5 bg-gray-100">
      <div className="container max-w-5xl mx-auto">

        <div className="flex gap-4">
          {/* dashboard */}
          <div className="w-3/4 ">
            <div className="flex gap-4">

              <div className="relative flex bg-white px-3 py-4 rounded-2xl gap-7 items-center t w-1/2 ">
                <div className="bg-purple-200 rounded-4xl p-4">
                  <LucideGlobe className="h-7 w-7 text-primary" />
                </div>
                <div className="">
                  <h3 className="font-bold text-xl text-primary">Your Website</h3>
                  <div className="flex gap-3 mt-2">
                    <span className="flex items-center gap-1 text-sm text-gray-900"> <Share2 className="h-4 w-4"></Share2>Share</span>
                    <span className="flex items-center gap-1 text-sm text-gray-900"><Copy className="h-4 w-4"></Copy>  Copy Link</span>
                  </div>
                </div>
                <div className="absolute right-4 text-primary">
                  <ChevronRight className="h-7 w-7"></ChevronRight>
                </div>
              </div>

              <div className="relative flex bg-white px-3 py-4 rounded-2xl gap-7 items-center  w-1/2 ">
                <div className="bg-purple-200 rounded-4xl p-4">
                  <TabletSmartphone className="h-7 w-7 text-primary" />
                </div>
                <div className="">
                  <h3 className="font-bold text-xl text-primary">Your App</h3>
                  <div className="flex gap-3 mt-2">
                    <span className="flex items-center gap-1 text-sm text-gray-900"> <Share2 className="h-4 w-4"></Share2>Share</span>
                    <span className="flex items-center gap-1 text-sm text-gray-900"><Copy className="h-4 w-4"></Copy>  Copy Link</span>
                  </div>
                </div>
                <div className="absolute right-4">
                  <ChevronRight className="h-7 w-7 text-primary"></ChevronRight>
                </div>
              </div>

            </div>

            <div className="bg-white my-4 p-4 rounded-2xl">
              <h2 className="text-gray-700 font-bold  text-xl">Our Offerings</h2>
              <div className="grid grid-cols-2 py-5 gap-4 ">

                <div className="relative  bg-white p-6 rounded-2xl border-gray-200 border w-full ">

                  <div className="flex items-center gap-7">
                    <div className="bg-purple-200 rounded-4xl p-4">
                      <Book className="h-7 w-7 text-primary" />
                    </div>
                    <div className="">
                      <h3 className="font-bold text-xl text-primary">Courses</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-900">13 Courses published</span>
                      </div>
                    </div>
                  </div>
                  <p className="my-2 px-3 text-gray-700 h-10 text-sm">Easily course and sell courses online</p>
               <Link href={'/educator/courses'}>
               
                  <p className="text-primary  px-3 font-bold flex items-end gap-1 cursor-pointer">Create Course 
                 <ArrowRight className="h-5" /></p>
               </Link>
                </div>

                <div className="relative  bg-white px-3 py-4 rounded-2xl border-gray-200 border w-full ">

                  <div className="flex items-center gap-7">
                    <div className="bg-purple-200 rounded-4xl p-4">
                      <LayoutTemplate className="h-7 w-7 text-primary" />
                    </div>
                    <div className="">
                      <h3 className="font-bold text-xl text-primary">Landing Page</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-900">2 landing pages</span>
                      </div>
                    </div>
                  </div>
                  <p className="my-2 px-3 h-10 text-gray-700 text-sm">Boost your conversions with stand alone landing pages</p>
                  <p className="text-primary  px-3 font-bold flex items-end gap-1">Create Landing page<ArrowRight className="h-5" /></p>
                </div>

                <div className="relative  bg-white px-3 py-4 rounded-2xl border-gray-200 border w-full ">

                  <div className="flex items-center gap-7">
                    <div className="bg-purple-200 rounded-4xl p-4">
                      <Target className="h-7 w-7 text-primary" />
                    </div>
                    <div className="">
                      <h3 className="font-bold text-xl text-primary">Campaign</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-900">No campaign created</span>
                      </div>
                    </div>
                  </div>
                  <p className="my-2 px-3 h-10 text-gray-700 text-sm">Create targeted marketing campaigns & boost engagement</p>
                  <p className="text-primary  px-3 font-bold flex items-end gap-1">Explore Campaign<ArrowRight className="h-5" /></p>
                </div>


                <div className="relative  bg-white px-3 py-4 rounded-2xl border-gray-200 border w-full ">

                  <div className="flex items-center gap-7">
                    <div className="bg-purple-200 rounded-4xl p-4">
                      <FileText className="h-7 w-7 text-primary" />
                    </div>
                    <div className="">
                      <h3 className="font-bold text-xl text-primary">Test portal</h3>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-900">315 Tests created</span>
                      </div>
                    </div>
                  </div>
                  <p className="my-2 px-3 h-10 text-gray-700 text-sm">Create online Tests and assign it it your courses</p>
                  <p className="text-primary  px-3 font-bold flex items-end gap-1">Create Tests<ArrowRight className="h-5" /></p>
                </div>

              </div>
            </div>

            <div className="bg-white my-4 p-4 rounded-2xl">

              <div className="flex justify-between items-start">
                <div className="">
                  <h2 className="text-gray-700 font-bold  text-xl">Analytics</h2>
                  <p className="my-1  text-gray-700 text-xs">Last 7 days</p>
                </div>
                <p className="text-primary  px-3 font-bold  flex items-end gap-1">View Details<ArrowRight className="h-5" /></p>
              </div>
              <div className="grid grid-cols-2 py-4 gap-3">
                <div className="flex w-full justify-between">
                  <h3 className="text-lg text-gray-900 border-s-4 border-purple-400 px-3">Website Sessions</h3>
                  <p className="text-primary text-2xl font-bold">0</p>
                </div>

                 <div className="flex w-full justify-between">
                  <h3 className="text-lg text-gray-900 border-s-4 border-purple-400 px-3">Buy New Clicks</h3>
                  <p className="text-primary text-2xl font-bold">0</p>
                </div>

                 <div className="flex w-full justify-between">
                  <h3 className="text-lg text-gray-900 border-s-4 border-purple-400 px-3">Transactions</h3>
                  <p className="text-primary text-2xl font-bold">0</p>
                </div>

                 <div className="flex w-full justify-between">
                  <h3 className="text-lg text-gray-900 border-s-4 border-purple-400 px-3">Revenue</h3>
                  <p className="text-primary text-2xl font-bold">0</p>
                </div>
              </div>

            </div>
          </div>
          {/* options */}
          <div className="bg-white w-1/4 p-4 rounded-2xl">
            <h2 className="text-gray-700 font-bold mb-5 border-gray-200 pb-3 border-b text-xl">Upcoming Classes</h2>
            <button className="bg-primary w-full text-white justify-center py-2 rounded-lg flex items-center"><Plus className="h-5"></Plus>Create Class</button>
            <h2 className="text-gray-700 font-bold my-5  text-xl">Additional Offerings</h2>

            <div className="flex bg-purple-50 my-3 px-3 py-3 rounded-2xl gap-3 items-center text-primary  ">
              <div className="bg-pink-200 rounded-4xl p-2">
                <ImageIcon className="h-5" />
              </div>
              <div className="px-2">
                <h3 className="font-bold">Banners</h3>
                <div className="flex  gap-3">
                  <span className="flex  gap-2 text-xs"> 5 Live</span>
                </div>
              </div>
              <div className="px-7">
                <ChevronRight className="h-5"></ChevronRight>
              </div>
            </div>

            <div className="flex my-3 bg-purple-50 px-3 py-3 rounded-2xl gap-3 items-center text-primary  ">
              <div className="bg-pink-200 rounded-4xl p-2">
                <TicketCheck className="h-5" />
              </div>
              <div className="px-2">
                <h3 className="font-bold ">Coupons</h3>
                <div className="flex gap-3">
                  <span className="flex items-center gap-2 text-sm"> 0 Live</span>
                </div>
              </div>
              <div className="px-7">
                <ChevronRight className="h-5"></ChevronRight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
}
