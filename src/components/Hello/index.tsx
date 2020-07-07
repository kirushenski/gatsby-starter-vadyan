import React, { useState } from 'react'

interface HelloProps {
  children: React.ReactNode
  defaultValue?: number
}

const Hello = ({ children, defaultValue = 0 }: HelloProps) => {
  const [count, setCount] = useState(defaultValue)
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Hello, {children}! Click me
      </button>
      <p>You clidked: {count} times</p>
    </div>
  )
}

export default Hello
