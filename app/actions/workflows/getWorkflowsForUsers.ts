"use server"

import { prisma } from "@/lib/prisma"
import { getSession } from "next-auth/react"
import { redirect } from "next/navigation"

export async function GetWorkflowsForUsers() {
    const session = await getSession()

    const userId = session?.user?.id;

    if (!session) {
        redirect("/signin")
    }

    return prisma.Workflow.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt :"asc"
        }
    })

}