"use client"

import { Button } from "@/main/components/ui/button"
import { ToastAction } from "@/main/components/ui/toast"
import { useToast } from "@/main/components/ui/use-toast"

export function ToastDemo() {
    const { toast } = useToast()

    return (
        <Button
            variant="outline"
            onClick={() => {
                toast({
                    title: "Scheduled: Catch up ",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                })
            }}
        >
            Add to calendar
        </Button>
    )
}
