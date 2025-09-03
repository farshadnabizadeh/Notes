// src/lib/api-utils.ts
import axios from 'axios'

interface ApiRequest {
    tokenId?: string
    token?: string
    accessToken?: string
    [key: string]: unknown // allow any other properties
}

interface ApiConfig {
    endpoint: string
    tokenField?: string // 'tokenId', 'token', 'accessToken', etc.
    host: string
}

export async function makeApiRequest(body: ApiRequest, config: ApiConfig) {
    const { endpoint, tokenField = 'tokenId', host } = config

    // Get token value dynamically
    const tokenValue = body[tokenField]

    try {
        const res = await axios.post(
            `${host}${endpoint}`,
            body,
            tokenValue ? {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenValue}`
                }
            } : {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        return { data: res.data, status: res.status, error: null }
    } catch (error: unknown) {
        console.log('HTTP ERROR:', error)
    }
}