const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}
export default async function Post ({ params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article>
      <p className=' text-yellow-400 text-xs'>Post: {id}</p>
      <h1 className=' text-lg uppercase text-indigo-500 text-justify mx-6 -ml-1 '>
        {post.title}
      </h1>
      <p className=' text-justify mx-6 ml-0'>
        {post.body}
      </p>
    </article>
  )
}
