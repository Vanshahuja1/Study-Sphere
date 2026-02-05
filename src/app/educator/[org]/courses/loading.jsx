import { Skeleton } from "@/components/ui/skeleton"
export default function () {
    return <>
        <div className="container max-w-5xl mx-auto my-6">
            <div className="grid grid-cols-4 gap-5">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="border rounded-2xl p-3 space-y-3">
                        <Skeleton className="h-32 w-full rounded-xl" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-1/3" />
                    </div>
                ))}
            </div>
        </div>
    </>
}