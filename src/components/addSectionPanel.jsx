// components/AddSectionPanel.js
"use client";
import { addSectionLibrary } from "@/lib/addSectionLib";
import Image from "next/image";
export default function AddSectionPanel({ addSection,setShowAddPanel}) {
  return (
    <div className="fixed overflow-y-auto right-0 top-0 w-80 h-full bg-white shadow-lg p-5 z-200">
      <h2 className="text-lg font-bold mb-3">Add Section</h2>
      <button onClick={()=>setShowAddPanel(false)} className="absolute top-2 right-2">X</button>
      <ul className="space-y-2">
        {Object.keys(addSectionLibrary).map((key) => (
          <li key={key} className=" justify-between items-center">
            <Image src={'/asd.jpg'} className="border-gray-300 border rounded-2xl flex items-center justify-center" width={300} height={200} alt="preview image"></Image>
            <div className="flex justify-between my-5">

            <span>{key}</span>
            <button
              onClick={() => addSection(key)}
              className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer"
              >
              Add
            </button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
