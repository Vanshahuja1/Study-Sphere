"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, ImageIcon } from "lucide-react"

export default function BrandManagement() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Brand Management</h1>
        <p className="text-muted-foreground">Manage your platform branding and settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Logo Upload */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader>
              <CardTitle>Platform Logo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/30 transition-colors">
                <ImageIcon className="w-12 h-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF (max. 2MB)</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-primary text-primary-foreground gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Logo
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Branding Colors */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Primary Color", value: "#6B7FEF" },
                { label: "Secondary Color", value: "#BBA8E8" },
                { label: "Accent Color", value: "#2DD4BF" },
              ].map((color, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg border border-border" style={{ backgroundColor: color.value }} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{color.label}</p>
                    <p className="text-xs text-muted-foreground">{color.value}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Platform Name */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle>Platform Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Platform Name</label>
                <Input placeholder="Study Sphere" className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Tagline</label>
                <Input placeholder="Learn, Teach, Grow" className="mt-2" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground">Save Changes</Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* App Branding */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Mobile App Branding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Generate Android & iOS builds with custom branding</p>
              <Button className="w-full bg-primary text-primary-foreground">Generate Build</Button>
              <Button variant="outline" className="w-full bg-transparent">
                Download Existing Build
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
