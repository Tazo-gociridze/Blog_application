import { Routes } from 'react-router-dom'
import './App.css'
import '@/i18next'
import { AUTH_LAYOUT, INDEX_LAYOUT } from './routes'
import useAppLogic from './customHooks/App/useAppLogic'

function App() {
  useAppLogic()

  return (
    <Routes>
      {INDEX_LAYOUT}
      {AUTH_LAYOUT}
    </Routes>
  )
}
export default App
