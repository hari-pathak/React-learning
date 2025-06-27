import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../app/product/productApi';

const PostDetails = () => {

    const {id} = useParams();

    console.log("id from url", id)


    const {data, isLoading, isFetching, isError} = useGetPostByIdQuery(id);

    console.log( `data of id ${id}`, data);

  return (
    <div className='max-w-2xl mx-auto my-10 px-5 py-10 border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center bg-blue-200 hover:bg-blue-600 hover:cursor-pointer'>
        <p>{data?.userId}</p>
        <h2>{data?.title}</h2>
        <p className='text-center'>{data?.body}</p>
    </div>
  )
}

export default PostDetails