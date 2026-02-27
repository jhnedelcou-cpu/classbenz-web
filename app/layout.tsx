import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"
// 1. IMPORTACIÓN DEL ASISTENTE
import { ChatAssistant } from "@/components/chat-assistant"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: "Class Benz | Salón de Ventas & Consignación",
  description: "Vehículos Mercedes-Benz seleccionados. Compra, venta, reparacion y consignación profesional de unidades certificadas.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0d0d0d]`}>
        {/* El contenido de la página */}
        {children}

        {/* 2. INTEGRACIÓN DEL CHATBOT */}
        {/* Se coloca aquí para que flote sobre cualquier página del sitio */}
        <ChatAssistant />
      </body>
    </html>
  )
}