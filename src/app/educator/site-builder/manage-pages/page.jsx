"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { templates } from "@/lib/templateLoader";
import { Header } from "@/components/Header";
import WebsitePage from "@/components/websitePage";
export default function managePages() {
    const searchParams = useSearchParams();
    const templateId = searchParams.get("template");
    const router = useRouter();
    const template = templates[templateId]
    if (!template) return <div className="p-8">Template not found</div>;
    const pageKeys = Object.keys(template.pages || {});
    
    return (
        <>
        <main className="flex flex-col w-full bg-gray-50">
            
            <Header heading='Manage Your Website Pages' para='You can add ,remove or edit content of all pages' ></Header>
            <section className="w-full py-5">
                <div className="container max-w-5xl mx-auto">
                    <h1>Pages in :{template.name}</h1>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 my-7">
                        {pageKeys.map((item) => {
                            return <WebsitePage key={item} item={item} templateId={templateId}/>
                            // <div className="border rounded-2xl justify-center items-center h-30 flex flex-col cursor-pointer " key={item} onClick={() => { router.push(`/educator/site-builder/preview?template=${templateId}&page=${item}`) }}>
                            //     <h2 className="text-lg font-semibold capitalize">{item}</h2>
                            //     <p className="text-gray-500 mt-2">Preview the {item} page</p>
                            // </div>
                        })}
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}