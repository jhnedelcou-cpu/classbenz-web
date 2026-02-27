import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* ... (Tu código de contenido del footer se mantiene igual) ... */}

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Class Benz. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacidad</a>
          </div>
        </div>
      </div>

      {/* --- EL DOCK FLOTANTE --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

        {/* Aquí irá tu Chatbot (Mercedes) cuando lo integres */}
        <div className="hidden">
          {/* Ejemplo: <ChatbotComponent /> */}
        </div>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/5491154122154?text=Hola%20Class%20Benz!%20Quisiera%20consultar%20por%20un%20vehículo."
          target="_blank"
          rel="noopener noreferrer"
          // NOTA: Quité el 'fixed', 'bottom-6' y 'right-40'. 
          // El contenedor padre controla esto ahora.
          className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
                 hover:bg-white/20 hover:border-white/40 
                 hover:scale-110 transition-all duration-300 group"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.05c0 2.12.554 4.189 1.605 6.01L0 24l6.136-1.609a11.83 11.83 0 005.91 1.57h.004c6.635 0 12.049-5.415 12.049-12.05 0-3.213-1.25-6.232-3.522-8.505z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}