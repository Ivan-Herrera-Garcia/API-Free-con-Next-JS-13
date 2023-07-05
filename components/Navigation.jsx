import Link from 'next/link'

const links = [{
  label: 'Home',
  route: '/'
},
{
  label: 'About',
  route: '/about'
},
{
  label: 'Posts',
  route: '/post'
}]

export function Navigation () {
  return (
    <header>
      <nav>
        <ul className=' no-underline flex mx-8 text-xl  '>
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
