import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChooseLanguagePage from './pages/ChooseLanguagePage'
import WelcomePage from './pages/WelcomePage'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<ChooseLanguagePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </div>

    </>
  )
}

export default App
