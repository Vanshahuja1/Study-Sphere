"use client"
import { Header } from "@/components/Header"
import { useEducator, buildFormData } from "@/app/educatorContext/educatorContext"
import greenTick from '../../../../../public/greenTick-c3c873ac..svg'
import Link from "next/link"
import Image from "next/image"
import { LucideArrowRight, PlusCircle, Check, LoaderCircleIcon, Info, Image as ImageIcon, IndianRupee, Calendar, Settings } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { ThumbnailSelector } from "@/components/educator/ThumbnailSelector"
import { getCategories, getSubCategories, createCategory, createSubCategory, Category, SubCategory, createCourse } from "@/services/educator/coursesAPIs"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const steps = [
  { title: 'Information', icon: <Info className="size-4" /> },
  { title: 'Pricing', icon: <IndianRupee className="size-4" /> },
  { title: 'Thumbnail & Features', icon: <ImageIcon className="size-4" /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function EducatorCreateCourse() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [newCatName, setNewCatName] = useState("");
  const [newSubCatName, setNewSubCatName] = useState("");
  const [isCatDialogOpen, setIsCatDialogOpen] = useState(false);
  const [isSubCatDialogOpen, setIsSubCatDialogOpen] = useState(false);

  const router = useRouter();
  const { createCourseData, setCreateCourseData } = useEducator();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, subRes] = await Promise.all([getCategories(), getSubCategories()]);
        setCategories(catRes);
        setSubcategories(subRes);
      } catch (err) {
        console.error("Failed to fetch categories/subcategories", err);
        toast.error("Failed to load categories. Please refresh.");
      }
    };
    fetchData();
  }, []);

  const filteredSubcategories = subcategories.filter(sub =>
    sub.category.toString() === createCourseData.category?.toString()
  );

  const handleAddCategory = async () => {
    if (!newCatName.trim()) return;
    try {
      setLoading(true);
      const res = await createCategory(newCatName.trim());
      setCategories(prev => [...prev, res]);
      setCreateCourseData((prev: any) => ({ ...prev, category: res.id.toString() }));
      setNewCatName("");
      setIsCatDialogOpen(false);
      toast.success("Category added!");
    } catch (err) {
      toast.error("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  const handleAddSubCategory = async () => {
    if (!newSubCatName.trim() || !createCourseData.category) {
      toast.error("Please select a category first");
      return;
    }
    try {
      setLoading(true);
      const res = await createSubCategory(newSubCatName.trim(), parseInt(createCourseData.category));
      setSubcategories(prev => [...prev, res]);
      setCreateCourseData((prev: any) => ({ ...prev, subcategory: res.id.toString() }));
      setNewSubCatName("");
      setIsSubCatDialogOpen(false);
      toast.success("Subcategory added!");
    } catch (err) {
      toast.error("Failed to add subcategory");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    //@ts-ignore
    const val = type === 'number' ? parseFloat(value) : value;
    setCreateCourseData((prev: any) => ({
      ...prev,
      [name]: val,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setCreateCourseData((prev: any) => ({
      ...prev,
      [name]: value,
      // Reset subcategory if category changes
      ...(name === 'category' ? { subcategory: undefined } : {})
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setCreateCourseData((prev: any) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleImageSelect = (file: File | null) => {
    setCreateCourseData((prev: any) => ({
      ...prev,
      thumbnail_file: file,
    }))
  }

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Basic validation for JSON if it's multiple
      if (createCourseData.validity_type === 'multiple') {
        try {
          JSON.parse(createCourseData.pricing_plans_input || '[]');
        } catch (e) {
          toast.error("Pricing Plans must be valid JSON (e.g. [])");
          setLoading(false);
          return;
        }
      }

      const formData = buildFormData(createCourseData);
      const response = await createCourse(formData);
      console.log("Course Creation Response:", response);

      const courseId = response.course_id || (response as any).id;

      if (courseId) {
        toast.success("Course created successfully!");
        router.push(`/educator/courses/edit/${courseId}`);
      } else {
        console.warn("Course created but no ID was found in response:", response);
        toast.success("Course created successfully!");
        router.push(`/educator/courses`);
      }
    } catch (error: any) {
      console.error("Failed to create course:", error);
      toast.error(error.message || "Failed to create course. Please check all fields.");
    } finally {
      setLoading(false);
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }
// console.log(createCourseData)
  return (
    <main className="w-full bg-background min-h-screen pb-24">
      <Header heading='Create Course' para='Setup your course details, pricing and features' />

      <div className="container max-w-5xl mx-auto py-8 px-4">
        {/* Stepper Header */}
        <div className="bg-white shadow-sm border border-slate-200 rounded-3xl p-8 mb-8">
          <Stepper value={currentStep} onValueChange={setCurrentStep} className="w-full">
            <StepperNav className="flex justify-between relative">
              {steps.map((step, index) => (
                <StepperItem key={index} step={index + 1} className="relative flex flex-col items-center gap-2 flex-1 group">
                  <StepperTrigger className="z-10 bg-white p-1 rounded-full">
                    <StepperIndicator className="size-10 transition-all duration-300 group-data-[state=active]:bg-primary group-data-[state=active]:text-white group-data-[state=completed]:bg-green-500 group-data-[state=completed]:text-white">
                      {index + 1 < currentStep ? <Check className="size-5" /> : step.icon}
                    </StepperIndicator>
                  </StepperTrigger>
                  <span className="text-xs font-medium text-slate-500 group-data-[state=active]:text-primary group-data-[state=active]:font-bold transition-all">
                    {step.title}
                  </span>

                  {index < steps.length - 1 && (
                    <div className="absolute top-5 left-[calc(50%+25px)] w-[calc(100%-50px)] h-[2px] bg-slate-100 -z-0">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: index + 1 < currentStep ? "100%" : "0%" }}
                        className="h-full bg-green-500"
                      />
                    </div>
                  )}
                </StepperItem>
              ))}
            </StepperNav>
          </Stepper>
        </div>

        {/* Step Content */}
        <div className="bg-white shadow-xl border border-slate-200 rounded-3xl overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-4">
                      <Label htmlFor="title" className="text-lg font-bold text-slate-800">Course Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={createCourseData.title}
                        onChange={handleChange}
                        placeholder="e.g. Master React in 30 Days"
                        className="border-slate-200 bg-slate-50 py-6 text-lg rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                      <p className="text-xs text-slate-400">A catchy title helps your course stand out.</p>
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="description" className="text-lg font-bold text-slate-800">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={createCourseData.description}
                        onChange={handleChange}
                        placeholder="Tell students what they will learn..."
                        className="min-h-[200px] border-slate-200 bg-slate-50 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all p-4"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label className="text-lg font-bold text-slate-800">Category</Label>
                          <Dialog open={isCatDialogOpen} onOpenChange={setIsCatDialogOpen}>
                            <DialogTrigger asChild>
                              <button className="text-xs text-primary font-bold hover:underline flex items-center gap-1">
                                <PlusCircle className="size-3" /> New
                              </button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Add New Category</DialogTitle>
                                <DialogDescription>Create a new category for your courses.</DialogDescription>
                              </DialogHeader>
                              <Input
                                placeholder="Category name"
                                value={newCatName}
                                onChange={(e) => setNewCatName(e.target.value)}
                                className="my-4"
                              />
                              <DialogFooter>
                                <Button variant="outline" onClick={() => setIsCatDialogOpen(false)}>Cancel</Button>
                                <Button onClick={handleAddCategory} disabled={loading}>
                                  {loading ? <LoaderCircleIcon className="size-4 animate-spin" /> : "Add Category"}
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <Select value={createCourseData.category?.toString()} onValueChange={(v) => handleSelectChange('category', v)}>
                          <SelectTrigger className="bg-slate-50 border-slate-200 py-6 rounded-2xl">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map(cat => (
                              <SelectItem key={cat.id} value={cat.id.toString()}>{cat.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label className="text-lg font-bold text-slate-800">Subcategory</Label>
                          <Dialog open={isSubCatDialogOpen} onOpenChange={setIsSubCatDialogOpen}>
                            <DialogTrigger asChild>
                              <button
                                disabled={!createCourseData.category}
                                className="text-xs text-primary font-bold hover:underline flex items-center gap-1 disabled:opacity-30"
                              >
                                <PlusCircle className="size-3" /> New
                              </button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Add New Subcategory</DialogTitle>
                                <DialogDescription>
                                  Add a subcategory to "<strong>{categories.find(c => c.id.toString() === createCourseData.category)?.name}</strong>"
                                </DialogDescription>
                              </DialogHeader>
                              <Input
                                placeholder="Subcategory name"
                                value={newSubCatName}
                                onChange={(e) => setNewSubCatName(e.target.value)}
                                className="my-4"
                              />
                              <DialogFooter>
                                <Button variant="outline" onClick={() => setIsSubCatDialogOpen(false)}>Cancel</Button>
                                <Button onClick={handleAddSubCategory} disabled={loading}>
                                  {loading ? <LoaderCircleIcon className="size-4 animate-spin" /> : "Add Subcategory"}
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <Select
                          disabled={!createCourseData.category}
                          value={createCourseData.subcategory?.toString()}
                          onValueChange={(v) => handleSelectChange('subcategory', v)}
                        >
                          <SelectTrigger className="bg-slate-50 border-slate-200 py-6 rounded-2xl disabled:opacity-50">
                            <SelectValue placeholder={createCourseData.category ? "Select Subcategory" : "Select Category first"} />
                          </SelectTrigger>
                          <SelectContent>
                            {filteredSubcategories.map(sub => (
                              <SelectItem key={sub.id} value={sub.id.toString()}>{sub.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 rounded-3xl p-8 border border-indigo-100">
                    <h3 className="text-lg font-bold text-indigo-900 mb-6 flex items-center gap-2">
                      <Check className="size-5" /> Tips for Step 1
                    </h3>
                    <ul className="space-y-4 text-indigo-800/80 text-sm">
                      <li className="flex gap-3">
                        <div className="size-2 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                        Use keywords in your title for better search visibility.
                      </li>
                      <li className="flex gap-3">
                        <div className="size-2 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                        Write a detailed description covering all learning outcomes.
                      </li>
                      <li className="flex gap-3">
                        <div className="size-2 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                        Accurate categorization helps students find your course.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-200">
                      <div>
                        <Label className="text-xl font-bold text-slate-800 block">Is this course free?</Label>
                        <p className="text-sm text-slate-500">Free courses can help build your audience</p>
                      </div>
                      <Checkbox
                        checked={createCourseData.is_free}
                        onCheckedChange={(v) => handleCheckboxChange('is_free', !!v)}
                        className="size-6 rounded-md"
                      />
                    </div>

                    {!createCourseData.is_free && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <Label className="font-bold">Price (₹)</Label>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">₹</span>
                              <Input
                                type="number"
                                name="price"
                                value={createCourseData.price}
                                onChange={handleChange}
                                className="pl-10 py-6 rounded-2xl bg-slate-50 border-slate-200"
                              />
                            </div>
                          </div>
                          <div className="space-y-4">
                            <Label className="font-bold">Discount (%)</Label>
                            <Input
                              type="number"
                              name="discount_percent"
                              value={createCourseData.discount_percent}
                              onChange={handleChange}
                              className="py-6 rounded-2xl bg-slate-50 border-slate-200"
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <Label className="font-bold">Revenue Split (%)</Label>
                          <Input
                            type="number"
                            name="revenue_split"
                            value={createCourseData.revenue_split}
                            onChange={handleChange}
                            placeholder="e.g. 70"
                            className="py-6 rounded-2xl bg-slate-50 border-slate-200"
                          />
                          <p className="text-xs text-slate-400">Percentage of revenue you keep (e.g. 70 means you get 70%, platform gets 30%)</p>
                        </div>
                      </motion.div>
                    )}

                    <div className="space-y-4">
                      <Label className="text-lg font-bold">Validity Type</Label>
                      <Select
                        value={createCourseData.validity_type}
                        onValueChange={(v) => handleSelectChange('validity_type', v)}
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 py-6 rounded-2xl">
                          <SelectValue placeholder="Select Validity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lifetime">Lifetime Access</SelectItem>
                          <SelectItem value="single">Single Device (One-off)</SelectItem>
                          <SelectItem value="multiple">Multiple Plans</SelectItem>
                          <SelectItem value="expiry">Fixed Expiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {(createCourseData.validity_type === 'expiry' || createCourseData.validity_type === 'single') && (
                      <div className="space-y-4">
                        <Label className="font-bold">Validity Days</Label>
                        <Input
                          type="number"
                          name="validity_days"
                          value={createCourseData.validity_days}
                          onChange={handleChange}
                          className="py-6 rounded-2xl bg-slate-50 border-slate-200"
                        />
                      </div>
                    )}

                    {createCourseData.validity_type === 'multiple' && (
                      <div className="space-y-4">
                        <Label className="font-bold">Pricing Plans Input (JSON)</Label>
                        <Textarea
                          name="pricing_plans_input"
                          value={createCourseData.pricing_plans_input}
                          onChange={handleChange}
                          placeholder='[{"name": "Monthly", "price": "499", "days": 30}]'
                          className="rounded-2xl bg-slate-50 border-slate-200 p-4"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-lg font-bold flex items-center gap-2">
                        <Calendar className="size-5 text-primary" /> Start Date
                      </Label>
                      <Input
                        type="datetime-local"
                        name="start_date"
                        value={createCourseData.start_date?.split('.')[0].slice(0, 16)}
                        onChange={handleChange}
                        className="py-6 rounded-2xl bg-slate-50 border-slate-200"
                      />
                    </div>

                    {createCourseData.validity_type === 'expiry' && (
                      <div className="space-y-4">
                        <Label className="text-lg font-bold flex items-center gap-2">
                          <Calendar className="size-5 text-primary" /> Expiry Date
                        </Label>
                        <Input
                          type="datetime-local"
                          name="expiry_date"
                          value={createCourseData.expiry_date?.split('.')[0].slice(0, 16)}
                          onChange={handleChange}
                          className="py-6 rounded-2xl bg-slate-50 border-slate-200"
                        />
                      </div>
                    )}

                    <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                      <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                        <Info className="size-5" /> Important Note
                      </h3>
                      <p className="text-sm text-amber-800/80 leading-relaxed">
                        Pricing and validity settings cannot be easily changed once the course is published and students have enrolled. Ensure these values are correct before proceeding.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-2xl font-bold text-slate-800 block">Course Thumbnail</Label>
                      <p className="text-slate-500 mb-6">High-quality thumbnails improve click-through rates by up to 40%.</p>
                      <ThumbnailSelector onImageSelectAction={handleImageSelect} initialThumbnail={createCourseData.thumbnail_file} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Label className="text-2xl font-bold text-slate-800 block mb-2">Course Features</Label>

                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { id: 'allow_offline', label: 'Allow Offline Access', description: 'Enable students to download content for offline viewing' },
                        { id: 'allow_installments', label: 'Enable Installments', description: 'Allow students to pay in parts' },
                        { id: 'allow_trial', label: 'Promote with Trial', description: 'Give students a sneak peek of your content' },
                        { id: 'allow_live_classes', label: 'Conduct Live Classes', description: 'Engage with students in real-time' },
                        { id: 'allow_preview', label: 'Allow Course Preview', description: 'Showcase selected lessons for free' },
                        { id: 'limit_access', label: 'Limit Course Access', description: 'Restricts access to specific devices' },
                      ].map((feature) => (
                        <div key={feature.id} className="flex items-start gap-4 p-5 hover:bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 transition-all cursor-pointer group" onClick={() => handleCheckboxChange(feature.id, !createCourseData[feature.id])}>
                          <Checkbox
                            id={feature.id}
                            checked={createCourseData[feature.id]}
                            onCheckedChange={(v) => handleCheckboxChange(feature.id, !!v)}
                            className="mt-1 size-5 rounded-md"
                          />
                          <div className="space-y-1">
                            <Label htmlFor={feature.id} className="font-bold text-slate-700 cursor-pointer group-hover:text-primary transition-colors">{feature.label}</Label>
                            <p className="text-xs text-slate-500">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Controls */}
      <motion.footer
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-200 px-8 py-5 flex justify-between items-center z-50"
      >
        <div className="container max-w-5xl mx-auto flex justify-between items-center">
          <button
            disabled={currentStep === 1 || loading}
            onClick={prevStep}
            className="flex items-center gap-2 text-slate-600 font-bold hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <LucideArrowRight className="rotate-180 size-5" />
            Previous Step
          </button>

          <div className="flex gap-4">
            <Link href='/educator/courses'>
              <button className="px-8 py-3 text-slate-500 font-semibold hover:bg-slate-50 rounded-2xl transition-all">
                Cancel
              </button>
            </Link>
            <button
              onClick={nextStep}
              disabled={loading}
              className="bg-primary text-white font-bold px-10 py-3 rounded-2xl hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all flex items-center gap-2 min-w-[140px] justify-center"
            >
              {loading ? (
                <LoaderCircleIcon className="size-5 animate-spin" />
              ) : (
                <>
                  {currentStep === steps.length ? 'Create Course' : 'Continue'}
                  <LucideArrowRight className="size-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </motion.footer>
    </main>
  )
}
