"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* 🏎️ LOGO CROMADO PREMIUM */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-12 h-12 flex items-center justify-center">

              {/* Anillo de Acero Pulido con Brillo Especular */}
              <div className="absolute inset-0 rounded-full border-[1.5px] border-t-white/80 border-l-white/40 border-r-slate-500/50 border-b-slate-700 shadow-[0_2px_5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] transition-transform duration-1000 group-hover:rotate-[360deg]" />

              {/* Reflejo de luz interior */}
              <div className="absolute inset-[2px] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.1),transparent,rgba(255,255,255,0.1))] opacity-50" />

              {/* Estrella de Cromo con profundidad */}
              <div className="relative w-full h-full flex items-center justify-center scale-[0.65]">
                {/* Cuerpo de la Estrella (SVG para máxima precisión metálica) */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
                  <defs>
                    <linearGradient id="chrome-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                      <stop offset="40%" style={{ stopColor: '#94a3b8', stopOpacity: 1 }} />
                      <stop offset="60%" style={{ stopColor: '#475569', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  {/* Brazo Superior */}
                  <path d="M50 5 L56 44 L50 50 L44 44 Z" fill="url(#chrome-grad)" />
                  {/* Brazo Inferior Derecho */}
                  <path d="M89 73 L56 56 L50 50 L56 44 Z" fill="url(#chrome-grad)" transform="rotate(120 50 50)" />
                  {/* Brazo Inferior Izquierdo */}
                  <path d="M11 73 L44 56 L50 50 L44 44 Z" fill="url(#chrome-grad)" transform="rotate(240 50 50)" />

                  {/* Centro tallado */}
                  <circle cx="50" cy="50" r="3" fill="#ffffff" className="animate-pulse opacity-30" />
                </svg>
              </div>
            </div>

            {/* Texto de Marca en Acero */}
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground tracking-tighter leading-none flex items-baseline gap-1">
                CLASS <span className="font-light italic text-slate-500 text-lg lowercase">benz</span>
              </span>
              <span className="text-[8px] text-slate-400 uppercase tracking-[0.45em] font-black mt-1.5">
                Performance Selection
              </span>
            </div>
          </div>


          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {[
              { name: "Inventario", id: "contacto" },
              { name: "Consignación", id: "contacto" }, // Ahora ambos apuntan a 'contacto'
              { name: "Contacto", id: "contacto" }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="group relative text-[11px] uppercase tracking-widest text-muted-foreground hover:text-white transition-all font-bold"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+5491100000000"
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-white transition-all duration-300 group"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
              <span className="tracking-tight">+54 9 11 5412-2154</span>
            </a>

            <Button
              onClick={scrollToContact}
              className="hidden lg:flex btn-modern-amg group h-11 px-8 text-xs font-bold uppercase tracking-[0.2em] text-white border-none shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Cotización
                <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:shadow-[0_0_10px_white] transition-all duration-300" />
              </span>
            </Button>

            <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}