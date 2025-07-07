import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChooseLanguagePage from './pages/ChooseLanguagePage'
import WelcomePage from './pages/WelcomePage'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<ChooseLanguagePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </>
  )
}

export default App
