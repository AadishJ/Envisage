import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Faq from "./Pages/Faq"
import Log from "./Components/Log"
import About from "./Pages/About"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/faq" element={<Faq />} />
          <Route path="/log" element={<Log />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
