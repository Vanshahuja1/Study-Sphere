import Image from "next/image"
export default function Header2({ logo,title,menu=[],cta,bgColor,font}) {
    return (
        <header className={`w-full ${bgColor} ${font} bg-gray-500 py-8 text-white`}>
            <div className="container max-w-5xl px-5 mx-auto">
                <div className="flex items-center justify-between">
                    {/* logo */}
                    <div className="">
                        <Image src={logo} alt={title|| "logo"} height={100} width={100} ></Image>                    
                         </div>
                    {/* navbar */}
                    <div className="flex gap-4 items-center">
                        {menu.map((item,i)=>{
                            return <a key={i} href={item.link} >{item.label} </a>
                        })}
                       <button className="border-white rounded-2xl border px-5 py-2">
                       {cta}
                        </button> 
                    </div>
                </div>

            </div>

        </header>
    )
}