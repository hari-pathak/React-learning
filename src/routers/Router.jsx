import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import PostDetails from '../pages/PostDetails'
import AddPost from '../pages/AddPost'

const Router = () => {
  return (
   <Routes>

    <Route path='/' element={<HomePage/>} />
    <Route  path='/about' element={<AboutPage/>}/>
    <Route path='/post/:id' element={<PostDetails/>}/>
    <Route  path='/addPost' element={<AddPost/>}/>
    
    

   </Routes>
  )
}

export default Router