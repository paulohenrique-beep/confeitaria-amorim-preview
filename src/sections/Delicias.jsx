import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import imgTortas from '../assets/amorim/01-trio-tortas-alemas.jpg'
import imgMacarons from '../assets/amorim/02-macarons.jpg'
import imgCharlotte from '../assets/amorim/03-charlotte-torta.jpg'
import imgCafe from '../assets/amorim/10-cafezinho.jpg'
import imgEncomendas from '../assets/amorim/05-encomendas.jpg'
import './Delicias.css'

const categorias = [
  {
    imagem: imgTortas,
    nome: 'Bolos & Tortas',
    descricao: 'Para celebrar cada momento',
  },
  {
    imagem: imgMacarons,
    nome: 'Doces',
    descricao: 'Sobremesas que abraçam',
  },
  {
    imagem: imgCafe,
    nome: 'Cafés',
    descricao: 'O aroma que acolhe',
  },
  {
    imagem: imgCharlotte,
    nome: 'Salgados',
    descricao: 'Para qualquer hora',
  },
  {
    imagem: imgEncomendas,
    nome: 'Encomendas',
    descricao: 'Feitas para você',
  },
]

export default function Delicias() {
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
    <section id="delicias" className="delicias section" ref={sectionRef}>
      <div className="container">
        <div className="delicias__header fade-in">
          <span className="delicias__label">Nossas delícias</span>
          <h2 className="delicias__title">
            Sabores que contam <em>histórias</em>.
          </h2>
          <p className="delicias__text">
            Explore nossas categorias e descubra o que preparamos
            com carinho para você.
          </p>
        </div>

        <div className="delicias__grid">
          {categorias.map((cat, i) => (
            <a
              key={cat.nome}
              href="https://confeitaria-amorim.goomer.app/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="delicias__card fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="delicias__card-image">
                <img src={cat.imagem} alt={cat.nome} className="delicias__card-img" />
              </div>
              <div className="delicias__card-content">
                <h3 className="delicias__card-title">{cat.nome}</h3>
                <p className="delicias__card-desc">{cat.descricao}</p>
                <div className="delicias__card-arrow">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="delicias__cta fade-in">
          <a
            href="https://confeitaria-amorim.goomer.app/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver cardápio completo
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
