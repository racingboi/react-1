import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(function (response) {
        setData(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        // Handle errors
        console.log(error);
      });
  }, []);

  return (
    <>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.views}</p>

        </div>
      ))}
    </>
  );
}
