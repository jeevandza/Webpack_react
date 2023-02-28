import React from 'react'

export function TestRoutes() {
  const [count, setCount] = React.useState<number>(0)

  return (
    <div>
      <h1>test webpack typescript--</h1>
      <button onClick={() => setCount(count + 1)}>Test soft refresh</button>
      <div>{count}</div>
    </div>
  )
}
