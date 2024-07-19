import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./Pages/Home/Home"
import { About } from "./Pages/About/About"
import { Contact } from "./Pages/Contact/Contact"
import { Navbar } from "./components/Navbar/Navbar"
import { ThemeProvider } from "./context/ThemeContext"

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
