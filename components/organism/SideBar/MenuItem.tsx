import Image from 'next/image'
import React from 'react'
import cx from 'classnames';
import Link from 'next/link';

interface menuItemProps {
    title: string,
    icon: string,
    active?: boolean,
    href: string
}
export default function MenuItem(props: menuItemProps) {
    const { title, icon, active, href } = props;
    const classItem = cx({
        'item': true,
        'mb-30': true,
        'active': active,
    });

  return (
    <div className={classItem}>
        <div className="me-3">
            <Image src={`/icon/${icon}.svg`} width={25} height={25} />
        </div>
        <p className="item-title m-0">
            <Link href={href}>
                <a className="text-lg text-decoration-none">{title}</a>
            </Link>
        </p>
    </div>
  )
}
