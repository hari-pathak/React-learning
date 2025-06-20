import React from 'react'

const UserDetails = ({userDetails, marriedDetails}) => {
  return (
    <div>
        <p>{userDetails.name} is {userDetails.age} years old.</p>

     {marriedDetails.map((item, index) => (
        <div key={index} className="mt-2 p-2 border rounded bg-gray-100">
          {Object.entries(item).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default UserDetails


//Loops over the marriedDetails array using .map().
//Inside that loop, it uses Object.entries() to loop over the key-value paris of each object
//It then prints each key and value.