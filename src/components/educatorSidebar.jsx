'use client'

import {
  ArrowRightFromLine,
  Book,
  Globe,
  Landmark,
  LayoutDashboard,
  Pen,
  TabletSmartphone,
  User,
  MessageCircleMore,
  FileArchive,
  LucideWebhook,
  SpeechIcon,
  Users,
  LucideChartColumn,
  GraduationCap
} from 'lucide-react'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname, useParams } from 'next/navigation'
import { Separator } from '@radix-ui/react-separator'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export const EducatorSideBar = () => {
  const pathname = usePathname()
  const { org } = useParams()

  // 🔑 helper to build org-aware routes
  const edu = (path = "") => `/educator/${org}${path}`

  const isCoursesBranch = pathname.startsWith(edu("/courses"))
  const isPeopleBranch = pathname.startsWith(edu("/people"))
  const isWebsiteBranch = pathname.startsWith(edu("/site-builder"))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const ListItem = ({ pathName, heading, icon }) => (
    <Link href={pathName}>
      <li
        className={`flex gap-2 w-45 rounded-2xl py-3 px-3 hover:text-primary hover:bg-background
        ${pathname === pathName ? 'text-primary font-semibold bg-secondary' : ''}`}
      >
        {icon}
        {heading}
      </li>
    </Link>
  )

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 left-0 z-10 h-screen w-70 bg-white shadow-md overflow-y-auto scrollbar-none"
    >
      <div className="px-5 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <span className="text-xl font-bold">StudySphere</span>
        </div>

        {/* OVERVIEW */}
        <h3 className="text-xl font-bold text-primary mb-2 px-2">Overview</h3>

        <ListItem pathName={edu()} heading="Dashboard" icon={<LayoutDashboard />} />

        {/* Website */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <li className={`inline-flex gap-2 w-45 p-3 rounded-2xl cursor-pointer hover:bg-background
              ${isWebsiteBranch ? 'text-primary font-semibold bg-secondary' : ''}`}>
              <Globe /> Website
            </li>
          </HoverCardTrigger>
          <HoverCardContent side="right" align="start" className="w-56 p-2">
            <Link href={edu("/site-builder")}>
              <p className={`p-2 rounded-lg ${pathname === edu("/site-builder") && 'bg-secondary text-primary font-semibold'}`}>
                Website Creation
              </p>
            </Link>
            <Separator className="my-1" />
            <Link href={edu("/site-builder/domain-integration")}>
              <p className={`p-2 rounded-lg ${pathname === edu("/site-builder/domain-integration") && 'bg-secondary text-primary font-semibold'}`}>
                Domain Integration
              </p>
            </Link>
          </HoverCardContent>
        </HoverCard>

        {/* Courses */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <li className={`inline-flex gap-2 w-45 p-3 rounded-2xl cursor-pointer hover:bg-background
              ${isCoursesBranch ? 'text-primary font-semibold bg-secondary' : ''}`}>
              <Book /> Courses
            </li>
          </HoverCardTrigger>
          <HoverCardContent side="right" align="start" className="w-56 p-2">
            <Link href={edu("/courses/global-courses")}>
              <p className={`p-2 rounded-lg ${pathname === edu("/courses/global-courses") && 'bg-secondary text-primary font-semibold'}`}>
                Global Courses
              </p>
            </Link>
            <Separator className="my-1" />
            <Link href={edu("/courses")}>
              <p className={`p-2 rounded-lg ${pathname === edu("/courses") && 'bg-secondary text-primary font-semibold'}`}>
                My Courses
              </p>
            </Link>
          </HoverCardContent>
        </HoverCard>

        {/* Single links */}
        <ListItem pathName={edu("/content")} heading="Content" icon={<Pen />} />
        <ListItem pathName={edu("/app")} heading="Your App" icon={<TabletSmartphone />} />
        <ListItem pathName={edu("/1on1")} heading="1:1 Sessions" icon={<User />} />
        <ListItem pathName={edu("/chat")} heading="Chat" icon={<MessageCircleMore />} />
        <ListItem pathName={edu("/free-material")} heading="Free Material" icon={<FileArchive />} />
        <ListItem pathName={edu("/analytics")} heading="Analytics" icon={<LucideChartColumn />} />
        <ListItem pathName={edu("/integration")} heading="Integration" icon={<LucideWebhook />} />
        <ListItem pathName={edu("/campaigns")} heading="Campaigns" icon={<SpeechIcon />} />

        {/* People */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <li className={`inline-flex gap-2 w-45 p-3 rounded-2xl cursor-pointer hover:bg-background
              ${isPeopleBranch ? 'text-primary font-semibold bg-secondary' : ''}`}>
              <Users /> People
            </li>
          </HoverCardTrigger>
          <HoverCardContent side="right" align="start" className="w-56 p-2">
            <Link href={edu("/people/users")}>
              <p className={`p-2 rounded-lg ${pathname === edu("/people/users") && 'bg-secondary text-primary font-semibold'}`}>
                Users
              </p>
            </Link>
            <Separator className="my-1" />
            <Link href={edu("/people/team-members")}>
              <p className={`p-2 rounded-lg ${pathname === edu("/people/team-members") && 'bg-secondary text-primary font-semibold'}`}>
                Team Members
              </p>
            </Link>
          </HoverCardContent>
        </HoverCard>

        {/* SETTINGS */}
        <h3 className="text-xl font-bold mt-8 mb-2 px-2">Settings</h3>
        <ListItem pathName={edu("/profile")} heading="Profile" icon={<User />} />

        <li className="flex gap-2 mt-4 text-red-600 cursor-pointer">
          <ArrowRightFromLine /> Log out
        </li>

      </div>
    </motion.div>
  )
}
