"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { LayoutDashboard, Users, Briefcase, ShoppingCart, DollarSign, BarChart3, Bell, Settings } from "lucide-react"

interface AdminSidebarProps {
  isOpen: boolean
}

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Instructors", href: "/admin/instructors", icon: Users },
  { label: "Brand", href: "/admin/brand", icon: Briefcase },
  { label: "Courses", href: "/admin/courses", icon: ShoppingCart },
  { label: "Payments", href: "/admin/payments", icon: DollarSign },
  { label: "Students", href: "/admin/students", icon: Users },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Notifications", href: "/admin/notifications", icon: Bell },
]

export function AdminSidebar({ isOpen }: AdminSidebarProps) {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: isOpen ? 0 : -280 }}
      transition={{ duration: 0.3 }}
      className="w-72 h-screen bg-sidebar border-r border-sidebar-border overflow-y-auto"
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
          <LayoutDashboard className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>
        <span className="text-lg font-bold text-sidebar-foreground">Admin</span>
      </div>

      {/* Nav Items */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
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

      {/* Settings */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border bg-sidebar">
        <Link href="/admin/settings">
          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/10"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </motion.div>
        </Link>
      </div>
    </motion.aside>
  )
}
