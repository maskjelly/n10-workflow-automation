"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { getSession } from "next-auth/react"
import { redirect } from "next/navigation"

export async function GetWorkflowsForUsers() {
    const session = await auth()

    if (!session?.user) {
        redirect("/signin")
    }

    const userId = session.user.id;
    console.log(userId)
    return prisma.workflow.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: "asc"
        }
    })

}