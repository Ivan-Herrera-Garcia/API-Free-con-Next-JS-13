import { ButtonVerMas } from './vermas'
import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}
export default async function ListOfPost () {
  const posts = await fetchPosts()

  return (
    <>
      {posts.slice(0, 10).map(post => (
        <article key={post.id}>
          <Link href='/post/[id]' as={`/post/${post.id}`}>
            <h2 className=' text-xl uppercase text-green-600 '>
              {post.title}
            </h2>
          </Link>
          <p className=' text-justify mx-8 ml-1'>
            {post.body}
            <br />
            <ButtonVerMas />

          </p>
        </article>
      ))}
    </>
  )
}
