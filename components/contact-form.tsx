"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Loader2 } from "lucide-react"

interface Vehiculo {
  patente: string
  marca: string
  modelo: string
  anio: number
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [selectedVehicle, setSelectedVehicle] = useState("")
  const [vehicles, setVehicles] = useState<Vehiculo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // 1. Carga inicial de vehículos
  useEffect(() => {
    let isMounted = true;
    const fetchVehicles = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://backend-spring-render.onrender.com/api/vehiculos/showroom")
        const result = await response.json()

        if (isMounted && result.success && result.data?.content) {
          const uniqueVehicles = Array.from(
            new Map(result.data.content.map((item: any) => [item.patente, item])).values()
          ) as Vehiculo[];
          setVehicles(uniqueVehicles);
        }
      } catch (error) {
        console.error("Error al obtener vehículos:", error)
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }
    fetchVehicles()
    return () => { isMounted = false };
  }, [])

  // 2. INTEGRACIÓN COMPLETA: Escuchar cambios de URL y Eventos en tiempo real
  useEffect(() => {
    const actualizarVehiculo = (nombreForzado?: string) => {
      // Prioriza el nombre que viene del evento, si no, busca en la URL
      const vehicleName = nombreForzado || new URLSearchParams(window.location.search).get('vehiculo');

      if (vehicleName) {
        setSelectedVehicle(vehicleName);
        setMessage(`Hola Class Benz, me interesa recibir más información sobre el vehículo: ${vehicleName}.`);

        // Scroll suave al detectar cambio
        const element = document.getElementById("contacto");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Escuchar el evento personalizado 'vehiculoSeleccionado'
    const handleCustomEvent = (e: any) => {
      actualizarVehiculo(e.detail);
    };

    // Ejecutar al cargar por si viene de un link directo
    actualizarVehiculo();

    // Suscribirse al evento para cambios sin F5
    window.addEventListener("vehiculoSeleccionado", handleCustomEvent);

    return () => {
      window.removeEventListener("vehiculoSeleccionado", handleCustomEvent);
    };
  }, [vehicles]); // Dependencia de vehicles para asegurar que el select tenga datos para mostrar

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhone(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const textoWhatsApp = `Hola Class Benz! 👋%0A*Nueva Consulta*%0A*Cliente:* ${name}%0A*Teléfono:* ${phone}%0A*Vehículo:* ${selectedVehicle}%0A*Mensaje:* ${message || "Sin mensaje"}`
    window.open(`https://wa.me/5491154122154?text=${textoWhatsApp}`, "_blank")
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Consulta Iniciada</h3>
        <p className="text-muted-foreground text-sm">Un asesor de Class Benz lo asistirá personalmente.</p>
      </div>
    )
  }

  return (
    <form id="contacto" onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 lg:p-8 shadow-sm">
      <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-6">Inicie su Consulta Personalizada</h3>

      <div className="space-y-5">
        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Nombre / Razón Social</Label>
          <Input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre o empresa" className="bg-input border-border h-11" />
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Teléfono de contacto</Label>
          <Input type="tel" required value={phone} onChange={handlePhoneChange} placeholder="Solo números" className="bg-input border-border h-11" />
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Vehículo de interés</Label>
          {/* Componente controlado con value={selectedVehicle} */}
          <Select onValueChange={setSelectedVehicle} value={selectedVehicle} required>
            <SelectTrigger
              className="!bg-black !opacity-100 border-border text-white h-11"
              style={{ backgroundColor: '#000000', opacity: 1 }}
            >
              <SelectValue placeholder={isLoading ? "Cargando stock..." : "Seleccione un vehículo"} />
            </SelectTrigger>

            <SelectContent
              className="z-[9999] !bg-black !opacity-100 border-border shadow-2xl"
              style={{ backgroundColor: '#000000' }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="w-4 h-4 animate-spin text-[hsl(175,100%,15%)]" />
                </div>
              ) : (
                <>
                  {vehicles.map((v) => (
                    <SelectItem
                      key={`veh-${v.patente}`}
                      value={`${v.marca} ${v.modelo} (${v.anio})`}
                      className="text-white focus:bg-[hsl(175,100%,15%)] focus:text-white cursor-pointer"
                    >
                      {v.marca} {v.modelo} ({v.anio})
                    </SelectItem>
                  ))}
                  <SelectItem
                    value="Consulta General"
                    className="border-t border-border mt-1 text-white focus:bg-[hsl(175,100%,15%)]"
                  >
                    Otro / Consulta general
                  </SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Mensaje</Label>
          <Textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Su consulta..."
            className="bg-input border-border resize-none"
          />
        </div>

        <Button type="submit" className="btn-modern-amg group w-full h-14 text-[11px] font-bold uppercase tracking-[0.3em] text-white">
          <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[hsl(175,100%,45%)] transition-all">
            Enviar Solicitud
            <div className="w-2 h-2 rounded-full bg-[hsl(175,100%,25%)] group-hover:bg-[hsl(175,100%,45%)]" />
          </span>
        </Button>
      </div>
    </form>
  )
}