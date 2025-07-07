import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import ChooseLanguagePage from './pages/ChooseLanguagePage'
import WelcomePage from './pages/WelcomePage'
import Navbar from './components/Navbar'
import HallPage from './pages/HallPage'
import StudyPage from './pages/StudyPage'
import DeskPage from './pages/DeskPage'
import FramesPage from './pages/FramesPage'
import PinboardPage from './pages/PinboardPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  const location = useLocation()

  const hideNavbar = location.pathname === "/"

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<ChooseLanguagePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/hall" element={<HallPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/desk" element={<DeskPage />} />
          <Route path="/frames" element={<FramesPage />} />
          <Route path="/pinboard" element={<PinboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

    </>
  )
}

export default App
