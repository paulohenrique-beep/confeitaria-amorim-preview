import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import imgTortas from '../assets/amorim/01-trio-tortas-alemas.jpg'
import imgMacarons from '../assets/amorim/02-macarons.jpg'
import imgCharlotte from '../assets/amorim/03-charlotte-torta.jpg'
import imgCafe from '../assets/amorim/10-cafezinho.jpg'
import './Destaques.css'

const destaques = [
  {
    imagem: imgTortas,
    categoria: 'Doces artesanais',
    titulo: 'Feitos com carinho',
    descricao: 'Cada doce é preparado artesanalmente, com ingredientes selecionados e atenção a cada detalhe.',
  },
  {
    imagem: imgMacarons,
    categoria: 'Bolos especiais',
    titulo: 'Para celebrar',
    descricao: 'Bolos e tortas que tornam aniversários e celebrações ainda mais memoráveis.',
  },
  {
    imagem: imgCharlotte,
    categoria: 'Cafés',
    titulo: 'O aroma que acolhe',
    descricao: 'Cafés preparados na hora, para começar bem o dia ou pausar com sabor.',
  },
  {
    imagem: imgCafe,
    categoria: 'Encomendas',
    titulo: 'Sob medida',
    descricao: 'Encomendas personalizadas para suas ocasiões especiais, feitas com o mesmo cuidado de sempre.',
  },
]

export default function Destaques() {
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
    <section className="destaques section" ref={sectionRef}>
      <div className="container">
        <div className="destaques__header fade-in">
          <span className="destaques__label">Destaques</span>
          <h2 className="destaques__title">
            O que fazemos de <em>melhor</em>.
          </h2>
        </div>

        <div className="destaques__grid">
          {destaques.map((item, i) => (
            <div
              key={item.titulo}
              className="destaques__card fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="destaques__card-image">
                <img src={item.imagem} alt={item.titulo} className="destaques__card-img" />
                <div className="destaques__card-category">{item.categoria}</div>
              </div>
              <div className="destaques__card-content">
                <h3 className="destaques__card-title">{item.titulo}</h3>
                <p className="destaques__card-desc">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="destaques__cta fade-in">
          <a
            href="https://confeitaria-amorim.goomer.app/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ver todos os produtos
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
