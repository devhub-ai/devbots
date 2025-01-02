import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DevBot } from 'devbots';

function App() {
  const API_KEY = "650920407e703c99b1f4edf93ec081aa8b971d22201771632fee9918f3c32263";
  const TITLE = "DevBots Support"
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <DevBot
        apiKey={API_KEY}
        title={TITLE}
      />
    </>
  )
}

export default App
