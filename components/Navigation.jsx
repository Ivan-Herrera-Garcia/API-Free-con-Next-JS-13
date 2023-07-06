import Link from 'next/link'

const links = [{
  label: 'Inicio',
  route: '/'
},
{
  label: 'Novedades',
  route: '/novedades'
},
{
  label: 'Publicaciones',
  route: '/post'
},
{
  label: 'Acerca',
  route: '/about'
}]

export function Navigation () {
  return (
    <header>
      <nav>
        <ul className=' flex mx-8 text-xl  '>
          {links.map(({ label, route }) => (
            <li key={route} className=' m-3 hover:text-cyan-600'>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
