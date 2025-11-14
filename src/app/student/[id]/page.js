// JS version (no TypeScript)
"use client";
import {
  LayoutDashboard,
  User,
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
} from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page({ params }) {
  const studentId = params.studentId;

  const navItems = [
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
  ];

  return (
    <motion.div
      className="w-full min-h-screen bg-white p-6 text-gray-900 space-y-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Navigation Section */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {navItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href={item.href}>
              <div className="flex items-center gap-3 p-4 rounded-2xl border hover:shadow-lg transition cursor-pointer bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg">
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Top CTA Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="p-5 border rounded-2xl shadow-sm bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-semibold">Create Your Own Personalised Website</p>
          <button className="mt-3 px-4 py-2 rounded-xl bg-black text-white text-sm">
            Start ▶
          </button>
        </motion.div>

        <motion.div
          className="p-5 border rounded-2xl shadow-sm bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <p className="font-semibold">Create Your Own Personalised App</p>
          <button className="mt-3 px-4 py-2 rounded-xl bg-black text-white text-sm">
            Start ▶
          </button>
        </motion.div>
      </div>

      {/* Offerings */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Our Offerings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white border border-gray-200 shadow-sm p-5 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-bold text-xl flex items-center gap-2">📚 Course</h3>
            <p className="text-sm mt-1">No Course Published</p>
            <button className="mt-3 px-4 py-1 text-xs bg-white rounded-full border">
              Create Course
            </button>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 shadow-sm p-5 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <h3 className="font-bold text-xl flex items-center gap-2">📝 Landing Page</h3>
            <p className="text-sm mt-1">No Landing Pages</p>
            <button className="mt-3 px-4 py-1 text-xs bg-white rounded-full border">
              Create Landing Page
            </button>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 shadow-sm p-5 rounded-2xl md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-bold text-xl flex items-center gap-2">📣 Campaign</h3>
            <p className="text-sm mt-1">
              Create Targeted Marketing Campaigns & Boost Engagement
            </p>
            <button className="mt-3 px-4 py-1 text-xs bg-white rounded-full border">
              Create Campaign
            </button>
          </motion.div>
        </div>
      </div>

      {/* Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <h2 className="text-lg font-semibold mb-4">Analytics</h2>
        <div className="space-y-1 text-sm">
          <p>Website Sessions: 0</p>
          <p>Transactions: 0</p>
          <p>Buy Now Clicks: 0</p>
          <p>Revenue: 0</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
