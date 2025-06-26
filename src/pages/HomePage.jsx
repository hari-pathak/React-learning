import React from 'react'
import { useGetPostsQuery } from '../app/product/productApi'
import { NavLink } from 'react-router-dom';

const HomePage = () => {

  const {data, isLoading, isError, isFetching} = useGetPostsQuery();
  console.log({ isLoading, isFetching, data });

  

  

  return (
   <>
   
   <nav className='bg-red-300 w-full mx-auto'>
    <div className='flex items-center justify-between max-w-7xl mx-auto py-3'>
        <img className='w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1749366685038-0acf2da41cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <ul className='flex items-center gap-6'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <li>Skills</li>
        <li>Contact</li>
    </ul>
    </div>
   </nav>


   <div>

    {isLoading && <p>Loading Posts...</p>}

    {isError && (
      <p>Error fetching posts</p>
    )}

      {!isLoading && !isError && data?.map((post) => (
        <div key={post.id}>{post.userId}. {post.title}</div>
      ))}

   </div>

   </>
  )
}

export default HomePage