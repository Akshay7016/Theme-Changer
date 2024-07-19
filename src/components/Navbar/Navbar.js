import { Link } from "react-router-dom"

import { useTheme } from "../../context/ThemeContext"

export const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}
