export default function Novedades () {
  const novedades = [
    {
      titulo: 'Rutas dinámicas:',
      descripcion: 'Las rutas dinámicas permiten que las páginas de Next.js tengan parámetros en la URL. Por ejemplo, si tienes una página de publicación de blog con una URL como /posts/[id], puedes usar la ruta dinámica para decirle a Next.js que hay un parámetro id en la URL. Luego, puedes acceder a ese parámetro en la página usando useRouter().'
    },
    {
      titulo: 'Rutas anidadas con directorios:',
      descripcion: 'Las rutas anidadas con directorios te permiten crear rutas anidadas para tus páginas. Por ejemplo, si tienes una página de publicación de blog con una URL como /blog/[slug]/[comment], puedes usar una ruta anidada para decirle a Next.js que hay dos parámetros en la URL: slug y comment.'
    },
    {
      titulo: 'Fetching de datos:',
      descripcion: 'Para recuperar datos en Next.js, puedes usar la función getStaticProps() o getServerSideProps(). La función getStaticProps() se utiliza para recuperar datos estáticos en tiempo de compilación, mientras que la función getServerSideProps() se utiliza para recuperar datos en tiempo de ejecución. Puedes usar estas funciones para recuperar datos de una API o de una base de datos y pasarlos como props a tus componentes.'
    },
    {
      titulo: 'React Server Components:',
      descripcion: 'Los componentes del servidor React son una nueva característica experimental en Next.js 13 que te permiten renderizar componentes React en el servidor. Esto puede mejorar significativamente el rendimiento y la velocidad de carga de tus aplicaciones web.'
    }
  ]
  return (
    <>
      {novedades.map(nov => (
        <article key={nov.titulo}>
          <h1 className=' text-xl text-green-600 '>
            {nov.titulo}
          </h1>
          <p className=' text-justify mx-6 '>
            {nov.descripcion}
          </p>
          <br />
        </article>
      ))}
      <h2>
        <a href='https://nextjs.org/blog/next-13' className=' hover:text-blue-500 '>
          Para mas informacion, puedes visitar su sitio oficial (Touch me)
        </a>
      </h2>
    </>
  )
}
