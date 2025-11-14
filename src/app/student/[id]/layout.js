"use client";
import { useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import RightSidebar from "@/components/RightSidebar";

export default function StudentLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {/* Left Sidebar - Desktop */}
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

      {/* Left Sidebar - Mobile */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed left-0 top-0 z-50 lg:hidden">
            <LeftSidebar />
          </div>
        </>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

        {/* Page Content */}
        <main className="">
          {children}
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:block">
        <RightSidebar />
      </div>
    </div>
  );
}