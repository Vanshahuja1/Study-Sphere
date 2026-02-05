"use client"
import WebsitePage from "@/components/websitePage"
import { LucidePlus } from "lucide-react"
import { templates } from '@/lib/templateLoader'
import { use, useState } from "react"
import { motion } from 'framer-motion'
import TemplateRenderer from '@/components/templateRenderer'
import { templatesMeta } from '@/lib/templateLoader'
import { Header } from "@/components/Header"
import { useRouter } from "next/navigation"
export default function EducatorSiteBuilder({params}) {
   
    const {org} = use(params)
    const router = useRouter()
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
    return <>
        <main className="flex flex-col w-full bg-background">

            {/* <h1>Educator / Site Builder</h1>; */}
            <Header heading='Start Creating your Website' para='You can choose the template for all pages' ></Header>
            {/* website section */}
            <motion.section variants={itemVariants} initial="hidden" animate="visible" className="w-full py-5">
                <div className="container max-w-5xl mx-auto">

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {templatesMeta.map(item => (
                            <div key={item.id} onClick={() => router.push(`/educator/${org}/site-builder/manage-pages/${item.id}`)}
                                className="cursor-pointer bg-white rounded-lg  shadow-lg transition-shadow hover:shadow-2xl overflow-hidden">
                                <div className="h-45 border-gray-300 bg-white flex items-center justify-center">
                                    {item.preview ? <img src={item.preview} className="h-full w-full object-cover " alt={item.name} /> : <span>Image illustration</span>}
                                </div>
                                <div className="p-3">
                                    <h2 className="font-semibold">{item.name}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </main>

    </>
}