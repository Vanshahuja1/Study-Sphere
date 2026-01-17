'use client'
import { ArrowRightFromLine, Book, Globe, Landmark, LayoutDashboard, Pen, UserCircle2Icon, TabletSmartphone, User, MessageCircleMore, FileArchive, LucideWebhook, SpeechIcon, Users, LucideChartColumn } from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { is } from 'date-fns/locale';
export const EducatorSideBar = () => {
    const pathname = usePathname()
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
    const ListItem = ({ pathName, heading, icon }) => {
        return <Link href={pathName}><li className={`flex gap-2 hover:text-primary hover:bg-indigo-100 rounded-2xl py-3 px-3  ${pathname === pathName ? 'text-primary font-semibold bg-gradient-to-r from-purple-200 to-indigo-200' : ''}`}>{icon}{heading}</li></Link>
    }
    const isCoursesBranch = pathname.startsWith("/educator/courses")
    const isPeopleBranch = pathname.startsWith("/educator/people")
    const isWebsiteBranch = pathname.startsWith("/educator/site-builder")
    return (
        <>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="sticky left-0 z-10 top-0 shadow-2xl bg-white h-screen w-75 overflow-y-auto overflow-x-visible scrollbar-none ">
                <div className="container w-full h-full py-3 px-5 scrollb">
                    {/* <h1 className="text-3xl text-primary font-bold my-5">StudySphere</h1> */}
                    <Image src={'/logo.png'} width={175} height={100} alt='logo'></Image>
                    {/* overview */}

                    <div className="flex flex-col my-5 gap-1 text-gray-700 ">
                        <h3 className="text-xl font-bold text-primary mb-2 px-2">Overview</h3>
                        <ListItem pathName={'/educator'} heading='Dashboard' icon={<LayoutDashboard />}></ListItem>
                        <HoverCard>
                        <HoverCardTrigger>
                       <li className={`inline-flex gap-2 w-45 rounded-2xl p-3 hover:text-primary hover:bg-indigo-100 cursor-pointer ${isWebsiteBranch ? 'text-primary font-semibold bg-gradient-to-r from-purple-200 to-indigo-200' : ''}`}> <Globe/>Website</li>
                        </HoverCardTrigger>
                         <HoverCardContent side="right"
                                align="start"
                                className="z-50 w-50 p-2">
                                <Link href={'/educator/site-builder'} className=''>
                                    <p className={`hover:bg-indigo-100 p-2 rounded-lg ${pathname === '/educator/courses/global-courses' ? 'text-primary font-semibold bg-linear-to-r from-purple-200 to-indigo-200' : ''}`} >Website Creation</p>
                                </Link>
                                <Separator className='my-1 bg-gray-200 h-px '></Separator>
                                <Link href={'/educator/site-builder/domain-integration'}>
                                    <p className={`hover:bg-indigo-100 p-2 rounded-lg ${pathname === "/educator/courses" ? 'text-primary font-semibold bg-linear-to-r from-purple-200 to-indigo-200' : ''}`}>Domain Integration</p>
                                </Link>
                                <div className="absolute bg-white border-s border-b top-2 -left-2 h-4 w-4 rotate-45" />
                            </HoverCardContent>
                        </HoverCard>
                        {/* <Link href={'/educator/'}><li className={`flex gap-2 hover:text-primary ${pathname === '/educator' ? 'text-primary font-bold' : ''}`}><LayoutDashboard className='self-center' /> Dashboard</li></Link> */}

                        {/* <Link href={'/educator/site-builder'}> <li className={`flex gap-2 hover:text-primary ${pathname === '/educator/site-builder' ? 'text-primary font-bold' : ''}`}><Globe className='self-center' /> Website</li></Link> */}

                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <li className={`inline-flex gap-2 w-45 rounded-2xl p-3 hover:text-primary hover:bg-indigo-100 cursor-pointer ${isCoursesBranch ? 'text-primary font-semibold bg-gradient-to-r from-purple-200 to-indigo-200' : ''}`}> <Book className='self-center' />Courses</li>
                            </HoverCardTrigger>
                            <HoverCardContent side="right"
                                align="start"
                                className="z-50 w-50 p-2">
                                <Link href={'/educator/courses/global-courses'} className=''>
                                    <p className={`hover:bg-indigo-100 p-2 rounded-lg ${pathname === '/educator/courses/global-courses' ? 'text-primary font-semibold bg-linear-to-r from-purple-200 to-indigo-200' : ''}`} >Global Courses</p>
                                </Link>
                                <Separator className='my-1 bg-gray-200 h-px '></Separator>
                                <Link href={'/educator/courses'}>
                                    <p className={`hover:bg-indigo-100 p-2 rounded-lg ${pathname === "/educator/courses" ? 'text-primary font-semibold bg-linear-to-r from-purple-200 to-indigo-200' : ''}`}>My Courses</p>
                                </Link>
                                <div className="absolute bg-white border-s border-b top-2 -left-2 h-4 w-4 rotate-45" />
                            </HoverCardContent>
                        </HoverCard>

                        <ListItem pathName={'/educator/content'} heading='Content' icon={<Pen />}></ListItem>

                        <ListItem pathName={'/educator/app'} heading='Your App' icon={<TabletSmartphone />}></ListItem>
                        <ListItem pathName={'/educator/1on1'} heading='1:1 Sessions' icon={<User />}></ListItem>
                        <ListItem pathName={'/educator/landing-page'} heading='Landing Page' icon={<Landmark />}></ListItem>
                        <ListItem pathName={'/educator/chat'} heading='Chat' icon={<MessageCircleMore />}></ListItem>
                        <ListItem pathName={'/educator/free-material'} heading='Free Material' icon={<FileArchive />}></ListItem>
                        <ListItem pathName={'/educator/analytics'} heading='Analytics' icon={<LucideChartColumn />}></ListItem>
                        <ListItem pathName={'/educator/integration'} heading='Integration' icon={<LucideWebhook />}></ListItem>
                        <ListItem pathName={'/educator/campaigns'} heading='Campaigns' icon={<SpeechIcon />}></ListItem>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <li className={`inline-flex gap-2 w-45 p-3 hover:text-primary hover:bg-indigo-100 cursor-pointer rounded-2xl ${isPeopleBranch ? 'text-primary font-semibold bg-gradient-to-r from-purple-200 to-indigo-200' : ''}`}><Users className='self-center' />People</li>
                            </HoverCardTrigger>
                            <HoverCardContent side="right"
                                align="start"
                                className="z-50 w-50 p-2">
                                <Link href={'/educator/people/users'}>
                                    <p className={`hover:bg-indigo-100 p-2 rounded-lg ${pathname === '/educator/people/users' ? 'text-primary font-semibold bg-linear-to-r from-purple-200 to-indigo-200' : ''}`}>Users</p>
                                </Link>
                                <Separator className='my-2 bg-gray-200 h-px '></Separator>
                                <Link href={'/educator/people/team-members'} className='hover:bg-indigo-200'>
                                    <p className={`hover:bg-indigo-100 p-2 rounded-lg ${pathname === '/educator/people/team-members' ? 'text-primary font-semibold bg-linear-to-r from-purple-200 to-indigo-200' : ''}`}>Team Members</p>
                                </Link>
                                <div className="absolute bg-white border-s border-b top-2 -left-2 h-4 w-4 rotate-45" />
                            </HoverCardContent>
                        </HoverCard>

                        {/* <Link href={'/educator/content'}> <li className={`flex gap-2 hover:text-primary ${pathname === '/educator/content' ? 'text-primary font-bold' : ''}`}> <Pen className='self-center' /> Content</li></Link> */}


                        {/* <Link href={'educator/app'}><li className={`flex gap-2 hover:text-primary ${pathname === '/apps' ? 'text-primary font-bold' : ''}`}><TabletSmartphone className='self-center' />Your App</li></Link> */}


                        {/* <Link href={'/educator/landing-page'}>
                            <li className={`flex gap-2 hover:text-primary ${pathname === '/educator/landing-page' ? 'text-primary font-bold' : ''}`}><Landmark className='self-center' />Landing Page</li>
                        </Link> */}

                        {/* <li className='flex gap-2 hover:text-primary'><User className='self-center' />1:1 sessions</li> */}



                        {/* 
                        <li className='flex gap-2 hover:text-primary'><MessageCircleMore 
                        className='self-center' />Chat</li> */}


                        {/* <Link href={'/educator/free-material'}>
                            <li className={`flex gap-2 hover:text-primary ${pathname === '/educator/free-material' ? 'text-primary font-bold' : ''}`}><FileArchive className='self-center' />Free material</li>
                        </Link> */}


                        {/* <li className='flex gap-2 hover:text-primary'><LucideChartColumn className='self-center' />Analytics</li> */}



                        {/* <Link href={'/educator/integration'}>
                            <li className={`flex gap-2 hover:text-primary ${pathname === '/educator/integration' ? 'text-primary font-bold' : ''}`}><LucideWebhook className='self-center' />Integration</li>
                        </Link> */}


                        {/* <Link href={'/educator/campaigns'}>
                            <li className={`flex gap-2 hover:text-primary ${pathname === '/educator/campaigns' ? 'text-primary font-bold' : ''}`}><SpeechIcon className='self-center' />Campaigns</li>
                        </Link> */}

                    </div>


                    {/* settings */}

                    <div className="flex flex-col gap-6 ">
                        <h3 className="text-xl font-bold  hover:text-primary">Settings</h3>
                        <li className='flex gap-2 text-gray-700 hover:text-primary'><UserCircle2Icon className='self-center' /> Profile</li>

                        <li className="text-red-600 flex  gap-2"><ArrowRightFromLine className='self-center' /> Log out</li>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
