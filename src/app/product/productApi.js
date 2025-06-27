import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants/api_urls";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),

    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),

    addPost: builder.mutation({
      query: (q) => ({
        url: "/posts",
        method: "POST",
        body: q,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});
export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation } = productApi;
