import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button
        {...props}
        className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        {title}
      </button>
    </div>
  )
}
