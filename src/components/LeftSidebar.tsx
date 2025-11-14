"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  BookOpen,
  FileText,
  Boxes,
  FileCode,
  Video,
  MessageSquare,
  BarChart3,
  Puzzle,
  Megaphone,
  Users,
  Settings,
  LogOut,
  Lightbulb,
  User,
} from "lucide-react";

export default function LeftSidebar() {
  const pathname = usePathname();
  const params = useParams();
  const studentId = params.id;

  const menuItems = [
    {
      section: "OVERVIEW",
      items: [
        { name: "Dashboard", icon: LayoutDashboard, href: `/student/${studentId}` },
        { name: "Profile", icon: User, href: `/student/${studentId}/profile` },
        { name: "Website", icon: Globe, href: `/student/${studentId}/website` },
        { name: "Courses", icon: BookOpen, href: `/student/${studentId}/courses` },
        { name: "Content", icon: FileText, href: `/student/${studentId}/content` },
        { name: "Apps", icon: Boxes, href: `/student/${studentId}/apps` },
        { name: "Landing Page", icon: FileCode, href: `/student/${studentId}/landing-page` },
        { name: "1:1 Session", icon: Video, href: `/student/${studentId}/session` },
        { name: "Chat", icon: MessageSquare, href: `/student/${studentId}/chat` },
        { name: "Analytics", icon: BarChart3, href: `/student/${studentId}/analytics` },
        { name: "Integration", icon: Puzzle, href: `/student/${studentId}/integration` },
        { name: "Campaigns", icon: Megaphone, href: `/student/${studentId}/campaigns` },
        { name: "People", icon: Users, href: `/student/${studentId}/people` },
      ],
    },
  ];

  const settingsItems = [
    { name: "Settings", icon: Settings, href: `/student/${studentId}/settings` },
  ];

  const isActive = (href) => {
    if (href === `/student/${studentId}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            STUDYSPHERE
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4">
        {menuItems.map((section) => (
          <div key={section.section} className="mb-6">
            <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {section.section}
            </h3>
            <nav className="space-y-1 px-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "bg-purple-50 text-purple-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}

        {/* Settings Section */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            SETTINGS
          </h3>
          <nav className="space-y-1 px-2">
            {settingsItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}