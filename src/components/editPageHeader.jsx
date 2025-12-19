"use client"
import { LucidePlus, Undo, Redo, Palette, Type, ChevronDown} from "lucide-react"
import { useRouter } from "next/navigation"
import { templates } from "@/lib/templateLoader"
import { useState } from "react"
export const EditPageHeader = (
    { undo,
        redo,
        future,
        history,
        pages,
        fonts,
        selectedFont,
        setSelectedFont,
        pageId,
        templateId,
        updateFont,
        updateColor,
        setSelectedColor,
        templateColors,
        setShowAddPanel }) => {
    const [selectedPage, setSelectedPage] = useState(pageId)
    const [showPageDropdown, setShowPageDropdown] = useState(false);
    const [showFontDropdown, setShowFontDropdown] = useState(false);
    const [showColorDropdown, setShowColorDropdown] = useState(false);


    const router = useRouter()
    return (
        <>
            <header className="w-full py-5 bg-white sticky z-50 top-0 text-primary">
                <div className="container max-w-5xl mx-auto">
                    <div className="flex  items-center gap-6">
                        {/* page selector */}
                        <div className="relative">
                            <div
                                className=" flex  items-center gap-1 border rounded-lg px-4 py-3 cursor-pointer hover:bg-primary hover:text-white font-semibold hover:font-bold "
                                onClick={() => setShowPageDropdown(prev => !prev)}
                            >
                                {selectedPage}
                                <ChevronDown className="h-5"></ChevronDown>
                            </div>

                            {showPageDropdown && (
                                <div className="absolute mt-1 w-full border border-gray-200 bg-white rounded shadow z-50">
                                    {pages.map((item, i) => (
                                        <div
                                            key={i}
                                            className="p-2 hover:bg-primary hover:text-white cursor-pointer"
                                            onClick={() => {
                                                setSelectedPage(item);
                                                router.push(`preview?template=${templateId}&page=${item}`);
                                                setShowPageDropdown(false);
                                            }}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-5">
                            <button className="flex gap-1 cursor-pointer border-primary border px-4 py-3 rounded-lg hover:bg-primary hover:text-white font-semibold hover:font-bold" onClick={() => setShowAddPanel(true)}><LucidePlus></LucidePlus> Add Section</button>
                            
                            {/* fonts */}
                            <div className="flex gap-1 relative">
                                <div
                                    className="flex gap-1  items-center border rounded-lg py-3 px-4 cursor-pointer hover:bg-primary hover:text-white font-semibold hover:font-bold"
                                    onClick={() => setShowFontDropdown(prev => !prev)}
                                ><Type />
                                    Fonts
                                <ChevronDown className="h-5"></ChevronDown>
                                </div>

                                {showFontDropdown && (
                                    <div className="absolute cursor-pointer top-10 left-6 w-40 border border-gray-200 bg-white rounded shadow z-50">
                                        {fonts.map((item, i) => (
                                            <div
                                                key={i}
                                                className="p-2 hover:bg-primary hover:text-white cursor-pointer"
                                                onClick={() => {
                                                    updateFont(item.name);
                                                    setShowFontDropdown(false);
                                                }}
                                            >
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>


                            <div className="flex gap-1 relative">
                                {/* colors */}
                                <div
                                    className=" flex items-center  gap-1 border rounded-lg py-3 px-4 cursor-pointer hover:bg-primary hover:text-white font-semibold hover:font-bold"
                                    onClick={() => setShowColorDropdown(prev => !prev)}
                                >
                                    <Palette />
                                    Colors
                                <ChevronDown className="h-5"></ChevronDown>
                                </div>

                                {showColorDropdown && (
                                    <div className="absolute cursor-pointer top-10 left-6 w-40 border border-gray-200 bg-white rounded shadow z-50">
                                        {templateColors.map((item, i) => (
                                            <div
                                                key={i}
                                                className="p-2 hover:bg-primary hover:text-white cursor-pointer"
                                                onClick={() => {
                                                    updateColor(item);
                                                    setShowColorDropdown(false);
                                                }}
                                            >
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button className="flex gap-1 border border-primary py-3 px-4 rounded-lg font-semibold hover:font-bold hover:text-white hover:bg-primary cursor-pointer" onClick={undo}
                                disabled={history.length === 0}><Undo></Undo>Undo</button>
                            <button className="flex gap-1 border border-primary py-3 px-4 rounded-lg font-semibold hover:font-bold hover:text-white hover:bg-primary cursor-pointer" onClick={redo}
                                disabled={future.length === 0}><Redo></Redo>Redo</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}