import { BlockComponents } from "./blocks/blockComponents";
import { ArrowUp, ArrowDown, MoveUp, Edit, Trash } from "lucide-react";
import { LucidePen } from "lucide-react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
export default function TemplateRenderer({ deleteSection, sections = [], pageId, edit, font, color, setSelectedSection, moveSection, fontMap, selectedFont }) {
    const [hoverIndex, sethoverIndex] = useState(null)
    const { bgColor, textColor } = color || { bgColor: '', textColor: '' }


    return (
        <>
            {sections.map((section, idx) => {
                const Component = BlockComponents[section.type];
                if (!Component) return <div key={idx}>unknown section:{section.type}</div>;

                return <div onMouseEnter={() => sethoverIndex(idx)} onMouseLeave={() => { sethoverIndex(null) }}
                    key={idx}
                    className={` relative  hover:border-blue-400 hover:border-2 `}
                >{hoverIndex == idx &&
                    <div className={`flex items-center bg-white py-2 px-3 border rounded-lg border-blue-400 absolute  text-blue-500 gap-4`} >
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => moveSection(idx, "up")}>
                            <ArrowUp className="h-8" ></ArrowUp>
                            <span>MoveUp</span>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => moveSection(idx, "down")}>
                            <ArrowDown className="h-8" ></ArrowDown>
                            <span>MoveDown</span>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer" onClick={() => setSelectedSection(idx)}>
                            <LucidePen className="h-8 text-blue-500 "></LucidePen>
                            <button className="" >Edit </button>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer " onClick={() => deleteSection(idx)}>
                            <button className=""  >
                                <Trash className="h-8"></Trash>
                            </button>
                            <span>delete</span>
                        </div>


                    </div>}

                    <Component {...section.props} textColor={textColor} bgColor={bgColor} font={fontMap[selectedFont]} />

                </div>
            })}
        </>
    )
}