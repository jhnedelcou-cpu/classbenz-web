"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Eye, Handshake } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Máxima Exposición",
    description: "Su vehículo en el salón más exclusivo de la ciudad",
  },
  {
    icon: Users,
    title: "Compradores Calificados",
    description: "Acceso a nuestra red de clientes premium verificados",
  },
  {
    icon: Handshake,
    title: "Gestión Integral",
    description: "Nos encargamos de todo el proceso de venta",
  },
]

export function ConsignmentSection() {
  return (
    <section id="consignacion" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">
              Servicio de Consignación
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground text-balance mb-6">
              Su Mercedes-Benz en las mejores manos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Gestión profesional de consignación en nuestro salón de ventas.
              Maximice el valor de su vehículo con nuestra experiencia, red de contactos
              y el respaldo de una marca reconocida.
            </p>

            {/* Benefits */}
            <div className="space-y-5 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA - BOTÓN ESTILO HEADER AMG */}
            <Button
              onClick={() => {
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-modern-amg group h-12 px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white border-none relative overflow-hidden w-full sm:w-fit"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[hsl(175,100%,45%)] transition-colors duration-300">
                Quiero consignar mi vehículo
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(175,100%,33%)] group-hover:bg-[hsl(175,100%,45%)] group-hover:shadow-[0_0_10px_#00ffed] transition-all duration-300" />
              </span>
            </Button>
          </div>

          {/* Stats / Process */}
          <div className="bg-card border border-border rounded-lg p-6 lg:p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              ¿Por qué Class Benz?
            </h3>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-secondary rounded-lg border border-accent/10">
                <p className="font-serif text-3xl font-bold text-accent mb-1">100%</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Taller Digital</p>
                <p className="text-[10px] text-muted-foreground/70">Diagnóstico & Gestión Propia</p>
              </div>

              <div className="text-center p-4 bg-secondary rounded-lg border border-accent/10">
                <p className="font-serif text-3xl font-bold text-accent mb-1">+50</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Unidades Entregadas</p>
                <p className="text-[10px] text-muted-foreground/70">Crecimiento desde 2025</p>
              </div>

              <div className="text-center p-4 bg-secondary rounded-lg border border-accent/10">
                <p className="font-serif text-3xl font-bold text-accent mb-1">Real Time</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Seguimiento</p>
                <p className="text-[10px] text-muted-foreground/70">Orden de Reparación Online</p>
              </div>

              <div className="text-center p-4 bg-secondary rounded-lg border border-accent/10">
                <p className="font-serif text-3xl font-bold text-accent mb-1">45</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Días de Venta</p>
                <p className="text-[10px] text-muted-foreground/70">Promedio de gestión rápida</p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
                Proceso Simple
              </h4>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Tasación profesional sin compromiso</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Exposición en nuestro showroom premium</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Gestión de venta y documentación</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">Cobro seguro y transparente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}