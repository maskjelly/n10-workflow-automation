"use client"

import { Coins, CreditCard, HomeIcon, Layers2 } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you have a utility for className concatenation

const routes = [
    {
        href: "/",
        label: "Home",
        icon: HomeIcon,
    },
    {
        href: "/workflows",
        label: "Workflows",
        icon: Layers2,
    },
    {
        href: "/credentials",
        label: "Credentials",
        icon: CreditCard,
    },
    {
        href: "/billing",
        label: "Billing",
        icon: Coins,
    },
];

export function DesktopSidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:block min-w-[280px] max-w-[280px] h-screen overflow-y-auto bg-primary/5 dark:bg-secondary/30 text-muted-foreground dark:text-foreground border-r-2 border-separate">
            <div className="flex items-center justify-center gap-2 border-b border-separate p-4">
                <Logo />
            </div>
            <div className="p-2">TODO Credits </div>

            <nav className="flex flex-col p-2 space-y-1">
                {routes.map((route) => {
                    const isActive = pathname === route.href || (route.href !== "/" && pathname.startsWith(route.href));
                    return (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                                    : "hover:bg-primary/5 hover:text-primary dark:hover:bg-secondary/50 dark:hover:text-foreground"
                            )}
                        >
                            <route.icon className="h-5 w-5" />
                            <span>{route.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}