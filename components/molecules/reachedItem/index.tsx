import React from 'react'

interface reachedItemProps {
    counter: string;
    title: string;
}

export default function ReachedItem(props: reachedItemProps) {
    const { counter, title } = props;
  return (
    <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{counter}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{title}</p>
    </div>
  )
}
