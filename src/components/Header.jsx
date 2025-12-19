import { LucideSquareArrowRight } from "lucide-react"

export const Header = (props) => {
    return(
        <>
        <header className="bg-[url('/headerBg-crop.png')]  bg-cover bg-no-repeat  h-30 py-3  bg-center bg-primary">
            <div className="container max-w-5xl mx-auto">
                <h1 className="text-white text-4xl my-1">{props.heading}</h1>
                <p className="text-white text-2xl flex gap-2 mt-4"><span>{props.para}</span> <LucideSquareArrowRight className="self-center"/></p>
            </div>
        </header>
        </>
    )
}