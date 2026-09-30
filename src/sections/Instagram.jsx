import { useEffect, useRef } from 'react'
import { Instagram as InstagramIcon } from 'lucide-react'
import img1 from '../assets/amorim/01-trio-tortas-alemas.jpg'
import img2 from '../assets/amorim/02-macarons.jpg'
import img3 from '../assets/amorim/03-charlotte-torta.jpg'
import img4 from '../assets/amorim/04-vitrine-doces.jpg'
import img5 from '../assets/amorim/08-filhoses.jpg'
import img6 from '../assets/amorim/09-milkshake.jpg'
import './Instagram.css'

const posts = [
  { imagem: img1, texto: 'Bolos & Tortas' },
  { imagem: img2, texto: 'Macarons' },
  { imagem: img3, texto: 'Charlotte' },
  { imagem: img4, texto: 'Vitrine' },
  { imagem: img5, texto: 'Filhoses' },
  { imagem: img6, texto: 'Milkshake' },
]

export default function Instagram() {
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
    <section className="instagram section" ref={sectionRef}>
      <div className="container">
        <div className="instagram__header fade-in">
          <span className="instagram__label">Instagram</span>
          <h2 className="instagram__title">
            Amorim no <em>Instagram</em>.
          </h2>
          <p className="instagram__text">
            Acompanhe nosso dia a dia, novidades e bastidores.
          </p>
        </div>

        <div className="instagram__grid">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/confeitaria_amorim/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram__item fade-in"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="instagram__image">
                <img src={post.imagem} alt={post.texto} className="instagram__img" />
                <div className="instagram__overlay">
                  <InstagramIcon size={28} strokeWidth={1.5} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="instagram__footer fade-in">
          <span className="instagram__handle">@confeitaria_amorim</span>
          <a
            href="https://www.instagram.com/confeitaria_amorim/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <InstagramIcon size={18} strokeWidth={1.5} />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
