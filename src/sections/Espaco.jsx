import { useEffect, useRef } from 'react'
import imgFachada from '../assets/amorim/fachada-amorim.jpg'
import imgMaquina from '../assets/amorim/cafe-maquina.jpg'
import imgXicara from '../assets/amorim/cafe-xicara.jpg'
import './Espaco.css'

export default function Espaco() {
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
    <section className="espaco section" ref={sectionRef}>
      <div className="container">
        <div className="espaco__header fade-in">
          <span className="espaco__label">Nosso espaço</span>
          <h2 className="espaco__title">
            Um lugar para <em>saborear bons momentos</em>.
          </h2>
        </div>

        <div className="espaco__grid">
          <div className="espaco__item espaco__item--large fade-in">
            <div className="espaco__image espaco__image--large">
              <img
                src={imgFachada}
                alt="Fachada da Confeitaria Amorim"
                className="espaco__img espaco__img--fachada"
              />
              <div className="espaco__image-overlay">
                <span className="espaco__image-text">Acolhimento</span>
              </div>
            </div>
          </div>
          <div className="espaco__item fade-in" style={{ transitionDelay: '0.1s' }}>
            <div className="espaco__image">
              <img
                src={imgMaquina}
                alt="Café sendo preparado"
                className="espaco__img espaco__img--maquina"
              />
              <div className="espaco__image-overlay">
                <span className="espaco__image-text">Cafeteria</span>
              </div>
            </div>
          </div>
          <div className="espaco__item fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="espaco__image">
              <img
                src={imgXicara}
                alt="Xícara de café"
                className="espaco__img espaco__img--xicara"
              />
              <div className="espaco__image-overlay">
                <span className="espaco__image-text">Vitrine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
