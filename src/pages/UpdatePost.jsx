import React from "react";
import { useUpdatePostMutation } from "../app/product/productApi";
import { useFormik } from "formik";
import * as Yup from "yup";

const updatePostSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  body: Yup.string().required("Body is required"),
});

const UpdatePost = () => {
  const [updatePost, { isLoading }] = useUpdatePostMutation();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      id: 1, // You can make this dynamic later
      title: "",
      body: "",
      userId: 1,
    },

    validationSchema: updatePostSchema,

    onSubmit: async (val) => {
      try {
        const response = await updatePost(val).unwrap();
        console.log("✅ Post updated successfully:", response);
        resetForm();
      } catch (err) {
        console.log("❌ Error while updating post:", err);
      }
    },
  });

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={values.title}
        />
        {errors.title && touched.title && (
          <h2 className="text-red-600 ml-2 text-xs">{errors.title}</h2>
        )}

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Body"
          name="body"
          onChange={handleChange}
          value={values.body}
        />
        {errors.body && touched.body && (
          <h2 className="text-red-600 ml-2 text-xs">{errors.body}</h2>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          {isLoading ? "Updating..." : "Update Post"}
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
