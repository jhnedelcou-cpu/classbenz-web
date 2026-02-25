"use client"

import { useState, useEffect } from "react"
import { VehicleCard } from "@/components/vehicle-card"
import { Flame } from "lucide-react"

const categories = ["Todos", "Sedán", "SUV", "Coupé", "AMG"]

export function Showroom() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [vehicles, setVehicles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    async function fetchShowroom() {
      try {
        const response = await fetch("https://backend-spring-render.onrender.com/api/vehiculos")
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const result = await response.json()

        let rawData = [];
        if (result.success && result.data) {
          if (Array.isArray(result.data) && result.data[0]?.content) {
            rawData = result.data[0].content;
          } else if (result.data.content) {
            rawData = result.data.content;
          } else if (Array.isArray(result.data)) {
            rawData = result.data; // Caso NDO872 directo
          }
        }

        // 🎯 FILTRO ESTRICTO: Solo publicados
        const publicables = rawData.filter((v: any) => v.published === true);

        const mappedData = publicables.map((v: any, index: number) => {
          const numericPrice = v.price ? parseFloat(v.price) : 0;

          return {
            id: v.patente || `v-${index}`,
            model: v.modelo,
            year: v.anio,
            km: v.ultimoKilometraje ? Math.floor(v.ultimoKilometraje).toLocaleString('es-AR') : "0",

            // 🏷️ PRECIO
            price: (numericPrice && numericPrice > 0)
              ? `USD ${Math.floor(numericPrice).toLocaleString('es-AR')}`
              : <span className="text-presupuesto" suppressHydrationWarning>Consultar</span>,

            image: v.fotos && v.fotos.length > 0 ? v.fotos[0] : "/placeholder.svg",
            images: v.fotos || [],
            category: v.category || "Sedán",

            // 🏎️ CORRECCIÓN: Capturamos los estados de reserva y venta del JSON
            isReserved: v.isReserved === true || v.reservedValue === true,
            isSold: v.isSold === true || v.soldValue === true,
            isConsignment: v.isConsignment === true,
            hasServiceDone: v.hasServiceDone === true,
            daysInStock: v.daysInStock || 0
          };
        });
        setVehicles(mappedData);
      } catch (error) {
        console.error("Error cargando inventario Class Benz:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchShowroom()
  }, [])

  if (!mounted) return null;

  const normalizeText = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredVehicles = activeCategory === "Todos"
    ? vehicles
    : vehicles.filter(v => {
      const categoryVehiculo = normalizeText(v.category || "");
      const categoryActiva = normalizeText(activeCategory);
      return categoryVehiculo === categoryActiva;
    });

  return (
    <section id="showroom" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header con Urgencia 🔥 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">Showroom Virtual</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground">Inventario Seleccionado</h2>
          </div>

          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-[hsl(175,100%,33%)]/20 rounded-sm px-4 py-2.5 relative overflow-hidden group w-full sm:w-fit">
            <div className="absolute top-0 left-0 w-[2px] h-full bg-[hsl(175,100%,33%)] shadow-[0_0_10px_rgba(0,163,153,0.5)]" />

            <div className="relative flex-shrink-0">
              <Flame className="w-5 h-5 text-red-600 animate-pulse" fill="currentColor" fillOpacity="0.15" />
              <div className="absolute inset-0 bg-red-600/10 blur-md rounded-full" />
            </div>

            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300 leading-none">
                <span className="text-red-600">7 dias</span>
                <span className="ml-2 text-white/40 font-light">para actualización</span>
              </p>
              <div className="mt-2 w-32 h-[1px] bg-white/10 overflow-hidden">
                <div className="h-full bg-[hsl(175,100%,33%)] shadow-[0_0_8px_#00a399] transition-all duration-1000" style={{ width: '70%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500
                ${activeCategory === cat
                  ? "text-white bg-[hsl(175,100%,33%)]/20 border-[hsl(175,100%,33%)] shadow-[0_0_15px_rgba(0,163,153,0.3)]"
                  : "text-muted-foreground bg-white/5 border-white/5 hover:border-white/20 hover:text-white"
                } border rounded-sm overflow-hidden group`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {cat}
                <div className={`w-1 h-1 rounded-full transition-all duration-500 ${activeCategory === cat ? "bg-[hsl(175,100%,45%)] shadow-[0_0_5px_#00ffed]" : "bg-white/10"}`} />
              </span>
            </button>
          ))}
        </div>

        {/* Grid de Vehículos */}
        {loading ? (
          <div className="text-center py-20 text-orange-600 animate-pulse font-bold">Sincronizando...</div>
        ) : filteredVehicles.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-muted rounded-xl">
            <p className="text-muted-foreground italic">No hay vehículos marcados para "Publicar en Web".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <VehicleCard key={`${vehicle.id}-${index}`} vehicle={vehicle} />
            ))}
          </div>
        )}

        {/* Nota de Presupuesto */}
        <div className="mt-16 text-center p-8 bg-secondary/20 rounded-2xl border border-dashed border-border">
          <p className="text-muted-foreground text-sm">
            Todas las unidades ClassBenz cuentan con garantía técnica.
            Consulte su <span className="text-presupuesto underline decoration-current underline-offset-4">presupuesto</span> personalizado hoy mismo.
          </p>
        </div>
      </div>
    </section>
  )
}