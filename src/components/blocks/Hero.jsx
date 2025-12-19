import Image from "next/image"
export default function Hero({ title, subtitle, image ,cta,font}) {
    // console.log(image)
    return (
        <section className={`w-full ${font} h-85`}>
            <div className="container mx-auto bg-white">
                <div className="flex">
                    {/* hero-img */}
                    <div className="w-1/2 max-width:768px">
                      <Image src={image}  height={600} width={600} alt={'banner'} className=""/>
                      
                    </div>
                    <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
                        {/* hero-text */}
                        <h1 className="text-2xl">{title}</h1>
                        <p className="text-xl">{subtitle}</p>
                        <p className="text-justify px-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate eligendi molestiae iure. Fugiat neque perspiciatis nostrum voluptatum doloremque quis aliquid sapiente sint sequi explicabo, atque alias dolor consequuntur? Ut.</p>
                    </div>
                    <div>{cta}</div>
                </div>

            </div>

        </section>
    )
}