'use client'
export const exceptions = (data: unknown) => {
    if (data && typeof data === 'object' && 'message' in data) {
        return (data as { message: string }).message
    }
    return 'An error occurred'
}