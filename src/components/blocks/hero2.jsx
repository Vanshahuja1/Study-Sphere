import Image from "next/image"
export default function Hero2({ title, subtitle, image, button,font }) {
    // console.log(image)
    const imageUrl = typeof image === "string" ? image : image?.src;
    return (
        <section className={`w-full ${font}  py-5 bg-cover bg-no-repeat h-100 bg-center flex gap-5 flex-col justify-center items-center text-bold text-white`} style={{ backgroundImage: `url(${imageUrl})` }}>
            {/* hero-text */}
            <h1 className="text-4xl">{title}</h1>
            <p className="text-3xl">{subtitle}</p>
            <div className="border border-white py-2 px-5 rounded-2xl">{button}</div>
        </section>
    )
}