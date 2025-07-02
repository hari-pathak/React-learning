import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants/api_urls";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Posts"],
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
      invalidatesTags: ["Posts"],
    }),


     updatePost: builder.mutation({
      query: (q) => ({
        url: `/posts/${q.id}`,
        method: "PUT",
        body: q,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});
export const { useGetPostsQuery, useGetPostByIdQuery, useAddPostMutation, useUpdatePostMutation  } = productApi;
