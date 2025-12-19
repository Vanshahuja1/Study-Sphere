import { LucideBook } from "lucide-react"
export default function Courses({ items=[],textColor,font}) {

    return (
        <section className={`w-full py-15 bg-gray-100 ${font}`}>
            <div className="container font-bold mx-auto max-w-5xl px-5 items-center flex flex-col text-white">
                <h1 className={`text-3xl flex items-center gap-4 ${textColor} text-blue-500`}>Our Courses <LucideBook className="w-10 h-8 "></LucideBook></h1>
                <div className="flex gap-5 my-5">

                {items.map((item,i)=>{
                    return <div className="grid gap-2 border  py-5   border-white text-black shadow-2xl bg-white rounded-2xl p-5" key={i}>
                        
                        <h1 className="flex items-center gap-3">{item.name }</h1>
                        <h1>{item.price}</h1>
                    </div>
                })}
            </div>
                </div>

        </section>
    )
}