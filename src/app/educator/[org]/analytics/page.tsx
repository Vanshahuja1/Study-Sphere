'use client'
import { Header } from "@/components/Header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from 'framer-motion'
import { ChevronRight, LucideArrowDown, LucideArrowUp, LucideFileAxis3D, LucideIndianRupee } from "lucide-react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
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
    }
}
const data = [
    { name: "Mon", users: 120 },
    { name: "Tue", users: 210 },
    { name: "Wed", users: 150 },
    { name: "Thu", users: 300 },
    { name: "Fri", users: 250 },
]
export const sessionsData = [
    { name: "Mon", users: 1200 },
    { name: "Tue", users: 1350 },
    { name: "Wed", users: 1280 },
    { name: "Thu", users: 1600 },
    { name: "Fri", users: 1750 },
    { name: "Sat", users: 1900 },
    { name: "Sun", users: 2100 },
]

export const clicksData = [
    { name: "Mon", clicks: 120 },
    { name: "Tue", clicks: 150 },
    { name: "Wed", clicks: 140 },
    { name: "Thu", clicks: 180 },
    { name: "Fri", clicks: 210 },
    { name: "Sat", clicks: 240 },
    { name: "Sun", clicks: 280 },
]
export const transactionsData = [
    { name: "Mon", transactions: 32 },
    { name: "Tue", transactions: 41 },
    { name: "Wed", transactions: 38 },
    { name: "Thu", transactions: 52 },
    { name: "Fri", transactions: 61 },
    { name: "Sat", transactions: 73 },
    { name: "Sun", transactions: 85 },
]

const tabData = [
    { title: "Website Sessions", numericalData: 10, icon: <LucideArrowDown className="text-red-500" />, bottomline: "50% down compared to last 7 days" },
    { title: "Buy Now Clicks", numericalData: 5, icon: <LucideArrowUp className="text-green-500" />, bottomline: "20% up compared to last 7 days" },
    { title: "Transactions", numericalData: 7, icon: <LucideArrowDown className="text-red-500" />, bottomline: "40% down compared to last 7 days" },
    // { title: "Revenue", numericalData: 0, icon: <LucideArrowDown className="text-green-500" />, bottomline: "0% up compared to last 7 days" },
]
export default function EducatorAnalytics() {
    return <main className="w-full bg-background">
        <Header heading='Analytics' para="Analyze your static traffic to know your brand's growth" ></Header>
        <motion.section variants={itemVariants} initial="hidden" animate="visible" className="py-5">
            <div className="container max-w-5xl mx-auto">
                <div className="flex gap-3">
                    <div className="w-3/4">
                        <Select defaultValue="7 days">
                            <SelectTrigger className="bg-white shadow-md">
                                <SelectValue ></SelectValue>
                            </SelectTrigger>
                            <SelectContent className="shadow-md">
                                <SelectItem value="today">Today</SelectItem>
                                <SelectItem value="7 days">Last 7 days</SelectItem>
                                <SelectItem value="15 days">Last 15 days</SelectItem>
                                <SelectItem value="30 days">Last 30 days</SelectItem>
                                <SelectItem value="custom">Custom Date</SelectItem>
                            </SelectContent>
                        </Select>

                        <Tabs defaultValue="Website Sessions" className="w-full my-4 ">
                            <TabsList className="h-35 w-full">
                                {tabData.map((item, i) => {
                                    return <TabsTrigger value={item.title} key={i} className="shadow-md flex flex-col items-start p-3">
                                        <h2 className="font-semibold">{item.title}</h2>
                                        <p className="text-primary font-semibold text-lg">{item.numericalData}</p>
                                        <p className="text-xs text-slate-500 flex gap-1 items-center"> {item.icon} {item.bottomline}</p>
                                    </TabsTrigger>
                                })}
                            </TabsList>
                            <TabsContent value="Website Sessions" className="bg-white rounded-2xl py-5 shadow-md">
                                <div className="h-80 w-full text-xs p-3 ">
                                    <ResponsiveContainer width="100%" height={400}>
                                        <LineChart data={data}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line
                                                type="monotone"
                                                dataKey="users"
                                                stroke="#6366f1"
                                                strokeWidth={2}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div></TabsContent>
                            <TabsContent
                                value="Buy Now Clicks"
                                className="bg-white rounded-2xl py-5 shadow-xl"
                            >
                                <div className="h-100 w-full p-3 text-xs">
                                    <ResponsiveContainer width="100%" height={400}>
                                        <LineChart data={clicksData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line dataKey="clicks" type="monotone" stroke="#6366f1"
                                                strokeWidth={2} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </TabsContent>

                            <TabsContent
                                value="Transactions"
                                className="bg-white rounded-2xl py-5 shadow-xl"
                            >
                                <div className="h-100 w-full p-3 text-xs">
                                    <ResponsiveContainer width="100%" height={400}>
                                        <LineChart data={transactionsData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line
                                                type="monotone"
                                                dataKey="transactions"
                                                stroke="#f59e0b"
                                                strokeWidth={2}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </TabsContent>

                            <TabsContent value="Revenue">Change your password here.</TabsContent>
                        </Tabs>
                    </div>
                    <div className=" w-1/4">
                        <div className="shadow-sm flex justify-between rounded-lg bg-white p-3">
                            <h3 className="font-semibold">Lifetime Revenue</h3>
                            <p className="text-primary font-semibold">₹30,000</p>
                        </div>
                        <div className="shadow-sm bg-white rounded-2xl p-3 my-2">
                            <h3 className="text-sm font-semibold">Quick Actions</h3>
                            <div className="relative shadow-sm hover:shadow-md transition-shadow flex bg-secondary px-3 py-4 rounded-2xl gap-5 items-center t w-full mt-3 ">
                                <div className="bg-white rounded-4xl p-2">
                                    <LucideIndianRupee className="h-4 w-4 text-primary" />
                                </div>
                                <div className="">
                                    <h3 className="font-semibold text-primary text-xs">View Transactions</h3>
                                </div>
                                <div className="absolute right-2 text-primary">
                                    <ChevronRight className="h-5"></ChevronRight>
                                </div>
                            </div>
                            <div className="relative shadow-sm hover:shadow-md transition-shadow flex bg-secondary px-3 py-4 rounded-2xl gap-5 items-center t w-full my-2 ">
                                <div className="bg-white rounded-4xl p-2">
                                    <LucideFileAxis3D className="h-4 w-4 text-primary" />
                                </div>
                                <div className="">
                                    <h3 className="font-semibold text-xs text-primary ">Generate Reports</h3>
                                </div>
                                <div className="absolute right-2 text-primary">
                                    <ChevronRight className="h-5"></ChevronRight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.section>
    </main>
}
