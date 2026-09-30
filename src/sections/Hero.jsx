import { ArrowRight, Coffee } from 'lucide-react'
import heroImg from '../assets/amorim/04-vitrine-doces.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__pattern" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <Coffee size={14} strokeWidth={1.5} />
            <span>Confeitaria & Cafeteria</span>
          </div>

          <h1 className="hero__title">
            Momentos especiais começam com um{' '}
            <em>sabor inesquecível</em>.
          </h1>

          <p className="hero__text">
            Na Confeitaria Amorim, cada detalhe é pensado para transformar
            encontros em memórias. Do café passado na hora aos doces
            artesanais, nossa missão é adoçar seus dias.
          </p>

          <div className="hero__actions">
            <a href="#delicias" className="btn btn-primary">
              Conheça nossas delícias
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://confeitaria-amorim.goomer.app/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Fazer um pedido
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <div className="hero__image-placeholder">
              <img src={heroImg} alt="Confeitaria Amorim - Vitrine de doces" className="hero__image-img" />
            </div>
            <div className="hero__image-accent" />
          </div>

          <div className="hero__floating-card">
            <div className="hero__floating-icon">
              <Coffee size={20} strokeWidth={1.5} />
            </div>
            <div className="hero__floating-text">
              <span className="hero__floating-title">Café fresco</span>
              <span className="hero__floating-sub">Todos os dias</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Role para descobrir</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
