import { useEffect, useRef } from 'react'
import essenciaImg from '../assets/amorim/fachada-amorim.jpg'
import './Essencia.css'

export default function Essencia() {
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
    <section id="essencia" className="essencia section" ref={sectionRef}>
      <div className="container">
        <div className="essencia__grid">
          <div className="essencia__visual fade-in">
            <div className="essencia__image-wrapper">
              <div className="essencia__image-placeholder">
              <img src={essenciaImg} alt="Confeitaria Amorim - Fachada" className="essencia__image-img" />
            </div>
              <div className="essencia__image-accent" />
            </div>
          </div>

          <div className="essencia__content fade-in">
            <span className="essencia__label">Nossa essência</span>
            <h2 className="essencia__title">
              Mais que confeitaria, <em>uma experiência</em>.
            </h2>
            <p className="essencia__text">
              Cada produto que sai da nossa cozinha carrega cuidado,
              atenção aos detalhes e o prazer de criar sabores que
              aproximam pessoas.
            </p>
            <p className="essencia__text">
              Do café da manhã ao encontro com amigos, do lanche da
              tarde à celebração especial — estamos presentes nos
              momentos que tornam a vida mais doce.
            </p>
            <div className="essencia__features">
              <div className="essencia__feature">
                <span className="essencia__feature-number">01</span>
                <span className="essencia__feature-text">Ingredientes selecionados</span>
              </div>
              <div className="essencia__feature">
                <span className="essencia__feature-number">02</span>
                <span className="essencia__feature-text">Preparo artesanal</span>
              </div>
              <div className="essencia__feature">
                <span className="essencia__feature-number">03</span>
                <span className="essencia__feature-text">Acolhimento em cada detalhe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
