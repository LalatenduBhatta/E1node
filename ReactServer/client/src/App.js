import React, { useEffect, useState } from 'react'
import axios from "axios"
import Signup from './Signup'

function App() {
  const [data, setData] = useState({})
  //fetch
  // useEffect(() => {//componentDidMount
  //   fetch(" http://127.0.0.8:8000/student")
  //     .then(d => d.json())
  //     .then(data => setData(data))
  //     .catch(err => console.log(err))
  // }, [])

  //axios
  useEffect(() => {
    axios.get(" http://127.0.0.8:8000/student")
      .then(data => setData(data.data))
      .catch(err => console.log(err))
  }, [])

  // let arr = []
  // for (let key in data) {
  //   arr.push(<li>{key}:{data[key]}</li>)
  // }
  return (
    // <>
    //   <h1>Connecting with express server</h1>
    //   {/* {console.log(data)} */}
    //   {/* {arr} */}
    //   {Object.keys(data).map(e => {
    //     return <li>{e} : {data[e]}</li>
    //   })}
    // </>
    <>
      <Signup />
    </>
  )
}

export default App