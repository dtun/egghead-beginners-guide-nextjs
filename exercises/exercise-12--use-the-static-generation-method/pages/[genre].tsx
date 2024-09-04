import type { GetStaticProps, GetStaticPaths } from 'next'

type Props = {
  genre: string
}

const Genre = ({ genre }: Props) => {
  return <h1>{genre}</h1>
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const genre = context.params?.['genre'] as string

  if (!genre) return { notFound: true }

  return { props: { genre }, revalidate: 5 }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ['rock', 'country', 'pop'].map((genre) => {
      return {
        params: { genre }
      }
    }),
    fallback: false
  }
}

export default Genre
