// src/app/blog/page.tsx

 import { getAllPosts } from '../../../lib/posts';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="p-6 font-sans transition duration-">
      
      <h1 className="text-3xl  mb-6 font-bold  ">My Blog Posts</h1>
      <br />
      <ul className="space-y-4 grid grid-cols-4 gap-4 ">
        {posts.map((post) => (
          <li key={post.slug} className='transition-all duration-50 border-1 px-3 pb-5 rounded-md hover:border-4'>
            <Link href={`/blog/${post.slug}`}>
              <div className="text-xl  text-black transition-all duration-300 hover:text-blue-400  ">
                {post.title}
              </div>
              <div className="text-sm text-gray-400">{post.date}</div>
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <br />
   
    <Link rel="stylesheet" href="\portfolio"><button className='transition-all duration-50 border-2 px-7 py-3 text-lg text-black rounded-full font-bold hover:text-white hover:bg-blue-400 hover:border-4'>PORTFOLIO</button></Link>
     <Link rel="stylesheet" href="\WealthManagement"><button className='ml-5 transition-all duration-50 border-2 px-7 py-3 text-lg text-black rounded-full font-bold hover:text-white hover:bg-blue-400 hover:border-4'>WEALTH MANAGEMENT</button></Link>
      
    </main>
  );
}
