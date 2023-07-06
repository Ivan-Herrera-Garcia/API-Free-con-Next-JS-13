'use client'
import { Suspense, useState } from 'react'
import { GiRaiseZombie } from 'react-icons/gi'
import { FcBiohazard } from 'react-icons/fc'
export function ButtonVerMas () {
  const band = Math.floor(Math.random() * 2)
  const bandera = Boolean(band)
  const [mas, setMas] = useState(bandera)
  return (
    <Suspense fallback={<h1>Cargando....</h1>}>
      <button onClick={() => setMas(!mas)}>
        {mas ? <GiRaiseZombie size={30} /> : <FcBiohazard size={30} />}
      </button>
    </Suspense>
  )
}
