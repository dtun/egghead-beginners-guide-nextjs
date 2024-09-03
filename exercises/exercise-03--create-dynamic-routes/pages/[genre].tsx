import { useRouter } from 'next/router'

const Genre = () => {
  const router = useRouter()
  const genre = router.query['genre']

  return <h1>{genre}</h1>
}

export default Genre
