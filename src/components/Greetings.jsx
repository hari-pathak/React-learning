import React from 'react'

const Greetings = ({name, age}) => {
  return (
    <div>
        <h2>Hello, {name}</h2>
        <p>Age: {age}</p>
    </div>
  )
}

export default Greetings