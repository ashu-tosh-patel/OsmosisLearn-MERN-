import React, { useEffect, useState } from "react"


import List from './List'
const Body = () => {


  const [data, setData] = useState([
    {
      assets_title: 'First One',
      file_type: '.mp4',
      date: '10-01-2003'
    }
  ]);
  useEffect(() => {
    fetch("/asset")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
  }, [])

  return (
    <>
      <h2>First part</h2>
      <List cards={data} />
      <h2>First part</h2>
      <List cards={data} />
      <h2>First part</h2>
      <List cards={data} />
    </>
  )
};

export default Body;
