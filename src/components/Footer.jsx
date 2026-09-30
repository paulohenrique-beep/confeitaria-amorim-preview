import { Instagram, MapPin, UtensilsCrossed } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">A</span>
              <span className="footer__logo-text">
                <span className="footer__logo-name">Confeitaria</span>
                <span className="footer__logo-brand">Amorim</span>
              </span>
            </div>
            <p className="footer__tagline">
              Momentos especiais começam com um sabor inesquecível.
            </p>
          </div>

          <div className="footer__links">
            <a
              href="https://www.instagram.com/confeitaria_amorim/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <Instagram size={18} strokeWidth={1.5} />
              Instagram
            </a>
            <a
              href="https://confeitaria-amorim.goomer.app/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <UtensilsCrossed size={18} strokeWidth={1.5} />
              Cardápio
            </a>
            <a
              href="https://maps.app.goo.gl/fTbRfd9qBjTX1tVi6"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <MapPin size={18} strokeWidth={1.5} />
              Como chegar
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Confeitaria Amorim. Todos os direitos reservados.
          </p>
          <p className="footer__note">
            Prévia conceitual de website.
          </p>
        </div>
      </div>
    </footer>
  )
}
