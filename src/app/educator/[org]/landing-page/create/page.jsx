import { Header } from "@/components/Header"
export default function CreateLandingPage() {
    return <>
        <main className='w-full'>
            <Header heading='Create your Landing page' para='You can create Landing pages for different use cases' ></Header>
            <section className="py-5 bg-white">
                <div className="container max-w-5xl mx-auto">
                    <div className="flex gap-4 my-10">

                        <div className="border-gray-400 border-dashed  border w-1/3 rounded-2xl">
                            <div className="flex flex-col items-center h-80 m-2 bg-indigo-50 py-10 px-10 rounded-2xl">

                                <h1 className="text-2xl  font-bold  text-gray-800">Webinar Page</h1>
                                <p className="text-gray-700 mt-7 text-sm">Use this to promote your free/paid webinar landing pages. E.g.-</p>
                                <ul className="text-gray-700 mt-2 text-sm">
                                    <li className="list-disc"> Promote your Digital Marketing paid webinar at 20% discount</li>
                                    <li className="list-disc mt-1">Promote your free webinar on stock trading tips</li>
                                </ul>
                            </div>
                            <div className="text-center py-3 mb-6">
                                <button className="bg-primary text-white  px-7 py-4 rounded-xl font-semibold mt-7">Create Webinar Page</button>
                            </div>
                        </div>

                        <div className="border-gray-400 border-dashed  border w-1/3 rounded-2xl">
                            <div className="flex flex-col items-center h-80 m-2 bg-indigo-50 py-10 px-10 rounded-2xl">
                                <h1 className="text-2xl  font-bold  text-gray-800">Course Page</h1>
                                <p className="text-gray-700 mt-7 text-sm">Use this to promote your course and increase their visibility amongst your target audience. E.g. -</p>
                                <ul className="text-gray-700 mt-2 text-sm">
                                    <li className="list-disc"> Promote your Digital Marketing paid webinar at 20% discount</li>
                                    <li className="list-disc">Promote your free webinar on stock trading tips</li>
                                </ul>
                            </div>
                            <div className="text-center py-3 mb-6">
                                <button className="bg-primary text-white  px-7 py-4 rounded-xl mt-7 font-semibold">Create Course Page</button>
                            </div>
                        </div>

                        <div className="border-gray-400 border-dashed  border w-1/3 rounded-2xl">
                            <div className="flex flex-col items-center h-80 m-2 bg-indigo-50 py-10 px-10 rounded-2xl">

                                <h1 className="text-2xl  font-bold  text-gray-800">Form Page</h1>
                                <p className="text-gray-700 mt-7 text-sm">Use this to generate qualified leads or get feedback from your audience. E.g.-</p>
                                <ul className="text-gray-700 text-sm mt-2">
                                    <li className="list-disc"> Increase your earnings by promoting your digital marketing for beginners course</li>
                                    <li className="list-disc">Increase sales of your stock trading course by announcing 50% off on every purchase</li>
                                </ul>
                            </div>
                            <div className="text-center py-3 mb-6">
                                <button className="bg-primary text-white  px-7 py-4 rounded-xl mt-7 font-semibold">Create Form Page</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}