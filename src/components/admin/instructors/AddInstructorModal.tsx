"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { onboardInstructor } from "@/services/auth";
import { toast } from "react-toastify";
import { Plus, Copy, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

interface AddInstructorModalProps {
    onSuccessAction?: () => void;
}

export function AddInstructorModal({ onSuccessAction }: AddInstructorModalProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successData, setSuccessData] = useState<{
        code: string;
        email: string;
        phone: string;
    } | null>(null);

    const { register, handleSubmit, setValue, reset, watch } = useForm({
        defaultValues: {
            email: "",
            phone: "",
            first_name: "",
            last_name: "",
            alternative_mobile: "",
            age: "",
            gender: "Male",
            aadhar_number: "",
            address: "",
            experience: "",
            bio: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            const formData = new FormData();

            Object.keys(data).forEach((key) => {
                if (data[key]) formData.append(key, data[key]);
            });

            const fileInput = document.getElementById("profile_picture") as HTMLInputElement;
            if (fileInput?.files?.[0]) {
                formData.append("profile_picture", fileInput.files[0]);
            }

            const res = await onboardInstructor(formData);

            setSuccessData({
                code: res.organisation_code || "STUDY" + Math.random().toString(36).substring(7).toUpperCase(),
                email: res.email,
                phone: res.phone,
            });

            toast.success("Instructor onboarded successfully!");
            if (onSuccessAction) onSuccessAction();
        } catch (error: any) {
            toast.error(error.message || "Failed to onboard instructor");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.info("Copied to clipboard!");
    };

    const shareViaWhatsApp = () => {
        if (!successData) return;
        const message = `Welcome to Study Sphere! Your Organisation Code is: ${successData.code}. You can login with your Email: ${successData.email} or Phone: ${successData.phone}`;
        window.open(`https://wa.me/${successData.phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    const shareViaEmail = () => {
        if (!successData) return;
        const subject = "Welcome to Study Sphere - Your Organisation Code";
        const body = `Welcome to Study Sphere! Your Organisation Code is: ${successData.code}. You can login with your Email: ${successData.email} or Phone: ${successData.phone}`;
        window.open(`mailto:${successData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
    };

    const handleClose = () => {
        setOpen(false);
        setSuccessData(null);
        reset();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-primary text-primary-foreground gap-2">
                    <Plus className="w-4 h-4" />
                    Add Organisation
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        {successData ? "Onboarding Successful" : "Onboard New Organisation"}
                    </DialogTitle>
                </DialogHeader>

                {successData ? (
                    <div className="py-6 space-y-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-12 h-12 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Organisation Registered!</h3>
                                <p className="text-gray-500">Here are the credentials to share with them</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-200">
                            <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Organisation Code</p>
                                    <p className="text-lg font-mono font-bold text-indigo-600">{successData.code}</p>
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(successData.code)}>
                                    <Copy className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-3 rounded-lg border border-gray-100">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</p>
                                    <p className="text-sm font-medium">{successData.email}</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg border border-gray-100">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Phone</p>
                                    <p className="text-sm font-medium">{successData.phone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button onClick={shareViaWhatsApp} className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                                <MessageSquare className="w-4 h-4" />
                                Share on WhatsApp
                            </Button>
                            <Button onClick={shareViaEmail} variant="outline" className="gap-2">
                                <Mail className="w-4 h-4" />
                                Share via Email
                            </Button>
                        </div>

                        <Button onClick={handleClose} className="w-full" variant="ghost">
                            Close
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Basic Info */}
                            <div className="space-y-2">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input id="first_name" {...register("first_name")} placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input id="last_name" {...register("last_name")} placeholder="Doe" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input id="email" type="email" {...register("email", { required: true })} placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone *</Label>
                                <Input id="phone" {...register("phone", { required: true })} placeholder="+91 9876543210" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="alternative_mobile">Alternative Mobile</Label>
                                <Input id="alternative_mobile" {...register("alternative_mobile")} placeholder="+91 9876543211" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="age">Age</Label>
                                <Input id="age" type="number" {...register("age")} placeholder="30" />
                            </div>

                            <div className="space-y-2">
                                <Label>Gender</Label>
                                <Select onValueChange={(v) => setValue("gender", v)} defaultValue="Male">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="aadhar_number">Aadhar Number</Label>
                                <Input id="aadhar_number" {...register("aadhar_number")} placeholder="123456789012" maxLength={12} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Textarea id="address" {...register("address")} placeholder="Full Address" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="experience">Experience</Label>
                                <Input id="experience" {...register("experience")} placeholder="5 years" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="profile_picture">Profile Picture</Label>
                                <Input id="profile_picture" type="file" accept="image/*" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea id="bio" {...register("bio")} placeholder="Short biography about the instructor/organisation" />
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t">
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={loading}>
                                {loading ? "Onboarding..." : "Onboard Organisation"}
                            </Button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
