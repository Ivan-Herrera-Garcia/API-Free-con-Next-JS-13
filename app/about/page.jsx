import Link from 'next/link'
import { ImGithub, ImInstagram, ImLinkedin, ImYoutube } from 'react-icons/im'
export default function AboutPage () {
  return (
    <section>
      <h1 className=' text-4xl '>
        Hola! Soy Ivan Herrera Garcia 🤙
      </h1>
      <br />
      <p className=' text-lg '>
        Soy un desarrollador web y he trabajado con los siguientes lenguajes de programacion:
      </p>
      <br />
      <ul className=' list-disc ml-4'>
        <li>
          C#
        </li>
        <li>
          C++
        </li>
        <li>
          Javascript
        </li>
        <li>
          Java
        </li>
        <li>
          Python
        </li>
      </ul>
      <br />
      <div className='flex justify-between w-2/12'>
        <Link href='https://github.com/Ivan-Herrera-Garcia'>
          <ImGithub size={30} color='white' />
        </Link>
        <Link href='https://www.instagram.com/bellkhen/'>
          <ImInstagram size={30} />
        </Link>
        <Link href='https://www.linkedin.com/in/ivan-herrera-garcia-8b64411b8/'>
          <ImLinkedin size={30} className=' text-blue-500 ' />
        </Link>
        <Link href='https://www.youtube.com/channel/UC7SFibxSNEeu8flL5oqEUWQ'>
          <ImYoutube size={35} className=' text-red-500 ' />
        </Link>
      </div>
    </section>
  )
}
