import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Socials */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">CB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold text-foreground">Class Benz</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Premium Selection</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              El destino exclusivo para vehículos Mercedes-Benz en Argentina.
              Venta, reparación y consignación.
            </p>
            {/* Redes Sociales */}
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all">
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2.5">
              <li><a href="#showroom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Inventario</a></li>
              <li><a href="#consignacion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Consignación</a></li>
              <li><a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Financiación</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Ruta 40 esquina Leavy, Marcos Paz, Buenos Aires
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                {/* Teléfono actualizado también en el texto */}
                <a href="tel:+5491154122154" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +54 9 11 5412-2154
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@classbenz.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@classbenz.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Horarios</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 - 19:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

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

      {/* Botón Flotante WhatsApp Premium Style - TELÉFONO ACTUALIZADO */}
      <a
        href="https://wa.me/5491154122154?text=Hola%20Class%20Benz!%20Quisiera%20consultar%20por%20un%20vehículo."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full 
             bg-white/10 backdrop-blur-md border border-white/20 
             shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
             hover:bg-white/20 hover:border-white/40 
             hover:scale-110 transition-all duration-300 group"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.05c0 2.12.554 4.189 1.605 6.01L0 24l6.136-1.609a11.83 11.83 0 005.91 1.57h.004c6.635 0 12.049-5.415 12.049-12.05 0-3.213-1.25-6.232-3.522-8.505z" />
        </svg>
      </a>
    </footer>
  )
}