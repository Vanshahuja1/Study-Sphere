"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, X, Search, Plus } from "lucide-react"

const instructors = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com", courses: 5, rating: 4.8, status: "verified" },
  { id: 2, name: "John Doe", email: "john@example.com", courses: 3, rating: 4.6, status: "verified" },
  { id: 3, name: "Emma Smith", email: "emma@example.com", courses: 7, rating: 4.9, status: "pending" },
  { id: 4, name: "Mike Chen", email: "mike@example.com", courses: 2, rating: 4.7, status: "verified" },
]

export default function InstructorManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredInstructors = instructors.filter(
    (instructor) =>
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Instructor Management</h1>
          <p className="text-muted-foreground">Manage and verify instructors</p>
        </div>
        <Button className="bg-primary text-primary-foreground gap-2">
          <Plus className="w-4 h-4" />
          Add Instructor
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="py-3 font-semibold text-foreground">Name</th>
                  <th className="py-3 font-semibold text-foreground">Email</th>
                  <th className="py-3 font-semibold text-foreground">Courses</th>
                  <th className="py-3 font-semibold text-foreground">Rating</th>
                  <th className="py-3 font-semibold text-foreground">Status</th>
                  <th className="py-3 font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInstructors.map((instructor, idx) => (
                  <motion.tr
                    key={instructor.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 font-medium text-foreground">{instructor.name}</td>
                    <td className="py-4 text-muted-foreground">{instructor.email}</td>
                    <td className="py-4">{instructor.courses}</td>
                    <td className="py-4">⭐ {instructor.rating}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          instructor.status === "verified"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {instructor.status}
                      </span>
                    </td>
                    <td className="py-4 flex gap-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      {instructor.status === "pending" && (
                        <>
                          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white gap-1">
                            <Check className="w-4 h-4" />
                            Verify
                          </Button>
                          <Button size="sm" variant="destructive" gap-1>
                            <X className="w-4 h-4" />
                            Reject
                          </Button>
                        </>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
