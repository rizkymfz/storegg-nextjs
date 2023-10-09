import React from 'react'
import cx from 'classnames'

interface buttonTabProps {
    title:string,
    active?:boolean
}
export default function ButtonTab(props: buttonTabProps) {
    const { title, active } = props;
    const btnClass = cx ({
        'btn btn-status rounded-pill text-sm me-3' : true,
        'btn-active': active
    })
  return (
    <a data-filter="*" className={btnClass}>
       {title}
    </a>
  )
}
