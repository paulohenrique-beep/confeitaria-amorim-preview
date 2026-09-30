import { useEffect, useRef } from 'react'
import { ArrowRight, Calendar, Heart, Users } from 'lucide-react'
import imgEncomendas from '../assets/amorim/05-encomendas.jpg'
import './Encomendas.css'

const ocasioes = [
  { icon: Calendar, texto: 'Aniversários' },
  { icon: Heart, texto: 'Celebrações' },
  { icon: Users, texto: 'Encontros' },
]

export default function Encomendas() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="encomendas" className="encomendas section" ref={sectionRef}>
      <div className="encomendas__bg" />
      <div className="container">
        <div className="encomendas__grid">
          <div className="encomendas__content fade-in">
            <span className="encomendas__label">Encomendas</span>
            <h2 className="encomendas__title">
              Para tornar seus momentos <em>ainda mais especiais</em>.
            </h2>
            <p className="encomendas__text">
              Aniversários, celebrações, encontros com amigos ou
              qualquer ocasião que mereça ser celebrada com sabor.
              Estamos aqui para ajudar a tornar cada momento inesquecível.
            </p>

            <div className="encomendas__list">
              {ocasioes.map((item) => (
                <div key={item.texto} className="encomendas__item">
                  <div className="encomendas__item-icon">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="encomendas__item-text">{item.texto}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/confeitaria_amorim/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary encomendas__cta"
            >
              Consultar encomendas
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div className="encomendas__visual fade-in">
            <div className="encomendas__image-wrapper">
              <img
                src={imgEncomendas}
                alt="Bolo de chocolate com morangos - Encomendas"
                className="encomendas__image"
              />
              <div className="encomendas__image-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
