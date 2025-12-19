"use client"
import { LucideX } from "lucide-react";
import { EditPageHeader } from "@/components/editPageHeader";
import { useSearchParams } from "next/navigation";
import TemplateRenderer from "@/components/templateRenderer";
import { templates } from "@/lib/templateLoader";
import { EditPanel } from "@/components/editPanel";
import { useState, useEffect } from "react";
import AddSectionPanel from "@/components/addSectionPanel";
import { Monoton, Roboto, Lato, Work_Sans, Merriweather_Sans } from 'next/font/google'
import { addSectionLibrary } from "@/lib/addSectionLib";
import { ToastContainer, toast } from 'react-toastify';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700']
})
// const monoton =Monoton({
//   subsets:['latin'],
//   weight:['400','700']
// })
const WorkSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})
const MerriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})
const fontMap = {
  "Roboto": roboto.className,
  // "Monoton": monoton.className,
  "Lato": lato.className,
  "Work Sans": WorkSans.className,
  "Merriweather Sans": MerriweatherSans.className
};
export default function PreviewPage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");
  const pageId = searchParams.get("page")
  const template = templates[templateId];
  const pageData = template?.pages?.[pageId];
  if (!template) return <div className="p-8">Template not found</div>;
  if (!pageData) return <div className="p-8">Page not found</div>;
  const pageKeys = Object.keys(template.pages || {});
  const [selectedcolor, setSelectedColor] = useState({})
  const [sections, setSections] = useState(pageData.sections);
  const [visible, setVisible] = useState(false)
  const [showAddPanel, setShowAddPanel] = useState(false)
  const [selectedSection, setSelectedSection] = useState(null)

  useEffect(() => {
    const newPageData = template.pages[pageId];
    setSections(newPageData.sections || []);
    setSelectedSection(null);
    setHistory([]);    // optional: reset undo for new page
    setFuture([]);     // optional
  }, [pageId]);


  const fonts = [
    { name: "Roboto" },
    { name: "Merriweather Sans" },
    { name: "Work Sans" },
    { name: "Lato" }
  ];
  const [selectedFont, setSelectedFont] = useState(fonts[0]?.name || " ")

  const templateColors = [
    {
      "name": "red", "bgColor": "bg-red-500", "textColor": "text-red-500"
    },
    {
      "name": "green", "bgColor": "bg-green-500", "textColor": "text-green-500"
    },
    {
      "name": "blue", "bgColor": "bg-blue-500", "textColor": "text-blue-500"
    },
    {
      "name": "yellow", "bgColor": "bg-yellow-500", "textColor": "text-yellow-500"
    },
    {
      "name": "purple", "bgColor": "bg-purple-500", "textColor": "text-purple-500"
    },
    {
      "name": "pink", "bgColor": "bg-pink-500", "textColor": "text-pink-500"
    },
    {
      "name": "gray", "bgColor": "bg-gray-500", "textColor": "text-gray-500"
    },
    {
      "name": "orange", "bgColor": "bg-orange-500", "textColor": "text-orange-500"
    }
  ]

  // Undo/Redo stacks
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const pushHistory = () => {
    setHistory(h => [
      ...h,
      {
        sections: [...sections],
        selectedFont,
        selectedcolor
      }
    ]);
    setFuture([]);
  };
  const deleteSection = (index) => {
    pushHistory();
    const updated = sections.filter((_, i) => i !== index);
    setSections(updated);
    if (selectedSection === index) setSelectedSection(null);
    toast.success('Section deleted')
  };

  const updateSection = (index, newProps) => {
    setSections(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        props: {
          ...updated[index].props,
          ...newProps
        }
      };
      return updated;
    });
  };
  const addSection = (sectionType) => {
    pushHistory();
    const newSection = { ...addSectionLibrary[sectionType] };
    setSections([...sections, newSection]);
    setShowAddPanel(false);
    toast.success("Section added succesfully")
  };




  // Update a section and track history
  const moveSection = (index, direction) => {
    pushHistory();
    const updated = [...sections];

    if (direction === "up" && index > 0)
      [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];

    if (direction === "down" && index < updated.length - 1)
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];

    setSections(updated);
    toast.success("Section order changed succesfully")
  };

  const undo = () => {
    if (history.length === 0) return;

    const prev = history[history.length - 1];
    setHistory(history.slice(0, -1));

    setFuture(f => [
      {
        sections: [...sections],
        selectedFont,
        selectedcolor
      },
      ...f
    ]);

    setSections(prev.sections);
    setSelectedFont(prev.selectedFont);
    setSelectedColor(prev.selectedcolor);
  };


  const redo = () => {
    if (future.length === 0) return;

    const next = future[0];
    setFuture(future.slice(1));

    setHistory(h => [
      ...h,
      {
        sections: [...sections],
        selectedFont,
        selectedcolor
      }
    ]);

    setSections(next.sections);
    setSelectedFont(next.selectedFont);
    setSelectedColor(next.selectedcolor);
  };


  const updateColor = (colorObj) => {
    pushHistory([...sections]); // Track color change
    setSelectedColor(colorObj);
  };
  const updateFont = (fontName) => {
    pushHistory([...sections]); // Track font change
    setSelectedFont(fontName);
  };

  return <main className="flex flex-col w-full bg-gray-300">

    <EditPageHeader
      pages={pageKeys}
      fonts={fonts}
      setSelectedFont={setSelectedFont}
      undo={undo}
      redo={redo}
      future={future}
      history={history}
      templateId={templateId}
      setSelectedColor={setSelectedColor}
      color={selectedcolor}
      templateColors={templateColors}
      pageId={pageId}
      updateColor={updateColor}
      updateFont={updateFont}
      setShowAddPanel={setShowAddPanel}>
    </EditPageHeader>

    <section className={`w-full py-5 ${lato.className}`}>
      <div className="container max-w-5xl mx-auto">
        <div className="flex">

          <div className="flex flex-col  w-full">
            <h1 className="text-xl font-bold my-5">Preview — {pageId.toUpperCase()}</h1>

            <TemplateRenderer
              pageId={pageId}
              sections={sections}
              edit={setVisible}
              color={selectedcolor}
              fonts={fonts}
              selectedFont={selectedFont}
              setSelectedFont={setSelectedFont}
              setSelectedSection={setSelectedSection}
              moveSection={moveSection}
              fontMap={fontMap}
              deleteSection={deleteSection} />

            {selectedSection !== null && (
              <EditPanel section={sections[selectedSection]} updateSection={(props) => { updateSection(selectedSection, props) }} onClose={() => setSelectedSection(null)}></EditPanel>
            )}
            {showAddPanel && <AddSectionPanel setShowAddPanel={setShowAddPanel} addSection={addSection}></AddSectionPanel>}
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  </main>
}