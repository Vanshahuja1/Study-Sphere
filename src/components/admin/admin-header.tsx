"use client"

import { Button } from "@/components/ui/button"
import { Bell, Menu, X } from "lucide-react"

interface AdminHeaderProps {
  title: string
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

export function AdminHeader({ title, sidebarOpen, onToggleSidebar }: AdminHeaderProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="text-foreground">
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-foreground hover:bg-muted">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
        </Button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
          A
        </div>
      </div>
    </header>
  )
}
