'use client'
import Image from "next/image";
import loginImg from '@/../public/login.jpeg'
import { LucideArrowLeft, LucideMail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterOrg } from "@/services/auth";
import { useState } from "react";
import Link from "next/link";
export default function () {
    const [orgData, setOrgData] = useState({
        admin_first_name: "",
        admin_last_name: "",
        admin_email: "",
        org_name: "",
        admin_phone: "",
    });
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setOrgData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const Registration = async () => {
        try {
            setLoading(true)
            const res = await RegisterOrg(orgData)
            console.log(res)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    return <>
        <section className="">
            <div className="container flex">

                <div className="w-1/2 relative min-h-screen">
                    <Image src={loginImg} alt="background Image" fill className="object-cover" ></Image>
                </div>
                <div className="w-1/2 flex flex-col justify-center px-25 relative">

                      <span className=" absolute top-3 left-9 flex gap-1 items-center text-slate-400 font-semibold"><LucideArrowLeft className="h-5"></LucideArrowLeft>Back</span>

                    <h1 className="text-3xl font-bold mb-1">Register</h1>
                    <p className="mb-6">Create an account to get started</p>

                    {/* NAME */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex flex-col gap-2 w-full">
                            <Label>First Name</Label>
                            <Input
                               name="admin_first_name"
                              value={orgData.admin_first_name}
                                onChange={handleChange}
                                placeholder="John"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <Label>Last Name</Label>
                            <Input
                               name="admin_last_name"
                               value={orgData.admin_last_name}
                                onChange={handleChange}
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex flex-col gap-2 mb-4">
                        <Label>Email</Label>
                        <Input
                            name="admin_email"
                           value={orgData.admin_email}
                            onChange={handleChange}
                            placeholder="instructor@org.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-6">
                        <Label>Phone</Label>
                        <Input
                            name="admin_phone"
                            value={orgData.admin_phone}
                            onChange={handleChange}
                            placeholder="+911234567890"
                        />
                    </div>
                    {/* ORG NAME */}
                    <div className="flex flex-col gap-2 mb-4">
                        <Label>Organization Name</Label>
                        <Input
                            name="org_name"
                            value={orgData.org_name}
                            onChange={handleChange}
                            placeholder="Academy One"
                        />
                    </div>
    
                

                    <button
                        onClick={Registration}
                        disabled={loading}
                        className="bg-golden  text-white py-2 rounded-md font-semibold disabled:opacity-60"
                    >
                        {loading ? "Registering..." : "Sign Up "}

                    </button>

                    <p className="text-sm text-center mt-4">
                        Already have an account? <Link href='/educator'><span className='text-golden font-semibold'>Login</span></Link>
                    </p>
                </div>
            </div>
        </section>
    </>
}