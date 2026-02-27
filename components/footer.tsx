import { MapPin, Instagram, Facebook, Music2 } from "lucide-react"
import { ChatAssistant } from "./chat-assistant"

export function Footer() {
  return (
    // 'relative' permite que el dock (que es 'fixed') no rompa el posicionamiento
    <footer className="relative w-full bg-card border-t border-border py-12">

      {/* Contenido centrado */}
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8 text-center">

        {/* Dirección */}
        <div>
          <div className="flex items-center justify-center gap-2 text-zinc-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Ubicación</span>
          </div>
          <p className="text-zinc-300 text-sm font-light">
            Ruta 40 Esq. Leavy, Marcos Paz, Buenos Aires
          </p>
        </div>

        {/* Redes */}
        <div className="flex gap-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Music2 className="w-5 h-5" /></a>
        </div>

        {/* Legal */}
        <p className="text-zinc-700 text-[10px] uppercase tracking-widest">
          © 2026 Class Benz. Todos los derechos reservados.
        </p>
      </div>

      {/* DOCK FLOTANTE (Independiente) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        <ChatAssistant />
        <a
          href="https://wa.me/5491154122154"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-zinc-700/80 backdrop-blur-md border border-white/10 shadow-lg hover:bg-zinc-600 transition-all flex items-center justify-center"
        >
          {/* Aquí tu icono de WhatsApp */}
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.05c0 2.12.554 4.189 1.605 6.01L0 24l6.136-1.609a11.83 11.83 0 005.91 1.57h.004c6.635 0 12.049-5.415 12.049-12.05 0-3.213-1.25-6.232-3.522-8.505z" /></svg>
        </a>
      </div>
    </footer>
  )
}