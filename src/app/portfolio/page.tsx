import Link from 'next/link'
import React from 'react'

export default function MyPortfolio  () {
    const content=[
    {Title:'Blog',description:'My blog page',link:'blog'},{}


]

  return (<main className='font-sans '>
<h1 className='text-3xl  mb-6 font-bold p-6'>Portfolio</h1>


<ul >
    {content.map((s,key)=><li key={key} className='ml-1 text-lg border p-4 rounded-lg shadow font-semibold  "
'>Title:{s.Title}<br /> Description:{s.description}<br/><Link href='\blog'>Blog link:{s.link}</Link></li>)}
</ul>


    </main>
  )
}
