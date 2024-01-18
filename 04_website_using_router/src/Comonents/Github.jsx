import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/devharsh007')
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                setData(data);
        })
    }, [])
  return (
    <div>
      <img src={data.avatar_url} className='w-52 h-52' alt="" />
          <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers : {data.followers}</div>
    </div>
  )
}

export default Github
