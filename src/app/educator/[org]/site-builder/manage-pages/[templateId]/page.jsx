"use client"
import { useRouter } from "next/navigation";
import { templates } from "@/lib/templateLoader";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import WebsitePage from "@/components/websitePage";
import { use } from "react";
export default function managePages({ params }) {
    const { templateId,org } = use(params)
    console.log(templateId)
    const router = useRouter();
    const template = templates[templateId]
    if (!template) return <div className="p-8">Template not found</div>;
    const pageKeys = Object.keys(template.pages || {});
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
    return (
        <>
            <main className="flex flex-col w-full bg-background">

                <Header heading='Manage Your Website Pages' para='You can add ,remove or edit content of all pages' ></Header>
                <motion.section variants={itemVariants} initial="hidden" animate="visible" className="w-full  py-5">
                    <div className="container max-w-5xl mx-auto">
                        <h1 className="font-semibold text-lg">Pages in : {template.name}</h1>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-7">
                            {pageKeys.map((item) => {
                                return <WebsitePage key={item} item={item} org={org} templateId={templateId} />
                            })}
                        </div>
                    </div>
                </motion.section>
            </main>
        </>
    )
}