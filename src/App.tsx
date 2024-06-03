import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import { AppProvider } from "./context/AppContext"
import Profile from "./pages/Profile"
import Activity from "./pages/Activity"

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activity/:id" element={<Activity />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
      <Footer />
    </>
  )
}

export default App
