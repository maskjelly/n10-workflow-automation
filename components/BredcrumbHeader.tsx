"use client"

import { usePathname } from "next/navigation"
import React from "react"

import {
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbItem,
    BreadcrumbList
} from "./ui/breadcrumb";
import { MobileSideBar } from "./Sidebar";

export default function BreadCrumbHeader() {
    const pathname = usePathname();
    const path = pathname == "/" ? [""] : pathname?.split("/")
    return (
        <div className="flex items-center flex-start">
            <MobileSideBar/>
            <Breadcrumb>
                <BreadcrumbList>{
                    path.map((path, index) => (
                        <React.Fragment key={index}>l
                            <BreadcrumbItem>
                                <BreadcrumbLink className="capitalize" href={`/${path}`}>
                                    {path === "" ? "home" : path}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))
                }</BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}