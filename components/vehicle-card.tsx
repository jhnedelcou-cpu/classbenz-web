"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

interface VehicleCardProps {
  vehicle: {
    id: number | string
    model: string
    year: number
    km: number | string
    price: string | React.ReactNode
    fotos?: string[]
    image?: string
    images?: string[]
    category: string
    hasServiceDone?: boolean
    daysInStock?: number
    isReserved?: boolean
    isSold?: boolean
  }
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const [open, setOpen] = useState(false)

  // --- LÓGICA DE IMÁGENES ---
  const galeriaFotos = vehicle.fotos || vehicle.images || [];
  const mainImage = galeriaFotos.length > 0 ? galeriaFotos[0] : (vehicle.image || "/placeholder.svg");
  const slides = galeriaFotos.length > 0 ? galeriaFotos.map((src) => ({ src })) : [{ src: mainImage }];

  return (
    <>
      <div
        className={`group relative bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary/30 cursor-pointer shadow-sm ${vehicle.isSold ? "grayscale-[0.5]" : ""
          }`}
        onClick={() => setOpen(true)}
      >
        {/* CONTENEDOR DE IMAGEN */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={mainImage}
            alt={`${vehicle.model} ${vehicle.year}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${vehicle.isSold ? "blur-[4px] scale-110" : ""
              }`}
          />

          {/* 🏁 OVERLAY VENDIDO - ESTILO TELEMETRÍA AMG (FUTURISTA) */}
          {vehicle.isSold && (
            <div className="absolute inset-0 z-40 flex items-center justify-center p-4 overflow-hidden pointer-events-none">
              {/* Fondo oscuro con desenfoque de cristal líquido */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[4px]" />

              {/* El Marco de Telemetría */}
              <div className="relative w-full max-w-[85%] aspect-[4/1] flex items-center justify-center rotate-[-12deg]">

                {/* Bordes de Neón Estilo Scanner */}
                <div className="absolute inset-0 border-x-2 border-[hsl(175,100%,45%)]/60 rounded-sm">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[hsl(175,100%,45%)]/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[hsl(175,100%,45%)]/50 to-transparent" />
                </div>

                {/* Decoraciones de Esquinas Técnicas */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[hsl(175,100%,45%)]" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[hsl(175,100%,45%)]" />

                {/* Fondo de la placa con barrido de datos sutil */}
                <div className="absolute inset-0 bg-[hsl(175,100%,33%)]/[0.07] backdrop-blur-md" />

                {/* Texto con espaciado de precisión */}
                <span className="relative z-10 font-sans text-3xl font-black text-white uppercase tracking-[0.4em] italic leading-none drop-shadow-[0_0_15px_rgba(0,255,237,0.4)]">
                  Vendido
                </span>

                {/* Micro-textos decorativos (Estilo Pantalla de Competición) */}
                <div className="absolute top-2 right-4 text-[7px] text-[hsl(175,100%,45%)] font-mono uppercase tracking-tighter opacity-70">
                  Status: Finalized
                </div>
                <div className="absolute bottom-2 left-4 text-[7px] text-[hsl(175,100%,45%)] font-mono uppercase tracking-tighter opacity-70">
                  Unit: Out of Stock
                </div>
              </div>
            </div>
          )}
          {/* 🏎️ BADGE RESERVADO (Abajo a la izquierda) */}
          {!vehicle.isSold && vehicle.isReserved && (
            <div className="absolute bottom-3 left-3 z-30">
              <Badge
                className="bg-black/80 text-white border border-[hsl(175,100%,25%)] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 shadow-2xl backdrop-blur-md flex gap-2 items-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(175,100%,45%)] animate-pulse shadow-[0_0_8px_#00ffed]" />
                Reservado
              </Badge>
            </div>
          )}

          {/* 🏷️ BADGES SUPERIORES (Izquierda) */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
            {/* Categoría */}
            <Badge className="bg-[hsl(175,100%,22%)] text-white text-[10px] uppercase font-bold border-none shadow-md w-fit">
              {vehicle.category}
            </Badge>

            {/* 🔥 Stock: Fuego Rojo + 'dias' */}
            {vehicle.daysInStock !== undefined && vehicle.daysInStock > 0 && (
              <Badge className="bg-[hsl(175,100%,18%)] text-red-500 border border-[hsl(175,100%,28%)] text-[10px] font-bold w-fit flex gap-1 items-center shadow-lg px-2 py-0.5">
                <span className="animate-pulse">🔥</span>
                <span className="text-white/90">{vehicle.daysInStock} dias</span>
              </Badge>
            )}

            {/* ✅ Service Oficial */}
            {vehicle.hasServiceDone && (
              <Badge className="bg-emerald-800/40 text-white border border-emerald-500/30 text-[10px] font-bold w-fit flex gap-1 items-center shadow-lg">
                <span>✓</span> Service Oficial
              </Badge>
            )}
          </div>
        </div>

        {/* INFO INFERIOR */}
        <div className="p-4 lg:p-5">
          <div className="mb-4">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
              {vehicle.model}
            </h3>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{vehicle.year}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>{vehicle.km.toLocaleString("es-AR")} km</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-border/30">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-1 font-medium">
                  Inversión Final
                </p>
                <p className="text-2xl font-semibold leading-none tracking-tight text-emerald-900/80 dark:text-emerald-500/70">
                  <span className="text-xs mr-1 font-normal opacity-40">$</span>
                  {vehicle.price}
                </p>
              </div>
            </div>

            <Button
              disabled={vehicle.isSold}
              onClick={(e) => {
                e.stopPropagation();
                const el = document.getElementById('contacto');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`btn-modern-amg group w-full h-11 px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white border-none relative overflow-hidden ${vehicle.isSold ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-[hsl(175,100%,45%)] transition-colors duration-300">
                {vehicle.isSold ? "Unidad Vendida" : "Consultar Unidad"}
                {!vehicle.isSold && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(175,100%,33%)] group-hover:bg-[hsl(175,100%,45%)] group-hover:shadow-[0_0_10px_#00ffed] transition-all duration-300" />
                )}
              </span>
            </Button>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
      />
    </>
  )
}