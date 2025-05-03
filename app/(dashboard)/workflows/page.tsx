import { GetWorkflowsForUsers } from "@/app/actions/workflows/getWorkflowsForUsers";
import { Alert } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { waitFor } from "@/lib/helper/waitFor";
import React, { Suspense } from "react";

export default function page() {
    return (
        <div className="flex-1 flex flex-col h-full">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h1 className="text-3xl">Workflows</h1>
                    <p className="text-muted-foreground">manage your workflows</p>
                </div>
            </div>
            <div className="h-full py-6">
                <Suspense fallback={<UserWorkFlowsSkeleton />}>
                    <UserWorkFlows />
                </Suspense>
            </div>
        </div>
    )
}


function UserWorkFlowsSkeleton() {
    return (
        <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-32 w-full" />
            ))}
        </div>
    )
}


async function UserWorkFlows() {

    try {
        const workflows = await GetWorkflowsForUsers()
        return (
            <div>{workflows}</div>
        )
    } catch ({ e }: any) {
        Alert(e);
    }

}