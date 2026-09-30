import { MapPin, Navigation } from 'lucide-react'
import './MapaVisual.css'

export default function MapaVisual() {
  return (
    <div className="mapa-visual">
      <div className="mapa-visual__grid">
        {/* Ruas simuladas */}
        <div className="mapa-visual__rua mapa-visual__rua--horizontal mapa-visual__rua--1" />
        <div className="mapa-visual__rua mapa-visual__rua--horizontal mapa-visual__rua--2" />
        <div className="mapa-visual__rua mapa-visual__rua--horizontal mapa-visual__rua--3" />
        <div className="mapa-visual__rua mapa-visual__rua--vertical mapa-visual__rua--1" />
        <div className="mapa-visual__rua mapa-visual__rua--vertical mapa-visual__rua--2" />
        <div className="mapa-visual__rua mapa-visual__rua--vertical mapa-visual__rua--3" />

        {/* Pin de localização */}
        <div className="mapa-visual__pin">
          <div className="mapa-visual__pin-pulse" />
          <div className="mapa-visual__pin-icon">
            <MapPin size={28} strokeWidth={1.5} />
          </div>
          <div className="mapa-visual__pin-label">
            <span className="mapa-visual__pin-title">Confeitaria Amorim</span>
            <span className="mapa-visual__pin-sub">Estamos aqui</span>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="mapa-visual__decor mapa-visual__decor--1" />
        <div className="mapa-visual__decor mapa-visual__decor--2" />
        <div className="mapa-visual__decor mapa-visual__decor--3" />
      </div>

      <div className="mapa-visual__info">
        <div className="mapa-visual__info-item">
          <Navigation size={16} strokeWidth={1.5} />
          <span>Confeitaria Amorim</span>
        </div>
      </div>
    </div>
  )
}
