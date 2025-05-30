import BreadCrumbHeader from "@/components/BredcrumbHeader";
import { DesktopSidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/SignedInComponent";
import { ModeToggle } from "@/components/theme-mod-toggle";
import { Separator } from "@/components/ui/separator";
import React from "react"

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <DesktopSidebar />
            <div className="flex flex-col flex-1 min-h-screen">
                <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
                    <BreadCrumbHeader />
                    <div className="gap-1 flex items-center">
                        <ModeToggle />
                        <UserProfile/>
                    </div>
                </header>
                <Separator />
                <div className="overflow-auto">
                    <div className="flex-1 container py-4 text-accent-foreground">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default layout;