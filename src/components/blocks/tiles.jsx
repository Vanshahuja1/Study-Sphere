
// import { PlayCircleIcon } from "lucide-react"
export default function Tiles({tiles,heading,subheading,textColor,}){
    
    return(
        <>
        <section className="py-5 bg-white ">
            <div className="container max-w-5xl mx-auto px-5">
                <h1 className={`text-4xl font-bold text-center ${textColor} text-blue-500`}>{heading}</h1>
                <h1 className="text-center">{subheading}</h1>
                <div className="flex items-center justify-around gap-3">
                    {tiles.map((tile,i)=>{
                        const Play = tile.PlayCircleIcon
                        const Icon = tile.Icon
                        return <div className={`${tile.bg} rounded-2xl my-5 w-1/4  px-5 `}key={i}>
                            <h4 className="text-white text-3xl w-2/3 font-bold my-2">{tile.title}</h4>
                            <div className="flex mt-5 mb-2 text-white justify-between items-center">
                                <Play size={40}></Play>
                                <div className="bg-white p-4 rounded-xl">
                                <Icon size={30} className={`${tile.text}`}></Icon>
                                </div>
                                 </div>
                            </div>
                    })}
                </div>
            </div>
        </section>
        </>
    )
}