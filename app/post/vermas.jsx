'use client'
import { useState } from 'react'
export function ButtonVerMas () {
  const [mas, setMas] = useState(false)
  return (
    <button onClick={() => setMas(!mas)}>
      {mas ? '❤️' : '💔'}
    </button>
  )
}
