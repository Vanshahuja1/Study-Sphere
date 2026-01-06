import { Header } from "@/components/Header"
export default function CreateCampaigns() {
    return <>
        <main className='w-full bg-gray-50'>
            <Header heading='Create Your Marketing Campaign' para='You can create Marketing Campaign for different usecases' ></Header>
            <section className="py-5 bg-white">
                <div className="container max-w-5xl mx-auto">
                    <div className="flex gap-7 my-10">

                        <div className="border-gray-400 border-dashed  border w-1/3 rounded-2xl">
                            <div className="flex flex-col items-center h-80 m-2 bg-gray-100 py-10 px-10 rounded-2xl">

                                <h1 className="text-2xl  font-bold  text-gray-900">User Action Based Campaign</h1>
                                <p className="text-gray-700 mt-7 text-sm">Automate your communication with User Action Based Campaigns where you can retarget your users by sending personalized communication based on different user action.
                                    E.g.-</p>
                                <ul className="text-gray-700 mt-2 text-sm">
                                    <li className="list-disc"> User drops from payment page</li>
                                    <li className="list-disc mt-1">User drops from course overview.</li>
                                </ul>
                            </div>
                            <div className="text-center py-3 mb-6">
                                <button className="bg-primary text-white  px-7 py-4 rounded-xl font-semibold mt-7">Create User Action Based Campaign</button>
                            </div>
                        </div>

                        <div className="border-gray-400 border-dashed  border w-1/3 rounded-2xl">
                            <div className="flex flex-col items-center h-80 m-2 bg-gray-100 py-10 px-10 rounded-2xl">
                                <h1 className="text-2xl  font-bold  text-gray-900">One-Time Campaign</h1>
                                <p className="text-gray-700 mt-7 text-sm">Broadcast your communication with One Time Campaigns where you can create engaging and personalized campaigns based on a targeted group of audience. E.g.-</p>
                                <ul className="text-gray-700 mt-2 text-sm">
                                    <li className="list-disc"> Promote your new course to all app users</li>
                                    <li className="list-disc">Promote an online workshop for users who buy your coursetips</li>
                                </ul>
                            </div>
                            <div className="text-center py-3 mb-6">
                                <button className="bg-primary text-white  px-7 py-4 rounded-xl mt-7 font-semibold">Create One-Time Campaign</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    </>
}