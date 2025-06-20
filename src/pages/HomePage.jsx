import React from 'react'

const HomePage = () => {
  return (
   <>
   
   <nav className='bg-red-300 w-full mx-auto'>
    <div className='flex items-center justify-between max-w-7xl mx-auto py-3'>
        <img className='w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1749366685038-0acf2da41cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <ul className='flex items-center gap-6'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Contact</li>
    </ul>
    </div>
   </nav>

   </>
  )
}

export default HomePage