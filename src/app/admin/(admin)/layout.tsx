"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  ShoppingCart,
  DollarSign,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Instructors", href: "/admin/instructors", icon: Users },
  { label: "Brand Management", href: "/admin/brand", icon: Briefcase },
  { label: "Courses & Marketplace", href: "/admin/courses", icon: ShoppingCart },
  { label: "Payments & Finance", href: "/admin/payments", icon: DollarSign },
  { label: "Students & Support", href: "/admin/students", icon: Users },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Notifications", href: "/admin/notifications", icon: Bell },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-screen w-72 bg-sidebar border-r border-sidebar-border z-50 overflow-y-auto"
      >
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-sidebar-border bg-sidebar">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">Admin</span>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                    active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border bg-sidebar">
          <Link href="/admin/settings">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 mb-2 text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent/10 bg-transparent"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </Link>
          <Button variant="destructive" className="w-full justify-start gap-3">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "ml-72" : "ml-0"}`}>
        {/* Top Header */}
        <header className="sticky top-0 h-16 bg-card border-b border-border flex items-center justify-between px-6 z-40">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-foreground"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <h1 className="text-xl font-bold text-foreground">
              {navItems.find((item) => isActive(item.href))?.label || "Admin Panel"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-foreground hover:bg-muted">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <div className="flex items-center gap-2 pl-4 border-l border-border">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                A
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
