"use client"
import { LucideSquareArrowRight, Bell, Search } from "lucide-react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "./ui/input"
import { useState } from "react"
import avatarImg from '../../public/avatar.jpg'
export const Header = (props) => {
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
  const [input,setInput] = useState('')
  return (
    <>
      <motion.header variants={containerVariants} initial="hidden" animate="visible" className="sticky z-10 top-0 bg-cover bg-no-repeat  py-2  bg-center  bg-white shadow">
        <div className="absolute inset-0 opacity-80 bg-white" />
        <div className="container max-w-5xl mx-auto relative flex justify-between">
          <div className="w-1/2">
            <h1 className="text-primary font-bold m-0 p-0  text-[26px]">{props.heading}</h1>
            <p className="text-gray-600 semibold m-0 p-0 flex gap-1 items-end"><span>{props.para}</span> <LucideSquareArrowRight className="h-5" /></p>
          </div>
          <div className="w-1/2 flex items-center gap-4 justify-end">
            <div className="searchbar relative  flex w-3/5 items-center  rounded-2xl   ">
              <Input type="text" placeholder='Explore' className='bg-gray-50 rounded-2xl px-2 outline-none w-full  h-8' value={input} onChange={(e) => setInput(e.target.value)} />
              <Search className=' absolute h-4 right-4 text-gray-600'></Search>
            </div>
            <Bell className="h-5"></Bell>
            <Avatar className="">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </motion.header>
    </>
  )
}