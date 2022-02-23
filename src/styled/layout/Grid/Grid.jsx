import React from 'react'

export default function Grid({children}) {
  return <div className="lg:grid lg:grid-cols-12 lg:gap-8 my-16">{children}</div>
}
