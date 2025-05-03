"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";

export function CreateWorkflowDialog({ triggerText }: { triggerText?: string }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>{triggerText ?? "Create Workflow"}</Button>
            </DialogTrigger>
        </Dialog>
    )
}