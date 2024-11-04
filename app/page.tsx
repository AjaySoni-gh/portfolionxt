import Intro from '@/components/ui/intro'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'


const Home = () => {
const content='#this is heading'
  return (
    <section className='py-24'>
    <div className='container max-w-3xl'>
    <Intro />
    <MDXRemote source={content} />
    </div>
    </section>
  )
}

export default Home
