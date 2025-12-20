import { Header } from "@/components/Header"
import greenTick from '../../../../../public/greenTick-c3c873ac..svg'
import Image from "next/image"
import { LucideArrowRight, PlusCircle } from "lucide-react"
export default function EducatorCreateCourse() {
  return <main className="bg-gray-50 w-full">
    <Header heading='Create Courses' para='Add/View content of your course' ></Header>
    <section className="py-5">
      <div className="container max-w-5xl mx-auto">
        <div className="flex justify-between">

          <div className="w-1/2">
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="Name" className="font-bold text-lg text-gray-700">Name</label>
              <input type="text" placeholder="Enter Course Name" className="border p-2 border-gray-400 rounded" />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label htmlFor="Description" className="font-bold text-lg text-gray-700">Description</label>
              <textarea placeholder="Enter Course description here" className="border p-2 h-35 border-gray-400 rounded" />

            </div>
          </div>
          <div className="w-1/4">
            <div className="bg-gray-100 p-5 h-85 rounded-2xl">
              <h2 className="font-bold text-lg text-gray-700 my-3">Features</h2>
              <ul className="flex gap-3 flex-col">
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
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="Description" className="font-bold text-lg text-gray-700">Add Thumbnail</label>
          <input type="file" name="" id="" />

        </div>
        <div className="flex gap-45">
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="Description" className="font-bold text-lg text-gray-700">Category</label>
            <select name="" id="" className="border border-gray-400 px-7 bg-white  py-2 rounded-2xl">
              <option value="">Bank Exams</option>
              <option value="">UPSC Exmas</option>
              <option value="">SSC Exams</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="Description" className="font-bold text-lg text-gray-700">Sub Category</label>
            <select name="" id="" className="border border-gray-400 px-7 bg-white  py-2 rounded-2xl">
              <option value="">Geography</option>
              <option value="">History</option>
              <option value="">Political science</option>
            </select>
          </div>


        </div>
        <p className="text-sm my-2 text-primary flex  gap-1 font-bold cursor-pointer"> <PlusCircle className="h-5 w-5"></PlusCircle>Add more Categories</p>
      </div>
    </section>
    <footer className="bg-white w-full px-5 py-4 sticky bottom-0 flex justify-between">
      <button className="border border-primary text-primary cursor-pointer rounded-2xl px-7 py-2">Previous</button>
      <button className="bg-primary text-white cursor-pointer rounded-2xl px-9 py-2 hover:font-bold ">Next</button>
    </footer>
  </main>
}
