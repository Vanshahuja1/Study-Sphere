"use client"
import WebsitePage from "@/components/websitePage"
import { LucidePlus } from "lucide-react"
import { templates } from '@/lib/templateLoader'
import { useState } from "react"
import TemplateRenderer from '@/components/templateRenderer'
import { templatesMeta } from '@/lib/templateLoader'
import { Header } from "@/components/Header"
import { useRouter } from "next/navigation"
export default function EducatorSiteBuilder({ searchParams }) {
    // const TemplateList = [
    //     Template1,Template2
    // ]
    const router = useRouter()

    return <>
        <main className="flex flex-col w-full bg-gray-300">

            {/* <h1>Educator / Site Builder</h1>; */}
            <Header heading='Start Creating your Website' para='You can choose the template for all pages' ></Header>
            {/* website section */}
            <section className="w-full bg-gray-300 py-5">
                <div className="container max-w-5xl mx-auto">
                    {/* <div className="flex gap-2">
                        {webPages.map((item, index) => {
                            return <WebsitePage key={index} name={item}></WebsitePage>
                        })}
                        <div className="border-purple-700 rounded-xl border flex items-center justify-center w-1/5">
                            <h3 className="text-center text-white bg-purple-700 px-5 py-1 rounded font-bold flex gap-1">Add New Page <LucidePlus /></h3>
                        </div>

                    </div> */}

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {templatesMeta.map(item => (
                            <div key={item.id} onClick={() => router.push(`/educator/site-builder/manage-pages?template=${item.id}`)}
                                className="cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden">
                                <div className="h-40 bg-gray-200 flex items-center justify-center">
                                    {item.preview ? <img src={item.preview} className="h-full w-full object-cover" alt={item.name} /> : <span>Preview</span>}
                                </div>
                                <div className="p-4">
                                    <h2 className="font-semibold">{item.name}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>

    </>
}