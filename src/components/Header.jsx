import { NavLink } from 'react-router-dom'
import "./Header.css"

const navLinks = [
  { label: "Start", path: "/" },
  { label: "Om oss", path: "/om-oss" },
  { label: "Tjänster", path: "/tjanster" },
  { label: "Webbshop", path: "/webbshop" },
  { label: "Kundvagn", path: "/kundvagn" },
  { label: "Kontakt", path: "/kontakt" },
  { label: "Recensioner", path: "/recensioner" },
  { label: "Admin", path: "/admin" },
]

function Header() {
  return (
    <header className="site-header">
      <NavLink className="site-logo" to="/">
        JC Teknik Center
      </NavLink>

      <nav className="site-nav" aria-label="Huvudnavigation">
        {navLinks.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
            }
            key={link.path}
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header