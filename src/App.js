import { useEffect, useState } from "react";
import './App.css';

function App() {
  const[quote, setQuote] = useState('');

  //API from freeCodeCamp
  const fetchData = () => {
      fetch(`https://type.fit/api/quotes`)
          .then((response) => response.json())
          .then((data) => {
              let indexNum = Math.floor(Math.random() * 1644);
              setQuote(data[indexNum]);
          });
  }

  useEffect (() => {
      fetchData();
  }, []);

  return (
      <div className="App">
        <div className="quotes" >
          <blockquote>
              <p className="text">"{quote.text}"</p>
              <p className="author">{quote.author}</p>
          </blockquote>
          <div className="buttons">
            <button onClick={fetchData} >New Quote</button>
            <button className="copy" onClick={() =>  {navigator.clipboard.writeText(`${quote.text}-${quote.author}`)}} >Copy Quote</button>
          </div>
          </div>
      </div>
  )
}

export default App;