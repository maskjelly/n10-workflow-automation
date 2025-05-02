import { cn } from "@/lib/utils"
import { SquareDashedMousePointer } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Logo({
  fontSize = "text-2xl",
  iconSize = 28,
}: { fontSize?: string; iconSize?: number }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-extrabold flex items-center gap-2",
        fontSize
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 p-2">
        <SquareDashedMousePointer size={iconSize} className="stroke-white" />
      </div>
      <div className="flex items-center">
        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
          N8N
        </span>
        <span className="bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent">
          -AGENTS
        </span>
      </div>
    </Link>
  )
}