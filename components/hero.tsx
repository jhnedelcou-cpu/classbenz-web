"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden bg-background">
      {/* Background Image con Zoom Suave */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mercedes.jpg"
          alt="Mercedes-Benz de lujo en showroom"
          fill
          className="object-cover object-center scale-105 animate-in fade-in zoom-in duration-[2000ms]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-f1 font-medium tracking-[0.4em] uppercase text-[9px] mb-4 flex items-center gap-3">
            <span className="w-12 h-[1px] bg-gradient-to-r from-[hsl(175,100%,33%)] to-transparent" />
            <span className="text-[hsl(175,100%,45%)]">AMG Performance Selection</span>
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] text-balance mb-6 tracking-tight">
            Ingeniería en cada <span className="italic text-gray-400">detalle</span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl font-light">
            Experimente la máxima precisión alemana. Colección exclusiva de unidades certificadas con el respaldo de Class Benz.
          </p>

          {/* CTAs - BOTONES ULTRA MODERNOS (Glassmorphism + Scanner Effect) */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <Button
              size="lg"
              onClick={() => document.getElementById('showroom')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 h-14 px-8 rounded-sm transition-all duration-500 hover:border-[hsl(175,100%,45%)] hover:shadow-[0_0_30px_-5px_rgba(0,163,153,0.5)]"
            >
              {/* Efecto de barrido de luz */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[hsl(175,100%,45%)]/20 to-transparent" />

              <span className="relative z-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-[hsl(175,100%,45%)] transition-colors">
                Ver Inventario
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative h-14 px-8 rounded-sm border-white/5 bg-transparent text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/5 hover:border-white/20"
            >
              Consignación
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[hsl(175,100%,33%)] transition-all duration-500 group-hover:w-full" />
            </Button>
          </div>

          {/* Trust Badges con Animación de Telemetría */}
          <div className="relative pt-8">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[hsl(175,100%,33%)] via-white/5 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {[
                { icon: Shield, title: "Garantía", desc: "Engineered Trust" },
                { icon: Award, title: "Certificación", desc: "Rigorous Check" },
                { icon: Clock, title: "Transparencia", desc: "Verified History" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="relative">
                    <badge.icon className="w-5 h-5 text-[hsl(175,100%,33%)] group-hover:text-[hsl(175,100%,45%)] transition-all duration-500 group-hover:scale-110" />
                    {/* Indicador de pulso activo */}
                    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[hsl(175,100%,45%)] opacity-0 group-hover:opacity-100 animate-pulse shadow-[0_0_8px_#00ffed]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-widest">{badge.title}</p>
                    <p className="text-[9px] text-gray-500 uppercase tracking-tighter italic font-medium">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decoración lateral: Línea de meta sutil */}
      <div className="absolute right-0 bottom-0 w-1/3 h-[1px] bg-gradient-to-l from-[hsl(175,100%,33%)]/20 to-transparent" />
    </section>
  )
}