import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import homeApi from './api/home-api'
import type { Count } from './types/types'

function App() {
  const id = 1
  const [count, setCount] = useState(0)
  const [helloMsg, setHelloMsg] = useState('Loading...')

  // 提取异步函数
  const fetchData = async () => {
    try {
      setHelloMsg(await homeApi.fetchHello())
    } catch (error) {
      setHelloMsg((error as Error).message)
    }
    const clickCount: Count = await homeApi.fetchClickCountById(id)
    setCount(clickCount.count)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onCountClick = async function () {
    const clickCount: Count = await homeApi.incrementClickCountById(id)
    setCount(clickCount.count)
  }

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
      <p> {helloMsg} </p>
      <div className="card">
        <button onClick={onCountClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
