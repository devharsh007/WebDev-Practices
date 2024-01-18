import React from 'react'
import { useParams } from 'react-router-dom'
// we can access the id here from main.jsx

function User() {
    const { UserId } = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-5 text-center'>
      User: {UserId}
    </div>
  )
}

export default User
