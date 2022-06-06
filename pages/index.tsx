import type { NextPage } from 'next'
import Layout from '../components/layout'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    
      <Layout pageTitle='Homepage'>
        <Image src="/profilepicture1.jpg" width={200} height={200} alt="profile" />
        <h1>Welcome Fatih</h1>
      </Layout>
      
  )
}

export default Home
