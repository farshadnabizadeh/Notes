'use client'
import React, { FC } from 'react'
import { usePathname } from 'next/navigation'

interface Props {
    children?: React.ReactNode;
    wrapper?: string;
}

const HiderComponent: FC<Props> = ({ children, wrapper }) => {
    const pathname = usePathname()
    const pathNames = [
        '/register',
        '/login',
        '/confirm',
        '/register/init'
    ]

    if (pathNames.includes(pathname)) {
        return null;
    }

    return (
        <article className={wrapper}>
            {children}
        </article>
    )
}

export default HiderComponent