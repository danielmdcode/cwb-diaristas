"use client"

import { X } from "lucide-react"
import { useToastStore } from "@/stores/use-toast-store"
import { cn } from "@/lib/utils"

export function Toaster() {
  const { toasts, removeToast } = useToastStore()

  return (
    <div className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map(({ id, title, description, type }) => (
        <div
          key={id}
          className={cn(
            "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
            type === "destructive"
              ? "border-destructive bg-destructive text-destructive-foreground"
              : "border bg-background text-foreground"
          )}
        >
          <div className="grid gap-1">
            <div className="text-sm font-semibold">{title}</div>
            {description && (
              <div className="text-sm opacity-90">{description}</div>
            )}
          </div>
          <button
            className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
            onClick={() => removeToast(id)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
} 