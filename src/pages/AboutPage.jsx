import React from "react";
import { useGetPostsQuery } from "../app/product/productApi";

const AboutPage = () => {
  const { data, isLoading, isError,isFetching  } = useGetPostsQuery();

  console.log({ isLoading, isFetching, data });

  return (
    <div>
      {isLoading && <p>Loading posts…</p>}
      {isError && <p>Error loading posts</p>}
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default AboutPage;
