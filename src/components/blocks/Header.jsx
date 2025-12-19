import Image from "next/image"
export default function Header({ logo, title, menu = [], cta, textColor, bgColor, font }) {
    return (
        <header className={`w-full ${bgColor} bg-blue-500 text-white py-5 px-5 ${font}`}>
            <div className="container max-w-5xl mx-auto">
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <div className="">
                        <Image src={logo} alt="Logo" height={100} width={100} />
                    </div>
                    <div className="">{title}</div>
                    {/* navbar */}
                    <div className="flex gap-4 items-center">
                        {menu.map((item, i) => {
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