import Image from "next/image"
import { useRouter } from "next/navigation"
 const WebsitePage = ({item,templateId}) => {
const router = useRouter()
    return(
        <>
        <div className="flex flex-col w-full items-center gap-3 cursor-pointer shadow-2xl hover:transition-transform hover:scale-110 ease-in-out duration-300 bg-white rounded-xl" onClick={() => { router.push(`/educator/site-builder/preview?template=${templateId}&page=${item}`) }}>
            <Image src={'/webpage.jpg'} alt="'webpage" width={300} className="rounded-t-xl" height={300}></Image>
            <h3 className="text-center mb-2  font-bold">{item}</h3>
            
        </div>
        </>
    )
}
export default WebsitePage