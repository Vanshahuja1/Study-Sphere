import { LucidePersonStanding, LucideUsers } from "lucide-react"


export default function About({ title,description,textColor,bgColor,font}) {
// console.log(textColor,bgColor,'hasd')
    return (
        <section className={`w-full py-15 bg-white ${font}`}>
            <div className="container  mx-auto max-w-5xl px-5 justify-center items-center flex flex-col gap-4">
                <h1 className={`text-4xl ${textColor} text-blue-500 flex items-center gap-4`}> {title} <LucideUsers className="w-8 h-8"></LucideUsers></h1>
                <p className="text-2xl">{description}</p>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque esse ipsum, eaque molestias nihil qui earum vel enim quis. Recusandae dolore vel quam esse delectus ipsum repudiandae deleniti optio praesentium voluptas! Fuga sequi nulla tempora non officia maxime vitae placeat modi a dolorum? Unde officiis quisquam architecto et inventore tempora quam voluptatum! Laborum magni sed accusamus amet asperiores iure minima eligendi consectetur. Eveniet obcaecati unde aspernatur autem quo. Dignissimos odio eveniet ut similique harum est tempore ab error? Perspiciatis.</p>
            </div>

        </section>
    )
}