import React from 'react'
import Button from '../../styled/base/Button/Button'

export default function ActionHeader({title, count = 0, cta, ctaAction}) {
  return (
    <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
    <div className="flex-1 min-w-0">
      <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
        {title}{" "}
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
          {count}
        </span>
      </h1>
    </div>
    <div className="mt-4 flex sm:mt-0 sm:ml-4">
      <Button onClick={ctaAction} type="button">
        {cta}
      </Button>
    </div>
  </div>
  )
}
