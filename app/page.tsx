import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Showroom } from "@/components/showroom"
import { ConsignmentSection } from "@/components/consignment-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { MapPin } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Showroom */}
      <div className="bg-slate-50/50 dark:bg-black">
        <Showroom />
      </div>

      <ConsignmentSection />

      {/* Contact Section */}
      <section id="contacto" className="py-20 lg:py-28 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Content: Info & Map */}
            <div>
              <p className="text-presupuesto font-medium tracking-widest uppercase text-xs mb-3">
                Atención Personalizada
              </p>
              <h2 className="font-serif text-3xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
                Estamos para <span className="italic">asesorarlo</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Visite nuestro showroom em Marcos Paz para uma experiencia Mercedes-Benz completa.
              </p>

              {/* Map Container */}
              <div className="group relative aspect-video bg-secondary rounded-sm border-2 border-double border-[hsl(var(--color-presupuesto)/0.3)] overflow-hidden shadow-2xl">
                <iframe
                  // URL Actualizada con la ubicación exacta: Ruta 40 y Leavy, Marcos Paz
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.204557929452!2d-58.84583322425345!3d-34.7505555729016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7289c1351bab%3A0x4bc4d7543b318cb6!2sRuta%20Provincial%2040%20%26%20Leavy%2C%20Marcos%20Paz%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1708970000000!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'grayscale(1) contrast(1.2) invert(0.9)',
                    pointerEvents: 'auto' // Asegura que el usuario pueda interactuar con el mapa
                  }}
                  allowFullScreen
                  loading="lazy"
                  title="Class Benz: Ruta 40 y Leavy, Marcos Paz"
                />

                {/* Overlay Técnico interactivo */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Botão Como Chegar - Mais moderno e prático */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-34.780111,-58.824555"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 w-fit text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-[hsl(175,100%,45%)] transition-colors duration-300 border-b border-white/10 pb-2"
              >
                <MapPin className="w-4 h-4" />
                Ruta 40 Esq. Leavy, Marcos Paz · Obtener Indicaciones
              </a>
            </div>

            {/* Right Form */}
            <div className="bg-card p-1 rounded-sm shadow-sm border border-border/50">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}