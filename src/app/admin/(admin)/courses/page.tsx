"use client"

import React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle, Trash2, Eye, Plus } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    instructor: "Sarah Johnson",
    students: 342,
    status: "active",
    revenue: "$12,500",
  },
  {
    id: 2,
    title: "Web Design Masterclass",
    instructor: "John Doe",
    students: 215,
    status: "active",
    revenue: "$8,750",
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Emma Smith",
    students: 128,
    status: "pending",
    revenue: "$0",
  },
  { id: 4, title: "UI/UX Design Basics", instructor: "Mike Chen", students: 89, status: "active", revenue: "$4,200" },
]

export default function CourseManagement() {
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Courses & Marketplace</h1>
          <p className="text-muted-foreground">Manage courses and marketplace listings</p>
        </div>
        <Button className="bg-primary text-primary-foreground gap-2">
          <Plus className="w-4 h-4" />
          New Course
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{course.title}</h3>
                    {course.status === "active" ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">By {course.instructor}</p>
                  <div className="flex gap-6 mt-2 text-sm text-muted-foreground">
                    <span>{course.students} Students</span>
                    <span>{course.revenue}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
