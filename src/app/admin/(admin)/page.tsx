"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, TrendingUp, DollarSign, BookOpen } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 5200 },
  { name: "Mar", value: 4800 },
  { name: "Apr", value: 6100 },
  { name: "May", value: 7200 },
  { name: "Jun", value: 8100 },
]

const pieData = [
  { name: "Active Courses", value: 45, color: "#6B7FEF" },
  { name: "Pending", value: 20, color: "#BBA8E8" },
  { name: "Archived", value: 35, color: "#EFEFEF" },
]

export default function AdminDashboard() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Users", value: "2,543", change: "+12%", icon: Users, color: "text-blue-500" },
          { label: "Revenue", value: "$48,500", change: "+8%", icon: DollarSign, color: "text-green-500" },
          { label: "Active Courses", value: "124", change: "+5%", icon: BookOpen, color: "text-purple-500" },
          { label: "Growth Rate", value: "23%", change: "+3%", icon: TrendingUp, color: "text-orange-500" },
        ].map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-card-foreground">{stat.label}</CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change} from last month</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6B7FEF"
                    strokeWidth={2}
                    dot={{ fill: "#6B7FEF", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Course Distribution */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Course Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants} className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New course published", user: "Sarah Johnson", time: "2 hours ago", status: "success" },
                { action: "Payment received", user: "John Doe", time: "4 hours ago", status: "success" },
                { action: "Support ticket created", user: "Emma Smith", time: "1 day ago", status: "pending" },
                { action: "Instructor verified", user: "Mike Chen", time: "1 day ago", status: "success" },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between pb-3 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.user}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === "success" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {activity.status}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
