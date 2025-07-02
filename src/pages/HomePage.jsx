import React from 'react'
import { useGetPostsQuery } from '../app/product/productApi'
import { NavLink, useNavigate } from 'react-router-dom';

const HomePage = () => {


  const nav = useNavigate();

  const {data, isLoading, isError, isFetching} = useGetPostsQuery();
  console.log({ isLoading, isFetching, data });

  return (
   <>
   
   <div>

    {isLoading && <p>Loading Posts...</p>}

    {isError && (
      <p>Error fetching posts</p>
    )}

      {!isLoading && !isError && data?.map((post) => (
        <div className='hover:cursor-pointer flex flex-col max-w-2xl mx-auto border border-gray-300 py-10 px-5 items-center justify-center bg-green-200 hover:bg-green-500 my-8 ' onClick={() => nav(`post/${post.id}`)} key={post.id}>{post.id}. {post.userId}. {post.title}</div>
      ))}

   </div>

   </>
  )
}

export default HomePage