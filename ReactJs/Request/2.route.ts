// src/app/api/sso/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { makeApiRequest } from '@/lib/requests/post/api-utils'
import { hostName } from '../../../../env'

export async function POST(req: NextRequest) {
    const body = await req.json()

    const result = await makeApiRequest({
        username: body.username,
        password: body.password
    }, {
        endpoint: body.endpoint,
        tokenField: body.tokenField,
        host: hostName
    })

    if (result) {
        return NextResponse.json(result.data, { status: result.status })
    }

    // Fallback in case result is undefined
    return NextResponse.json({ message: 'No response data' }, { status: 500 })
}