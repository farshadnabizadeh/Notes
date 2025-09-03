'use client'

import { useParams, useSearchParams } from 'next/navigation';
import { getToken } from '@/lib/requests/token';
export default function RequestPage() {
    // Route params
    const params = useParams();
    const slug = params.slug as string[];

    // Query params
    const searchParams = useSearchParams();
    const foo = searchParams.get('foo');
    const bar = searchParams.get('bar');

    return (
        <div className='text-black'>
            <h1>Slug: {slug.join('/')}</h1>
            <p>Foo: {foo}</p>
            <p>Bar: {bar}</p>
        </div>
    );
}
