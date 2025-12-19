"use client";

import { useState, useEffect } from "react";
import { LucideX } from "lucide-react";

export const EditPanel = ({ section, updateSection, onClose }) => {
  if (!section) return null;

  const [localProps, setLocalProps] = useState({ ...section.props });
  const [localImage, setLocalImage] = useState(
    section.props.logo || section.props.image || ""
  );

  // Re-sync if section changes
  useEffect(() => {
    setLocalProps({ ...section.props });
    setLocalImage(section.props.logo || section.props.image || "");
  }, [section]);

  // Generic handleChange
  const handleChange = (propName, value) => {
    const updated = { ...localProps, [propName]: value };
    setLocalProps(updated);
    updateSection(updated); // push to parent (also triggers undo history)
  };

  // Handle array changes (menu or items)
  const handleArrayChange = (propName, index, key, value) => {
    const updatedArray = [...localProps[propName]];
    updatedArray[index] = { ...updatedArray[index], [key]: value };
    handleChange(propName, updatedArray);
  };

  return (
    <div className="w-72 p-4 border border-gray-300 bg-white fixed right-0 top-0 h-full shadow-xl overflow-y-auto z-50">

      {/* PANEL HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Edit {section.type}</h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded">
          <LucideX className="w-5 h-5" />
        </button>
      </div>

      {/* TITLE */}
      {"title" in localProps && (
        <div className="mb-3">
          <label className="block text-sm text-gray-500 mb-1">Title</label>
          <input
            className="border border-gray-300 p-2 w-full rounded"
            value={localProps.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
      )}

      {/* DESCRIPTION */}
      {"description" in localProps && (
        <div className="mb-3">
          <label className="block text-sm text-gray-500 mb-1">Description</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded"
            value={localProps.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      )}

      {/* HEADER MENU */}
      {section.type === "header" &&
        localProps.menu?.map((item, i) => (
          <div key={i} className="mb-3">
            <label className="text-sm text-gray-500 font-semibold">Menu {i + 1}</label>
            <input
              className="border border-gray-300 p-2 w-full rounded mb-1"
              placeholder="Label"
              value={item.label}
              onChange={(e) => handleArrayChange("menu", i, "label", e.target.value)}
            />
            <input
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Link"
              value={item.link}
              onChange={(e) => handleArrayChange("menu", i, "link", e.target.value)}
            />
          </div>
        ))}

      {/* COURSE ITEMS */}
      {section.type === "courses" && Array.isArray(localProps.items) && (
        <div className="mb-5">
          <h4 className="font-semibold mb-2">Course Items</h4>

          {localProps.items.map((item, index) => (
            <div key={index} className="mb-2 border border-gray-300 p-2 rounded">
              <input
                value={item.name}
                placeholder="Item Name"
                className="w-full mb-1 border border-gray-300 p-1 rounded"
                onChange={(e) =>
                  handleArrayChange("items", index, "name", e.target.value)
                }
              />
              <input
                value={item.price}
                placeholder="Item Price"
                className="w-full border border-gray-300 p-1 rounded"
                onChange={(e) =>
                  handleArrayChange("items", index, "price", e.target.value)
                }
              />
            </div>
          ))}

          <button
            onClick={() =>
              handleChange("items", [...localProps.items, { name: "", price: "" }])
            }
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add Item
          </button>
        </div>
      )}

      {/* IMAGE UPLOAD */}
      {(section.type === "header" || section.type === "hero") && (
        <div className="mb-5">
          <label className="block text-sm text-gray-500 mb-2">
            {section.type === "header" ? "Logo" : "Hero Image"}
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;

              const url = URL.createObjectURL(file);
              setLocalImage(url);

              handleChange(section.type === "header" ? "logo" : "image", url);
            }}
          />

          {localImage && (
            <img
              src={localImage}
              alt="preview"
              className="mt-3 w-full rounded border object-contain"
            />
          )}
        </div>
      )}

      {/* BOTTOM SAVE BUTTON */}
      <div className="sticky bottom-0 left-0 bg-white py-3 border-t mt-3">
        <button className="w-full bg-primary px-4 py-2 text-white rounded">
          Save
        </button>
      </div>
    </div>
  );
};
