import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import LandingPage from './components/LandingPage'
import NaNvBar from './components/NavBar'
import RegisterPage from './components/RegisterPage'
import Footer from './components/Footer'
import DashboardLayout from './Dashboard/DashboardLayout'
import LoginPage from './components/LoginPage'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <NaNvBar />

      <Toaster position="bottom-center" />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App