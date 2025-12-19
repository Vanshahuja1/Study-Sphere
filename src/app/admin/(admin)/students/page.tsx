"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

const students = [
  { id: 1, name: "Alice Brown", email: "alice@example.com", courses: 3, joinDate: "2024-01-15", status: "active" },
  { id: 2, name: "Bob Wilson", email: "bob@example.com", courses: 5, joinDate: "2024-02-20", status: "active" },
  { id: 3, name: "Carol Davis", email: "carol@example.com", courses: 2, joinDate: "2024-01-10", status: "inactive" },
]

export default function StudentSupport() {
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Student & Support</h1>
        <p className="text-muted-foreground">Manage students and support tickets</p>
      </div>

      <Card>
        <CardHeader>
          <Input placeholder="Search students..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="py-3 font-semibold text-foreground">Name</th>
                  <th className="py-3 font-semibold text-foreground">Email</th>
                  <th className="py-3 font-semibold text-foreground">Courses</th>
                  <th className="py-3 font-semibold text-foreground">Joined</th>
                  <th className="py-3 font-semibold text-foreground">Status</th>
                  <th className="py-3 font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <motion.tr
                    key={student.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-border hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 font-medium text-foreground">{student.name}</td>
                    <td className="py-4 text-muted-foreground">{student.email}</td>
                    <td className="py-4">{student.courses}</td>
                    <td className="py-4 text-muted-foreground">{student.joinDate}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          student.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </Button>
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
