import React from 'react'
import { useAddPostMutation } from '../app/product/productApi';
import { useFormik } from 'formik';

const AddPost = () => {


    const [addPost, {isLoading, isSuccess, isError}] = useAddPostMutation();

    const {values, errors, handleSubmit, handleChange, touched, resetForm} = useFormik({
        initialValues: {
            title: "",
            body: "",
            userId:1
        },

        onSubmit: async(val) => {
            try{

                const response = await addPost(val).unwrap();
                console.log("Post added successfully", response);
                resetForm();

            } catch (err){
                console.log("Error while adding post", err);
            }
        }
    })

  return (
     <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Title"
          name='title'
          onChange={handleChange}
          value={values.title}
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Body"
          type="text"
        name='body' 
        onChange={handleChange}
        value={values.body}
         
        />
        <button
          type="submit"
            disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
         Create Post
        </button>
      </form>

     
    </div>
  )
}

export default AddPost



// value={values.title}

//     values is a Formik object that stores the current form state.

//     values.title holds the current value of the input field named title.

// This binds the input field's value to Formik’s internal state.

// 2. onChange={handleChange}

//     handleChange is a Formik function that automatically updates values when the input changes.

//     It works by reading the name of the input (name='title') and updating the matching value (values.title).

// ✅ Together, these two allow Formik to control the form input and keep the state in sync.


//const response = await addPost(val).unwrap(); // Get raw response or throw error

//So:

 //   Without unwrap(), you'd need to manually inspect .error or .data.

  //  With unwrap(), you can directly handle success or failure with try/catch.


  //value={values.title}	Binds input to Formik state
    // onChange={handleChange}	Updates Formik state on input change
    // unwrap()	Simplifies error/success handling in RTK Query mutations