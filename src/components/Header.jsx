import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossa essência', href: '#essencia' },
  { label: 'Delícias', href: '#delicias' },
  { label: 'Encomendas', href: '#encomendas' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <a href="#inicio" className="header__logo">
            <span className="header__logo-icon">A</span>
            <span className="header__logo-text">
              <span className="header__logo-name">Confeitaria</span>
              <span className="header__logo-brand">Amorim</span>
            </span>
          </a>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header__link">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://confeitaria-amorim.goomer.app/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta"
          >
            Ver cardápio
          </a>

          <button
            className="header__menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu__panel">
          <button
            className="mobile-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <nav className="mobile-menu__nav">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu__link"
                style={{ transitionDelay: `${i * 0.05}s` }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://confeitaria-amorim.goomer.app/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu__cta"
          >
            Ver cardápio
          </a>
        </div>
      </div>
    </>
  )
}
