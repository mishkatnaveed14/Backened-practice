import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);

  return (
    <>
      <h1>my website </h1>
      <p>
        Jokes : {jokes.length}
        {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <div>{joke.description}</div>
          </div>
        ))}
      </p>
    </>
  );
}

export default App;
