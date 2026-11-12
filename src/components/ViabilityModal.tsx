import React, { useState } from 'react';
import { X, Send, Calculator, Building, MapPin, CheckCircle2, Ruler } from 'lucide-react';

interface ViabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ViabilityModal: React.FC<ViabilityModalProps> = ({ isOpen, onClose }) => {
  const [city, setCity] = useState('La Paz');
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('300');
  const [projectType, setProjectType] = useState('Edificio Multifamiliar de Renta');
  const [floors, setFloors] = useState('5');
  const [hasLegalPapers, setHasLegalPapers] = useState('Sí, papeles al día');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  // Approximate metrics calculation
  const numericArea = parseFloat(area) || 300;
  const numericFloors = parseInt(floors) || 4;
  const estimatedConstructedArea = Math.round(numericArea * numericFloors * 0.75);
  const estimatedUnits = projectType.includes('Multifamiliar')
    ? Math.max(2, Math.floor(estimatedConstructedArea / 85))
    : projectType.includes('Comercial')
    ? Math.max(1, Math.floor(estimatedConstructedArea / 120))
    : 1;

  const handleWhatsAppSend = () => {
    const text = `¡Hola Plusvaly! Quisiera consultar la viabilidad de mi terreno sin compromiso:%0A%0A` +
      `👤 *Nombre:* ${name || 'Cliente interesado'}%0A` +
      `📍 *Ciudad:* ${city} (${zone || 'Sin zona especificada'})%0A` +
      `📐 *Superficie de terreno:* ${area} m²%0A` +
      `🏗️ *Tipo de Proyecto:* ${projectType}%0A` +
      `🏢 *Pisos estimados:* ${floors} plantas%0A` +
      `📄 *Documentación:* ${hasLegalPapers}%0A` +
      `📊 *Área construible aproximada estimada:* ~${estimatedConstructedArea} m² (%C2%B1 ${estimatedUnits} unidades)%0A%0A` +
      `Me gustaría recibir asesoramiento para el diseño arquitectónico y modelado BIM.`;

    window.open(`https://wa.me/59164147526?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#0d1e38] border border-[#233f6b] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c3358] bg-[#091528]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#c8e626]/10 text-[#c8e626]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Evaluación de Viabilidad de Terreno</h3>
              <p className="text-xs text-slate-400">Le decimos si su lote es viable para renta o vivienda sin costo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Nombre y Ciudad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Su Nombre o Apellido
              </label>
              <input
                type="text"
                placeholder="Ej. Ing. Carlos Mamani"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#091322] border border-[#233f6b] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#c8e626] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Ciudad del Terreno
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#091322] border border-[#233f6b] rounded-lg text-white focus:outline-none focus:border-[#c8e626] transition-colors"
              >
                <option value="La Paz">La Paz (Centro, Zona Sur, Miraflores, Sopocachi)</option>
                <option value="El Alto">El Alto (Ciudad Satélite, Ceja, Río Seco, Senkata)</option>
                <option value="Oruro">Oruro</option>
                <option value="Bermejo">Bermejo</option>
                <option value="Cochabamba">Cochabamba</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Otra ciudad">Otra ciudad en Bolivia</option>
              </select>
            </div>
          </div>

          {/* Zona y Superficie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Zona o Barrio específico
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ej. Calacoto, 16 de Julio, etc."
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 bg-[#091322] border border-[#233f6b] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#c8e626] transition-colors"
                />
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Superficie del Terreno (m²)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="50"
                  max="10000"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 bg-[#091322] border border-[#233f6b] rounded-lg text-white focus:outline-none focus:border-[#c8e626] transition-colors font-mono"
                />
                <Ruler className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Tipo de Proyecto y Pisos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Tipo de Proyecto Deseado
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#091322] border border-[#233f6b] rounded-lg text-white focus:outline-none focus:border-[#c8e626] transition-colors"
              >
                <option value="Edificio Multifamiliar de Renta">Edificio Multifamiliar de Renta</option>
                <option value="Casa de Lujo o Cholet">Casa de Lujo o Cholet</option>
                <option value="Edificio Comercial / Oficinas">Edificio Comercial / Oficinas</option>
                <option value="Desarrollo Inmobiliario / Lotes">Desarrollo Inmobiliario / Lotes</option>
                <option value="Vivienda Residencial Unifamiliar">Vivienda Residencial Unifamiliar</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Nivel de Pisos Estimados
              </label>
              <select
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#091322] border border-[#233f6b] rounded-lg text-white focus:outline-none focus:border-[#c8e626] transition-colors font-mono"
              >
                <option value="2">2 Plantas</option>
                <option value="3">3 Plantas</option>
                <option value="4">4 Plantas</option>
                <option value="5">5 Plantas</option>
                <option value="6">6 Plantas</option>
                <option value="7">7 Plantas</option>
                <option value="8">8+ Plantas</option>
              </select>
            </div>
          </div>

          {/* Estado de Documentación */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Estado de los Papeles
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['Sí, papeles al día', 'En proceso de trámite', 'Tiene construcción a demoler'].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setHasLegalPapers(item)}
                  className={`px-3 py-2 text-xs rounded-lg border text-left transition-all ${
                    hasLegalPapers === item
                      ? 'border-[#c8e626] bg-[#c8e626]/10 text-white font-medium'
                      : 'border-[#233f6b] bg-[#091322] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Live Pre-estimation Banner */}
          <div className="p-4 rounded-xl bg-[#091528] border border-[#233f6b] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c8e626]">
                Proyección preliminar
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-black text-white font-mono">
                  ~{estimatedConstructedArea} m²
                </span>
                <span className="text-xs text-slate-400">área construible estimada</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Capacidad estimada: <strong className="text-slate-200">{estimatedUnits} departamentos/locales</strong> según retiro y rasante.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              <span>Apto para Fase 01 BIM</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#091528] border-t border-[#1c3358] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Respuesta directa de nuestros ingenieros por WhatsApp en minutos.
          </div>
          <button
            onClick={handleWhatsAppSend}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#c8e626] text-black font-bold hover:bg-[#b5d31f] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#c8e626]/20 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
