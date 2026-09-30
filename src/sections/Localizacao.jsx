import { useEffect, useRef } from 'react'
import { MapPin, Clock } from 'lucide-react'
import MapaVisual from '../components/MapaVisual.jsx'
import './Localizacao.css'

export default function Localizacao() {
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
    <section id="localizacao" className="localizacao section" ref={sectionRef}>
      <div className="container">
        <div className="localizacao__grid">
          <div className="localizacao__content fade-in">
            <span className="localizacao__label">Localização</span>
            <h2 className="localizacao__title">
              Venha viver <em>essa experiência</em>.
            </h2>
            <p className="localizacao__text">
              Estamos esperando por você. Venha nos conhecer,
              tomar um café e experimentar nossas delícias.
            </p>

            <div className="localizacao__info">
              <div className="localizacao__info-item">
                <div className="localizacao__info-icon">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="localizacao__info-text">
                  <span className="localizacao__info-label">Endereço</span>
                  <span className="localizacao__info-value">
                    Confeitaria Amorim
                  </span>
                </div>
              </div>

              <div className="localizacao__info-item">
                <div className="localizacao__info-icon">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div className="localizacao__info-text">
                  <span className="localizacao__info-label">Horário</span>
                  <span className="localizacao__info-value">
                    Consulte nossos horários
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/fTbRfd9qBjTX1tVi6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary localizacao__cta"
            >
              <MapPin size={18} strokeWidth={1.5} />
              Como chegar
            </a>
          </div>

          <div className="localizacao__map fade-in">
            <MapaVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
