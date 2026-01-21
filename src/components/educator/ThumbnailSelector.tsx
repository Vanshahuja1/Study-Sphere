"use client"

import React, { useState, useRef, useEffect } from "react"
import { Camera, Upload, X, RefreshCw, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ThumbnailSelectorProps {
    onImageSelectAction: (file: File | null) => void
    initialThumbnail?: string
}

export const ThumbnailSelector: React.FC<ThumbnailSelectorProps> = ({
    onImageSelectAction,
    initialThumbnail
}) => {
    const [mode, setMode] = useState<"idle" | "camera" | "preview">("idle")
    const [previewUrl, setPreviewUrl] = useState<string | null>(initialThumbnail || null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isCameraReady, setIsCameraReady] = useState(false)

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream
            stream.getTracks().forEach(track => track.stop())
            videoRef.current.srcObject = null
        }
    }

    const startCamera = async () => {
        try {
            setMode("camera")
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "user", width: 1280, height: 720 }
            })
            if (videoRef.current) {
                videoRef.current.srcObject = stream
                setIsCameraReady(true)
            }
        } catch (err) {
            console.error("Error accessing camera:", err)
            setMode("idle")
            alert("Could not access camera. Please check permissions.")
        }
    }

    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current
            const canvas = canvasRef.current
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            const ctx = canvas.getContext("2d")
            if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
                canvas.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], "thumbnail.jpg", { type: "image/jpeg" })
                        const url = URL.createObjectURL(blob)
                        setPreviewUrl(url)
                        onImageSelectAction(file)
                        setMode("preview")
                        stopCamera()
                    }
                }, "image/jpeg", 0.9)
            }
        }
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setPreviewUrl(url)
            onImageSelectAction(file)
            setMode("preview")
        }
    }

    const reset = () => {
        stopCamera()
        setPreviewUrl(null)
        onImageSelectAction(null)
        setMode("idle")
    }

    useEffect(() => {
        return () => stopCamera()
    }, [])

    return (
        <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
                {mode === "idle" && (
                    <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="border-2 border-dashed border-indigo-200 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 bg-indigo-50/30 hover:bg-indigo-50/50 transition-colors"
                    >
                        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                            <Upload className="w-10 h-10 text-indigo-500" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-800">Add course thumbnail</h3>
                            <p className="text-sm text-gray-500 mt-1">Capture a fresh photo or upload a file</p>
                        </div>
                        <div className="flex gap-4 w-full">
                            <Button
                                onClick={startCamera}
                                className="flex-1 bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 rounded-2xl py-6"
                            >
                                <Camera className="mr-2 w-5 h-5" /> Take Photo
                            </Button>
                            <div className="flex-1 relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <Button
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl py-6"
                                >
                                    <Upload className="mr-2 w-5 h-5" /> Upload
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {mode === "camera" && (
                    <motion.div
                        key="camera"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative rounded-3xl overflow-hidden bg-black shadow-2xl aspect-video"
                    >
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-6 flex justify-center items-center gap-6">
                            <button
                                onClick={() => { stopCamera(); setMode("idle"); }}
                                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <button
                                onClick={capturePhoto}
                                disabled={!isCameraReady}
                                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                            >
                                <div className="w-12 h-12 border-4 border-indigo-600 rounded-full" />
                            </button>
                            <div className="w-12 h-12" /> {/* Spacer */}
                        </div>
                        <canvas ref={canvasRef} className="hidden" />
                    </motion.div>
                )}

                {mode === "preview" && previewUrl && (
                    <motion.div
                        key="preview"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative group rounded-3xl overflow-hidden bg-gray-100 shadow-xl aspect-video"
                    >
                        <img
                            src={previewUrl}
                            alt="Thumbnail preview"
                            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                            <Button
                                onClick={reset}
                                variant="secondary"
                                className="rounded-full bg-white/90 hover:bg-white"
                            >
                                <RefreshCw className="mr-2 w-4 h-4" /> Change
                            </Button>
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                                <Check className="w-6 h-6" />
                            </div>
                        </div>
                        <button
                            onClick={reset}
                            className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/70"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
