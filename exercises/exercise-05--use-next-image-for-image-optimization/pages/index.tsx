// ✍️ import the Image component from 'next/image'
import Image from 'next/image'

// ✍️ import "lazar.png" statically
import lazar from '../lazar.png'

const TREE_URL =
  'https://images.immediate.co.uk/production/volatile/sites/10/2023/06/2048x1365-Oak-trees-SEO-GettyImages-90590330-b6bfe8b.jpg?quality=90&resize=940,627'

const Home = () => {
  return (
    <>
      <Image alt="lazar, the man" src={lazar} />
      <Image alt="a tree" src={TREE_URL} />
    </>
  )
}

export default Home
