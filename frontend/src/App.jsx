import { useState } from 'react'
import './App.css'

function App() {
const [jokes, setJokes] = useState([])

  return (
    <>
    <h1>my website </h1>
    <p>
      Jokes : {jokes.length}
      {
        jokes.map((joke, index)=>{ 
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.description}</p>
        </div>
       })
      }
    </p>
    </>
  )
}

export default App
