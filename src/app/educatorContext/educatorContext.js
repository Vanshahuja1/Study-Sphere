'use client';

import { createContext, useContext, useState } from "react";

const EducatorContext = createContext(null);

export const EducatorProvider = ({ children }) => {
  const [createCourseData, setCreateCourseData] = useState({
    title: '',
    description: '',
    category: undefined,
    subcategory: undefined,
    validity_type: 'lifetime',
    validity_days: undefined,
    expiry_date: undefined,
    start_date: new Date().toISOString().split('.')[0], // Format: YYYY-MM-DDTHH:mm:ss
    is_free: false,
    price: '0.00',
    discount_percent: 0,
    revenue_split: 0,
    allow_offline: false,
    allow_installments: false,
    allow_trial: false,
    allow_live_classes: false,
    allow_preview: false,
    limit_access: false,
    pricing_plans_input: '[]', // Must be valid JSON string
    thumbnail: null,
    thumbnail_url: ''
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

export function buildFormData(data) {
  const fd = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === 'thumbnail' && value instanceof File) {
        fd.append(key, value);
      } else if (typeof value === 'boolean') {
        fd.append(key, value.toString());
      } else if (key === 'start_date' || key === 'expiry_date') {
        const d = new Date(value);
        if (!isNaN(d.getTime())) {
          const pad = (n) => n.toString().padStart(2, '0');
          const year = d.getFullYear();
          const month = pad(d.getMonth() + 1);
          const day = pad(d.getDate());
          const hours = pad(d.getHours());
          const minutes = pad(d.getMinutes());
          const seconds = pad(d.getSeconds());

          // Get timezone offset in +/-HHMM format
          const offset = -d.getTimezoneOffset();
          const absOffset = Math.abs(offset);
          const tzSign = offset >= 0 ? '+' : '-';
          const tzHours = pad(Math.floor(absOffset / 60));
          const tzMins = pad(absOffset % 60);
          const tz = `${tzSign}${tzHours}${tzMins}`;

          const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${tz}`;
          fd.append(key, formattedDate);
        } else {
          fd.append(key, value);
        }
      } else if (key === 'pricing_plans_input' && !value) {
        fd.append(key, '[]');
      } else {
        fd.append(key, value);
      }
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