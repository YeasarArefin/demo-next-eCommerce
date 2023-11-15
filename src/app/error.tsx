'use client'

import { Button } from "@mantine/core"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    useEffect(() => {
        console.error(error)
    }, [error])
    return (
        <div className="flex flex-col gap-y-3 items-center">
            <h2 className="text-lg">Something went wrong!</h2>
            <Button w={110} onClick={() => reset()}>
                Try again
            </Button>
        </div>
    )
}
