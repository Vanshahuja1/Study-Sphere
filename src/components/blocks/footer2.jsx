import Image from "next/image"
export default function Footer2({ logo,title,menu=[],cta,bgColor,font}) {
    return (
        <header className={`w-full ${bgColor} ${font} bg-gray-500 font-bold text-white py-5 px-5`}>
            <div className="container max-w-5xl mx-auto px-5">
                <div className="flex justify-between">
                    {/* logo */}
                    <div className="flex justify-center items-center">
                        <Image src={logo} alt="Logo" height={200} width={200} />
                    </div>
                    {/* navbar */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl">Quick Links</h3>
                        {menu.map((item,i)=>{
                            return <a key={i} href={item.link} >{item.label} </a>
                        })}
                        {cta}
                    </div>
                     {/* navbar */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl">Quick Links</h3>
                        {menu.map((item,i)=>{
                            return <a key={i} href={item.link} >{item.label} </a>
                        })}
                        {cta}
                    </div>
                     {/* navbar */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl">Quick Links</h3>
                        {menu.map((item,i)=>{
                            return <a key={i} href={item.link} >{item.label} </a>
                        })}
                        {cta}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl">Quick Links</h3>
                        {menu.map((item,i)=>{
                            return <a key={i} href={item.link} >{item.label} </a>
                        })}
                        {cta}
                    </div>
                </div>

            </div>

        </header>
    )
}