import Image from 'next/image'
import imagen from '../public/next.svg'
export default function HomePage () {
  return (
    <div>
      <h1 className=' text-3xl flex'>
        <a href='https://nextjs.org/blog/next-13' className=' hover:text-lime-400 '>
          Un par de nuevas funcionalidades de
        </a>
        <Image src={imagen} alt='Next' className='invert w-32 h-32 mr-10 -my-2 md:ml-4 md:-my-20 md:w-52 md:h-52' />
      </h1>
      <br />
      <ul className='text-xl list-disc ml-5'>
        <li>
          Rutas dinamicas
        </li>
        <li>
          Rutas anidadas con directorios
        </li>
        <li>
          Fetching de datos (Ejemplo con Posts)
        </li>
        <li>
          React Server Components
        </li>
      </ul>

    </div>
  )
}
