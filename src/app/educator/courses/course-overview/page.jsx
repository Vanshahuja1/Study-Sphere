import { Header } from "@/components/Header"
import Image from "next/image"
import courseImg from '../../../../../public/Course-card.png'
import { File, Folder, Camera, Speaker, Volume2, Cuboid, PlusCircle } from "lucide-react"
export default function CourseOverview() {
    return (
        <>
            <main className="bg-gray-200 w-full">
                <Header heading='Course Overview' para="Overview the content of your course"></Header>
                <section className="w-full bg-white py-7">
                    <div className="container ps-8 mx-auto">
                        <div className="flex justify-between">
                            {/* Overview */}
                            <div className="flex  justify-between w-3/4 bg-white">
                                {/* courses text */}
                                <div className="w-1/2 ">
                                    <h2 className="text-gray-900 text-lg ">Course Name</h2>
                                    <p className="text-gray-700 ">Geography Climate of India</p>

                                    <h2 className="text-gray-900 mt-4 text-lg">Description</h2>
                                    <p className="text-gray-700 ">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex est consequatur perferendis numquam obcaecati qui laborum aspernatur possimus, quaerat accusantium illum unde magnam nemo ad autem debitis perspiciatis facere provident fugiat! Provident voluptatibus iusto blanditiis sunt ullam nemo magni quia facilis, soluta excepturi cum consequuntur sint nam sapiente, architecto repellendus, omnis veniam! Labore eius ipsam ullam veritatis officiis qui quaerat mollitia perspiciatis saepe rem harum dolore odit quibusdam, ex explicabo? Magnam cupiditate repellendus sequi odit explicabo, sapiente distinctio eligendi nisi doloremque, numquam laudantium est! Non veniam distinctio temporibus maxime est vero! Quis culpa quia illo iusto provident veniam, itaque deleniti!
                                    </p>
                                    <div className="flex mt-7 justify-between">
                                        <div className="">
                                            <h2 className="text-gray-900 text-lg ">Price</h2>
                                            <p className="text-gray-700 ">₹100</p>
                                        </div>
                                        <div className="">
                                            <h2 className="text-gray-900 text-lg">Discount</h2>
                                            <p className="text-gray-700 ">₹0</p>
                                        </div>
                                    </div>
                                    <p className="text-sm my-2 text-primary flex  gap-1 font-bold "> <PlusCircle className="h-5 w-5"></PlusCircle>Create Instalments</p>

                                    <div className="flex mt-7 justify-between">
                                        <div className="">
                                            <h2 className="text-gray-900 text-lg">Category</h2>
                                            <p className="text-gray-700 ">UPSC-CSE</p>
                                        </div>
                                        <div className="">
                                            <h2 className="text-gray-900 text-lg">SubCategory</h2>
                                            <p className="text-gray-700 ">Geography</p>
                                        </div>
                                    </div>
                                    <h2 className="text-gray-900 mt-7 text-lg">Course Duration Type</h2>
                                    <p className="text-gray-700 ">Lifetime Validity</p>
                                    <h2 className="text-gray-900 mt-7 text-lg">Course Imports</h2>
                                    <p className="text-gray-700 ">3 imports</p>
                                </div>

                                {/* course Image */}
                                <div className=" ps-10">
                                    <Image src={courseImg} height={325} width={325} alt="Course Image"></Image>
                                </div>
                            </div>
                            {/* options */}
                            <div className="bg-white rounded-2xl w-60 px-5 flex flex-col gap-4 ">
                                <div className="flex items-center gap-3 border border-gray-400 rounded-2xl px-4 py-2">
                                    <div className="bg-primary rounded-3xl p-2">
                                        <Folder className="text-white h-5 w-5"></Folder>
                                    </div>
                                    <div className="">
                                        <h3 className="text-lg text-gray-900">Content</h3>
                                        <p className="text-gray-700 text-sm">23 Content</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-gray-400 rounded-2xl px-4 py-2">
                                    <div className="bg-primary rounded-3xl p-2">
                                        <Camera className="text-white h-5 w-5" />

                                    </div>
                                    <div className="">
                                        <h3 className="text-lg text-gray-900">Live Classes</h3>
                                        <p className="text-primary text-sm">Go Live</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-gray-400 rounded-2xl px-4 py-2">
                                    <div className="bg-primary rounded-3xl p-2">
                                        <Volume2 className="text-white h-5 w-5" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-lg text-gray-900">Notice Board</h3>
                                        <p className="text-primary text-sm">Create a Notice</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border border-gray-400 rounded-2xl px-4 py-2">
                                    <div className="bg-primary rounded-3xl p-2">
                                        <Cuboid className="text-white h-5 w-5" />
                                    </div>
                                    <div className="">
                                        <h3 className="text-lg text-gray-900">Bundle</h3>
                                        <p className="text-primary text-sm">Create a Bundle </p>
                                    </div>
                                </div>
                                <button className="text-primary border border-primary rounded-3xl p-2">More Options...</button>
                                <button className="bg-primary text-white rounded-3xl p-2">Publish Course</button>
                            </div>
                        </div>

                    </div>
                    
                </section>
                <footer className="bg-white w-full px-5 py-4 sticky bottom-0">
                        <button className="border border-primary text-primary cursor-pointer rounded-2xl px-7 py-2">Previous</button>
                    </footer>
            </main>
        </>
    )
}