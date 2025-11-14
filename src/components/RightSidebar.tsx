// components/RightSidebar.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react"; // optional, remove if not installed
import { usePathname } from "next/navigation";

/**
 * RightSidebar component:
 * - Auto-closes when pathname contains "/profile"
 * - Shows floating avatar button when closed
 * - Progress ring around avatar shows completion %
 * - Slide in/out animation
 */

export default function RightSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const completion = 70; // example completion percent (0-100)

  // If user navigates to /profile -> start closed,
  // otherwise start open. Also respects manual toggles afterward.
  useEffect(() => {
    if (!pathname) return;
    if (pathname.includes("/profile")) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [pathname]);

  // CSS for the conic progress ring (we inline style for simplicity)
  const ringStyle = (pct: number) => ({
    background: `conic-gradient(#7c3aed ${pct}%, #e6e6e6 ${pct}%)`,
  });

  return (
    <>
      {/* FLOATING AVATAR (visible only when closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open profile sidebar"
          className="fixed right-4 top-6 z-50 flex items-center justify-center"
        >
          <div
            className="w-16 h-16 rounded-full p-[4px] shadow-md"
            style={ringStyle(completion)}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/avatar.jpg"
                alt="avatar"
                width={56}
                height={56}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </button>
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed right-0 top-0 h-full w-[320px] bg-white border-l border-gray-200 shadow-xl p-4 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header with close button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700">Your Profile</h2>

          <div className="flex items-center gap-2">
            {/* optional: collapse to floating avatar icon */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close sidebar"
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X  className="text-black" size={16} />
            </button>
          </div>
        </div>

        {/* avatar with progress ring */}
        <div className="flex flex-col items-center mb-3">
          <div
            className="w-28 h-28 rounded-full p-[6px] shadow-sm"
            style={ringStyle(completion)}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <Image
                src="/avatar.jpg"
                alt="profile"
                width={100}
                height={100}
                className="object-cover rounded-full"
              />
            </div>
          </div>

          <div className="mt-3 text-center">
            <h3 className="font-semibold text-gray-900">Alex Johnson</h3>
            <p className="text-xs text-gray-500">Continue Your Journey And Achieve Your Target</p>
          </div>
        </div>

        {/* COMPLETION TEXT */}
        <div className="text-center text-xs text-gray-600 mb-3">
          Profile completion: <span className="font-medium text-gray-800">{completion}%</span>
        </div>

        {/* warning / info */}
        <div className="w-full text-xs bg-red-50 text-red-700 border border-red-200 p-2 rounded-md mb-3">
          ⚠️ Please Provide Your Basic Information To Communicate Better
        </div>

        {/* actions */}
        <div className="flex flex-col gap-2">
          <button className="w-full text-xs border border-purple-400 text-purple-600 p-2 rounded-md">
            Add Bank Details
          </button>

          <button className="w-full text-xs border border-purple-400 text-purple-600 p-2 rounded-md">
            Connect Domain Name
          </button>
        </div>

        {/* additional offers */}
        <div className="mt-5 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Additional Offers</h4>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">Coupons</p>
            <div className="text-purple-600 text-lg">&gt;</div>
          </div>

          <p className="text-xs text-gray-400 mt-2">No active coupon here</p>
        </div>

        {/* spacer to allow scrolling inside sidebar if content grows */}
        <div className="h-8" />
      </aside>
    </>
  );
}
