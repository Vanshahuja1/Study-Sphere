'use client'
import { ArrowRightFromLine, Book, Globe, Landmark,LayoutDashboard, Pen, UserCircle2Icon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export const EducatorSideBar = () => {
    const pathname = usePathname()
    
    return (
        <>
            <div className="sticky left-0 z-10 top-0 shadow-2xl bg-white h-screen w-80 overflow-y-auto overflow-x-visible  ">
                <div className="container w-full h-full py-3 px-7">
                    {/* <h1 className="text-3xl text-primary font-bold my-5">StudySphere</h1> */}
                    <Image src={'/logo.png'} width={175} height={100} alt='logo'></Image>
                    {/* overview */}

                    <div className="flex flex-col my-5 gap-6 text-gray-700 ">
                        <h3 className="text-xl font-bold text-primary">Overview</h3>
                        <Link href={'/educator/'}><li className={`flex gap-2 hover:text-primary ${pathname==='/dashboard'?'text-primary font-bold':''}`}><Landmark className='self-center' /> Dashboard</li></Link>
                        <Link href={'/educator/site-builder'}> <li className={`flex gap-2 hover:text-primary ${pathname==='/website'?'text-primary font-bold':''}`}><Globe className='self-center' /> Website</li></Link>
                        <Link href={'/educator/courses'}><li className={` flex gap-2 hover:text-primary ${pathname==='/courses'?'text-primary font-bold':''}`}> <Book className='self-center' />Course</li></Link>
                        {/* <div className="absolute shadow-2xl before:h-[20] before:absolute before:top-3 before:right-38 before:transform before:z-20 before:bg-amber-200 before:rotate-45 before:w-[15px] before:content-['']  top-70 z-9999 w-40 left-30 py-8 px-5  bg-amber-200">
                            <p>My Courses</p>
                            <p>Global Courses</p>
                            </div> */}
                        <Link href={'/content'}> <li className={`flex gap-2 hover:text-primary ${pathname==='/content'?'text-primary font-bold':''}`}> <Pen className='self-center' /> Content</li></Link>
                        <Link href={'/apps'}><li className={`flex gap-2 hover:text-primary ${pathname==='/apps'?'text-primary font-bold':''}`}><Globe className='self-center' />Apps</li></Link>
                        <li className='flex gap-2 hover:text-primary'><Landmark className='self-center' />Landing Page</li>
                        <li className='flex gap-2 hover:text-primary'><Landmark className='self-center' />1:1 sessions</li>
                        <li className='flex gap-2 hover:text-primary'><Landmark className='self-center' />Chat</li>
                        <li className='flex gap-2 hover:text-primary'><Landmark className='self-center' />Analytics</li>
                        <li className='flex gap-2 hover:text-primary'><Landmark className='self-center' />Integration</li>
                        <li className='flex gap-2 hover:text-primary'><Landmark className='self-center' />Campaigns</li>
                        <li className='flex gap-2 hover:text-primary'><Landmark className='self-center' />People</li>
                    </div>


                    {/* settings */}

                    <div className="flex flex-col gap-6 ">
                        <h3 className="text-xl font-bold  hover:text-primary">Settings</h3>
                        <li className='flex gap-2 text-gray-700 hover:text-primary'><UserCircle2Icon className='self-center' /> Profile</li>

                        <li className="text-red-600 flex  gap-2"><ArrowRightFromLine  className='self-center' /> Log out</li>
                    </div>
                </div>
            </div>
        </>
    )
}
