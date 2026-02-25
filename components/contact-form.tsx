"use client"

import React from "react"
import { useState } from "react"
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
import { CheckCircle2 } from "lucide-react"

const vehicleOptions = [
  "Mercedes-Benz Clase S 500 (2023)",
  "Mercedes-Benz GLE 450 4MATIC (2022)",
  "Mercedes-Benz Clase C 300 (2023)",
  "Mercedes-AMG GT 63 S (2022)",
  "Mercedes-Benz Clase E 450 (2023)",
  "Mercedes-Benz GLC 300 Coupé (2022)",
  "Otro / Consulta general",
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phone, setPhone] = useState("")

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhone(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          Consulta Enviada
        </h3>
        <p className="text-muted-foreground text-sm">
          Un asesor de <span className="text-foreground font-bold">Class Benz</span> se comunicará con usted a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 lg:p-8 shadow-sm">
      <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-6">
        Inicie su Consulta Personalizada
      </h3>

      <div className="space-y-5">
        {/* Nombre */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Nombre / Razón Social
          </Label>
          <Input
            id="name"
            type="text"
            required
            placeholder="Ingrese su nombre o empresa"
            className="bg-input border-border text-foreground focus:ring-accent h-11"
          />
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Teléfono de contacto
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Solo números"
            suppressHydrationWarning
            className="bg-input border-border text-foreground focus:ring-accent h-11"
          />
        </div>

        {/* Selección de Vehículo */}
        <div className="space-y-2">
          <Label htmlFor="vehicle" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Vehículo de interés
          </Label>
          <Select required>
            <SelectTrigger className="bg-input border-border text-foreground h-11">
              <SelectValue placeholder="Seleccione un vehículo" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {vehicleOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Mensaje o consulta específica <span className="italic opacity-50">(opcional)</span>
          </Label>
          <Textarea
            id="message"
            rows={3}
            placeholder="Escriba su consulta aquí..."
            suppressHydrationWarning
            className="bg-input border-border text-foreground resize-none focus:ring-accent"
          />
        </div>

        {/* Submit - ESTILO AMG UNIFICADO */}
        <Button
          type="submit"
          className="btn-modern-amg group w-full h-14 px-8 text-[11px] font-bold uppercase tracking-[0.3em] text-white border-none relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[hsl(175,100%,45%)] transition-colors duration-300">
            Enviar Solicitud
            <div className="w-2 h-2 rounded-full bg-[hsl(175,100%,33%)] group-hover:bg-[hsl(175,100%,45%)] group-hover:shadow-[0_0_12px_#00ffed] transition-all duration-300" />
          </span>
        </Button>

        <p className="text-[9px] text-muted-foreground/50 text-center uppercase tracking-[0.3em] pt-2">
          Excelencia Mercedes-Benz • Class Benz 2026
        </p>
      </div>
    </form>
  )
}