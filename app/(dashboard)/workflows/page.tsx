import { GetWorkflowsForUsers } from "@/app/actions/workflows/getWorkflowsForUsers";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, InboxIcon } from "lucide-react";
import React, { Suspense } from "react";
import { CreateWorkflowDialog } from "./_components/CreateWorkflowDialog";

export default function page() {
    return (
        <div className="flex-1 flex flex-col h-full p-6 bg-background">
            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-3xl font-semibold tracking-tight">Workflows</h1>
                    <p className="text-muted-foreground text-base">Manage your workflows seamlessly</p>
                </div>
                <div>
                    <CreateWorkflowDialog />
                </div>
            </div>
            <div className="flex-1 py-6">
                <Suspense fallback={<UserWorkFlowsSkeleton />}>
                    <UserWorkFlows />
                </Suspense>
            </div>
        </div>
    )
}

function UserWorkFlowsSkeleton() {
    return (
        <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-40 w-full rounded-xl shadow-md" />
            ))}
        </div>
    )
}

async function UserWorkFlows() {
    const workflows = await GetWorkflowsForUsers()

    if (!workflows) {
        return (
            <Alert variant="destructive" className="max-w-md mx-auto p-8 rounded-2xl shadow-lg">
                <AlertCircle className="w-6 h-6 text-destructive" />
                <div className="ml-3">
                    <AlertTitle className="font-semibold text-lg">Error loading workflows</AlertTitle>
                    <AlertDescription className="text-sm text-muted-foreground mt-2">
                        Oops! Something went wrong, or no workflows were found.
                    </AlertDescription>
                </div>
            </Alert>
        )
    }
    if (workflows.length === 0) {
        return (
            <div className="flex flex-col gap-8 h-full items-center justify-center text-center">
                <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
                    <InboxIcon size={40} className="stroke-primary" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-xl">No Workflows Running</p>
                    <p className="text-muted-foreground text-base">Click the button below to create a new workflow</p>
                </div>
                <CreateWorkflowDialog triggerText="Create your first workflow" />
            </div>
        )
    }
}