import { LucideEye, Settings, Edit } from "lucide-react"
import { motion } from "framer-motion" 
import Image from "next/image"
import { useRouter } from "next/navigation"
const WebsitePage = ({ item, templateId }) => {
    const router = useRouter()
    console.log(templateId)
    return (
        <>
            <div className=" group relative flex flex-col w-full items-center gap-3 cursor-pointer shadow-xl hover:transition-transform hover:shadow-2xl hover:scale-107 ease-in-out duration-300 bg-white rounded-xl" onClick={() =>   router.push(`/educator/site-builder/preview/${templateId}/${item}`)}>
                <div className="relative w-full">
                    <Image src={'/webpage.jpg'} alt="'webpage" width={350} className="relative rounded-t-xl" height={350}></Image>
                    
                    <div className="bg-primary/0 group-hover:bg-primary/75 transition-colors duration-300 inset-0 rounded-t-xl absolute"></div>

                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button whileHover={{x:5}} className="hover:text-primary bg-white text-sm text-slate-900 flex items-center rounded font-semibold  py-2 w-25 justify-center"><LucideEye className="h-4"></LucideEye> Hide</motion.button>
                        <motion.button whileHover={{x:5}} className="hover:text-primary text-sm bg-white text-slate-900 flex items-center rounded font-semibold  py-2 w-25 justify-center"> <Settings className="h-4"></Settings>Page Info</motion.button>
                        <motion.button whileHover={{x:5}}  className="hover:text-primary bg-white text-slate-900 rounded flex items-center font-semibold py-2 text-sm w-25 justify-center"><Edit className="h-4" ></Edit>Edit</motion.button>
                    </div>
                </div>
                <h3 className="text-center mb-2 p-1 text-lg font-semibold">{item}</h3>

            </div>
        </>
    )
}
export default WebsitePage