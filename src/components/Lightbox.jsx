import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Galerie plein écran : affiche une liste de médias (images ou vidéos)
// avec navigation (flèches, clavier ←/→/Échap, clic sur le fond pour fermer).
// `media` = [{ type: 'image' | 'video', src }]
export default function Lightbox({ media, initialIndex = 0, alt = '', onClose }) {
  const [index, setIndex] = useState(initialIndex)

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + media.length) % media.length),
    [media.length],
  )
  const next = useCallback(
    () => setIndex((i) => (i + 1) % media.length),
    [media.length],
  )

  // Navigation clavier + blocage du scroll de la page
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const multiple = media.length > 1
  const current = media[index]

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Fermer */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        aria-label="Fermer"
      >
        <X size={24} />
      </button>

      {/* Flèche précédente */}
      {multiple && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          aria-label="Média précédent"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Média courant */}
      {current.type === 'video' ? (
        <video
          src={current.src}
          controls
          autoPlay
          loop
          playsInline
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
        />
      ) : (
        <img
          src={current.src}
          alt={`${alt} ${index + 1}`}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        />
      )}

      {/* Flèche suivante */}
      {multiple && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          aria-label="Média suivant"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Compteur */}
      {multiple && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
          {index + 1} / {media.length}
        </span>
      )}
    </div>,
    document.body,
  )
}
