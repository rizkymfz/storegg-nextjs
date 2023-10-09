import Link from 'next/link'
import React from 'react'

interface MenuFooterProps { 
    title : string;
    href?: string;
}

export default function MenuFooter(props: MenuFooterProps) {
    const { title, href='/' } = props;
  return (
    <li className='mb-6'>
        <Link href={href}>
            <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
        </Link>
    </li>
  )
}
