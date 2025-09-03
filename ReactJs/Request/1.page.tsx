// Enable client-side rendering for this component
'use client'

// Import necessary React hooks and libraries
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { exceptions } from '@/exceptions/exceptions'
import { useAlert } from '@/lib/hooks/useAlert'
import UnderConstraction from '@/components/gen/UnderConstraction'
import { hostName } from '../../../../env'
// Define the type for API response data
type ApiResponse = {
    message?: string
    data?: unknown
    error?: unknown
    status?: number
}

// Component to show alert messages using the useAlert hook
const ShowAlert = (message: string) => {
    useAlert({ icon: 'error', title: message })
}

// Main Page component
const Page = () => {
    // Extract the 'id' parameter from the URL using useParams
    const { id } = useParams<{ id: string }>()

    // State to store the API response data
    const [response, setResponse] = useState<ApiResponse | null>(null)

    // Function to send POST request to the SSO API endpoint
    const SendPostReq = async (params: {
        username: string,
        password: string,
        endpoint: string,
        tokenField: string,
        host: string,
    }): Promise<void> => {
        try {
            // Make POST request to /api/sso endpoint with tokenId in the request body
            const { data } = await axios.post<ApiResponse>('/api/sso', params)
            // Update state with the received response data
            setResponse(data)

            // Handle success response
            if (data?.message) {
                console.log('Success:', data.message)
            }
        } catch (err) {
            // Log the HTTP error to the console for debugging purposes
            console.log('HTTP ERROR IS', err)
            // Handle the error using the exceptions utility and show alert
            ShowAlert(exceptions(err))
        }
    }

    // Effect hook to trigger the API call when the component mounts or 'id' changes
    useEffect(() => {
        // Only send the request if 'id' parameter exists
        if (id) {
            SendPostReq({
                username: "admin",
                password: "Zxc!23$%",
                endpoint: "api/auth/login",
                tokenField: 'tokenId',
                host: hostName
            })
        }
    }, [id]) // Dependency array - effect runs when 'id' changes

    // Render the component UI
    return (
        <div className='w-full h-full'>
            {response && (
                <div className='p-4'>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

// Export the Page component as default export
export default Page