"use client"
import { LucideSquareArrowRight } from "lucide-react"
import { motion } from "framer-motion"
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
    return(
        <>
        <motion.header variants={containerVariants} initial="hidden" animate="visible" className="bg-[url('/headerBg-crop.png')]  relative bg-cover bg-no-repeat  h-30 py-3  bg-center bg-gradient-to-r from-indigo-600 to-purple-600">
              <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-indigo-600/80 to-purple-600/80" />
            <div className="container max-w-5xl mx-auto relative">
                <h1 className="text-white text-4xl my-1">{props.heading}</h1>
                <p className="text-white text-2xl flex gap-2 mt-4 items-end"><span>{props.para}</span> <LucideSquareArrowRight className="" /></p>
            </div>
        </motion.header>
        </>
    )
}