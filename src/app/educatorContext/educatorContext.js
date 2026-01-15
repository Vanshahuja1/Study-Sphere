'use client';

import { createContext, useContext, useState } from "react";

const EducatorContext = createContext(null);

export const EducatorProvider = ({ children }) => {
  const [createCourseData, setCreateCourseData] = useState({
    title: '', description: '', category: undefined, subcategory: undefined,validity_type:undefined,
    price:undefined,discount_percent:undefined
  })
  const value = {
    createCourseData,
    setCreateCourseData,
  };
  return (
    <EducatorContext.Provider value={value}>
      {children}
    </EducatorContext.Provider>
  );
}

export function buildFormData (data) {
  const fd = new FormData();
  Object.entries(data).forEach(([key,value])=>{
    if (value !== undefined && value !==null){
      fd.append(key,value)
    }
  });
  return fd;
};
 

export function useEducator() {
  const context = useContext(EducatorContext);
  if (!context) {
    throw new Error("useEducator must be used inside EducatorProvider");
  }
  return context;
}