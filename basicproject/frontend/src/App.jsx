import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
      console.log(setJokes)
    })
    .catch((error)=>{
      console.log(error);
    })
  })
  return (
    <>
   <h1>Hello Anushka!!</h1>
   <p>Jokes:{jokes.length}</p>
   {/*if we use {} we need to return so use ()*/}
   {
    jokes.map((joke,index)=>(
      <div key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      </div>
    ))
   }
    </>
  )
}

export default App
