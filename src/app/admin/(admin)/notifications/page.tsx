"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Trash2, Send } from "lucide-react"

const notifications = [
  {
    id: 1,
    title: "New Course Published",
    message: "Sarah Johnson published a new React course",
    type: "info",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "Payment Received",
    message: "Payment of $500 received from John Doe",
    type: "success",
    date: "4 hours ago",
  },
  { id: 3, title: "Low Inventory", message: "Course resources running low", type: "warning", date: "1 day ago" },
]

export default function NotificationControl() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Notifications Control</h1>
        <p className="text-muted-foreground">Send and manage platform notifications</p>
      </div>

      {/* Send Notification */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>Send New Notification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Title</label>
              <Input placeholder="Notification title" className="mt-2" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea
                className="w-full mt-2 px-3 py-2 rounded-lg border border-border bg-background text-foreground"
                placeholder="Type your message"
                rows={4}
              />
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 bg-primary text-primary-foreground gap-2">
                <Send className="w-4 h-4" />
                Send Now
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Notifications */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notif, idx) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        notif.type === "success"
                          ? "bg-green-100"
                          : notif.type === "warning"
                            ? "bg-yellow-100"
                            : "bg-blue-100"
                      }`}
                    >
                      <Bell
                        className={`w-6 h-6 ${
                          notif.type === "success"
                            ? "text-green-600"
                            : notif.type === "warning"
                              ? "text-yellow-600"
                              : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{notif.title}</h3>
                      <p className="text-sm text-muted-foreground">{notif.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{notif.date}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
