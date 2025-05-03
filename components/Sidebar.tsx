"use client";

import { Coins, CreditCard, HomeIcon, Layers2 } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/workflows", label: "Workflows", icon: Layers2 },
    { href: "/credentials", label: "Credentials", icon: CreditCard },
    { href: "/billing", label: "Billing", icon: Coins },
];

export function DesktopSidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:block min-w-[280px] max-w-[280px] h-screen overflow-y-auto bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-200 border-r-2 border-emerald-100 dark:border-emerald-900">
            <div className="flex items-center justify-center gap-2 border-b border-emerald-100 dark:border-emerald-900 p-4">
                <Logo />
            </div>
            <div className="p-2 text-gray-600 dark:text-emerald-300 font-medium">TODO Credits</div>

            <nav className="flex flex-col p-2 space-y-1">
                {routes.map((route) => {
                    const isActive = pathname === route.href;
                    return (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                                    : "hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950 dark:hover:text-emerald-100"
                            )}
                        >
                            <route.icon className="h-5 w-5 stroke-current" />
                            <span>{route.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

export function MobileSideBar() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-200 border-t-2 border-emerald-100 dark:border-emerald-900">
            <nav className="flex justify-around p-2">
                {routes.map((route) => {
                    const isActive = pathname === route.href;
                    return (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "flex flex-col items-center gap-1 px-2 py-2 text-xs font-medium transition-colors",
                                isActive
                                    ? "text-emerald-800 dark:text-emerald-200"
                                    : "hover:text-emerald-700 dark:hover:text-emerald-100"
                            )}
                        >
                            <route.icon className="h-6 w-6 stroke-current" />
                            <span>{route.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
