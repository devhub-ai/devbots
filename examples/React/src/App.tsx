import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DevBot } from 'devbots';

function App() {
  const API_KEY = "b9358933b9e6f3d1aac5425e5aac63ea883c1573b6e4ccf57cb652db0f5766f6";
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

      {/* Devbot */}
      <DevBot
        apiKey={API_KEY}
        title={TITLE}
      />

    </>
  )
}

export default App
