"use client"

import React, { useState, useRef } from "react"
import { X, Send } from "lucide-react"

// --- DATOS DEL INVENTARIO ---
const VEHICLE_DATA = [
    { patente: "NDO872", modelo: "Clase C LA 200", anio: 2014, color: "Gris", ultimoKilometraje: 0, price: "68000" },
    { patente: "MTL805", modelo: "Clase A 200", anio: 2013, color: "blanco", ultimoKilometraje: 111000, price: "17000" },
    { patente: "MSP925", modelo: "ML 350", anio: 2013, color: "NEGRO", ultimoKilometraje: 120000, price: "33000" },
    { patente: "AC742YS", modelo: "Clase C 300 AMG Lines", anio: 2018, color: "Blanco", ultimoKilometraje: 121000, price: "75000" },
    { patente: "PIF213", modelo: "C250 COUPE", anio: 2014, color: "Plata", ultimoKilometraje: 59128, price: null },
];

const WHATSAPP_NUMBER = "5491154122154";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quisiera%20más%20información%20sobre%20un%20vehículo.`;

const MercedesStar = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 96C24.6 96 4 75.4 4 50S24.6 4 50 4s46 20.6 46 46-20.6 46-46 46z" />
        <path d="M50 10L44 46 12 65l38-5 38 5-32-19z" />
    </svg>
)

export function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState([{ role: 'bot', text: 'Bienvenido a Class Benz. Soy su asistente AMG Digital. ¿En qué unidad está interesado?' }])

    const [activeVehicle, setActiveVehicle] = useState<any>(null);
    const scrollRef = useRef<HTMLDivElement>(null)

    const getFireIcon = (type: 'dias' | 'precio') => {
        return type === 'dias'
            ? '🔥 <span style="color:red">dias</span>'
            : '🔥 <span style="color:orange">precio</span>';
    };

    const generateBotResponse = (userMessage: string) => {
        const msg = userMessage.toLowerCase();

        if (msg.includes("vendedor") || msg.includes("asesor") || msg.includes("contacto") || msg.includes("hablar con")) {
            return `Mercedes: Entendido. Haz clic aquí para continuar la atención directamente con un asesor por WhatsApp: <br/><br/> <a href="${WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer" style="color: #10B981; font-weight: bold; text-decoration: underline;">💬 Hablar con un asesor ahora</a>`;
        }

        let vehicle = VEHICLE_DATA.find(v =>
            msg.includes(v.modelo.toLowerCase()) ||
            (v.patente && msg.includes(v.patente.toLowerCase()))
        );

        if (!vehicle && activeVehicle) {
            vehicle = activeVehicle;
        }

        if (vehicle) {
            setActiveVehicle(vehicle);

            if (msg.includes("precio") || msg.includes("valor")) {
                return `Mercedes: El ${vehicle.modelo} tiene un ${getFireIcon('precio')} de ${vehicle.price || 'consultar'} USD.`;
            }
            if (msg.includes("kilometraje") || msg.includes("km")) {
                return `Mercedes: El ${vehicle.modelo} cuenta con ${vehicle.ultimoKilometraje.toLocaleString()} km.`;
            }
            if (msg.includes("color")) {
                return `Mercedes: Este ${vehicle.modelo} es de color ${vehicle.color}.`;
            }
            if (msg.includes("año") || msg.includes("anio")) {
                return `Mercedes: El ${vehicle.modelo} es del año ${vehicle.anio}.`;
            }
            return `Mercedes: Excelente elección con el ${vehicle.modelo}. Te recuerdo que quedan muy pocos ${getFireIcon('dias')} para que esta oportunidad se agote.`;
        }

        if (msg.includes("hola") || msg.includes("buenos días") || msg.includes("buenas tardes")) {
            return "Mercedes: Bienvenido a Class Benz. Estoy lista para asistirte con nuestro inventario.";
        }

        return `Mercedes: Lo siento, no tengo esa información específica. Un asesor puede ayudarte personalmente. <br/><br/> <a href="${WHATSAPP_LINK}" target="_blank" rel="noopener noreferrer" style="color:#10B981; text-decoration:underline; font-weight:bold;">Clic aquí para hablar con un asesor</a>`;
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMessage = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = generateBotResponse(userMessage);
            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        // CAMBIO: 'fixed' eliminado. Ahora es 'relative'.
        <div className="relative font-sans">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-black border border-[hsl(175,100%,25%)] flex items-center justify-center transition-transform hover:scale-105"
            >
                <MercedesStar className="text-[hsl(175,100%,45%)] w-9 h-9" />
            </button>

            {isOpen && (
                // La posición del chat sigue siendo absoluta respecto al botón, pero ahora está contenida.
                <div className="absolute bottom-20 right-0 w-[350px] h-[520px] bg-black/95 border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl z-[100]">
                    <div ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[11px] ${m.role === 'user' ? 'bg-[hsl(175,100%,15%)] text-white' : 'bg-zinc-900/90 text-zinc-300'}`}>
                                    <span dangerouslySetInnerHTML={{ __html: m.text }} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSend} className="p-4 bg-black border-t border-white/5 flex gap-2">
                        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escriba aquí su consulta..." className="flex-1 bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-[11px] text-white" />
                        <button type="submit" className="w-11 h-11 bg-[hsl(175,100%,25%)] rounded-xl flex items-center justify-center">
                            <Send className="w-4 h-4 text-white" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}