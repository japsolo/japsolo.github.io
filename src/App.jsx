import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}?limit=10`)
      .then(response => response.json())
      .then(data => {
        setList(data.products);
      })
      .catch(e => console.log(e))
  }, [])

  console.log(import.meta.env.VITE_API_URL)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esta es la página de Javi</p>
        <p>{import.meta.env.VITE_API_URL}</p>
        <pre style={{
          fontSize: "0.9rem"
        }}>
          {JSON.stringify(list, null, 2)}
        </pre>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
