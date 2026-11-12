export interface ProjectItem {
  id: string;
  title: string;
  category: 'cholets' | 'multifamiliares' | 'comerciales' | 'desarrollos';
  categoryLabel: string;
  location: string;
  image: string;
  year?: string;
  area?: string;
  features: string[];
  description: string;
  testimonial?: {
    quote: string;
    author: string;
    detail: string;
  };
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'edificio-el-alto',
    title: 'Edificio Familiar Multifamiliar',
    category: 'multifamiliares',
    categoryLabel: 'Edificios Multifamiliares',
    location: 'El Alto, Bolivia',
    image: '/assets/images/testimonial_edificio_elalto.jpg',
    year: '2025',
    area: '920 m²',
    features: ['Ingeniería BIM', 'Departamentos de renta', 'Locales comerciales en planta baja', 'Estructura sismo-resistente'],
    description: 'Edificio multifamiliar de 7 plantas optimizado para máxima rentabilidad y retorno de inversión en zona estratégica de El Alto.',
    testimonial: {
      quote: 'Teníamos el terreno parado hace años. Plusvaly nos hizo el diseño, el BIM completo y arrancamos obra. Ahora el edificio ya genera renta todos los meses.',
      author: 'Familia Choque',
      detail: 'Edificio Familiar - El Alto'
    }
  },
  {
    id: 'vivienda-residencial-la-paz',
    title: 'Vivienda Residencial de Lujo',
    category: 'cholets',
    categoryLabel: 'Casa de Lujo y Cholets',
    location: 'La Paz, Bolivia',
    image: '/assets/images/proj_vivienda_residencial_lapaz.jpg',
    year: '2024',
    area: '680 m²',
    features: ['Diseño bioclimático', 'Piscina infinity temperada', 'Domótica integral', 'Carpeta BIM ejecutiva'],
    description: 'Residencia unifamiliar vanguardista integrada al relieve natural de La Paz, con amplios ventanales termoacústicos y acabados de primera línea.'
  },
  {
    id: 'residencia-palmeras',
    title: 'Villa Exclusiva con Jardines Tropicales',
    category: 'cholets',
    categoryLabel: 'Casa de Lujo y Cholets',
    location: 'Bermejo / Santa Cruz, Bolivia',
    image: '/assets/images/testimonial_residencia_palmeras.jpg',
    year: '2024',
    area: '750 m²',
    features: ['Piscina privada', 'Galerías exteriores techadas', 'Aislamiento térmico', 'Materiales certificados Gladymar'],
    description: 'Casa campestre contemporánea diseñada para el confort en clima cálido, con ventilación cruzada natural y arquitectura horizontal.'
  },
  {
    id: 'residencia-coches',
    title: 'Residencia Moderna con Doble Garaje',
    category: 'cholets',
    categoryLabel: 'Casa de Lujo y Cholets',
    location: 'La Paz (Zona Sur), Bolivia',
    image: '/assets/images/testimonial_residencia_coches.jpg',
    year: '2025',
    area: '540 m²',
    features: ['Garaje para 3 vehículos', 'Doble altura interior', 'Muro cortina de vidrio templado', 'Revestimientos pétreos'],
    description: 'Vivienda de alto estándar con volumetría escultórica en hormigón visto y acero, concebida para la privacidad y la elegancia.'
  },
  {
    id: 'torre-multifamiliar-completa',
    title: 'Torre Residencial & Comercial',
    category: 'multifamiliares',
    categoryLabel: 'Edificios Multifamiliares',
    location: 'Oruro / La Paz, Bolivia',
    image: '/assets/images/torre_multifamiliar_banner.jpg',
    year: '2025',
    area: '1,450 m²',
    features: ['Fachada con paneles amaderados', 'Balcones panorámicos de vidrio laminado', 'Iluminación arquitectónica LED', 'Ascensor de alta velocidad'],
    description: 'Edificio icónico de departamentos de 1, 2 y 3 dormitorios con terrazas privadas y áreas comunes en rooftop.'
  },
  {
    id: 'torre-curva',
    title: 'Torre Residencial Ondulada',
    category: 'desarrollos',
    categoryLabel: 'Desarrollos Inmobiliarios',
    location: 'La Paz, Bolivia',
    image: '/assets/images/proj_torre_curva.jpg',
    year: '2025',
    area: '3,800 m²',
    features: ['Diseño paramétrico curvilíneo', 'Balcones continuos', 'Eficiencia energética clase A', 'Simulación solar BIM'],
    description: 'Propuesta inmobiliaria de vanguardia con terrazas ondulantes que maximizan la insolación y las vistas urbanas.'
  },
  {
    id: 'residencia-aerea',
    title: 'Residencia Esculpida Tropical',
    category: 'desarrollos',
    categoryLabel: 'Desarrollos Inmobiliarios',
    location: 'Bolivia',
    image: '/assets/images/proj_residencia_aerea.jpg',
    year: '2024',
    area: '1,100 m²',
    features: ['Cubierta orgánica fluida', 'Parque privado integrado', 'Hormigón blanco postensado', 'Sostenibilidad hídrica'],
    description: 'Desarrollo residencial inmerso en la vegetación que combina curvas biofílicas con ingeniería estructural avanzada.'
  },
  {
    id: 'pabellon-futurista',
    title: 'Pabellón de Innovación & Vivienda',
    category: 'comerciales',
    categoryLabel: 'Edificios Comerciales',
    location: 'La Paz, Bolivia',
    image: '/assets/images/proj_pabellon_futurista.jpg',
    year: '2024',
    area: '420 m²',
    features: ['Galería de exhibición vehicular', 'Estructura portalada de hormigón', 'Espejo de agua perimetral', 'Iluminación indirecta neón'],
    description: 'Espacio vanguardista híbrido de vivienda y exhibición de alta gama con pasarela volada de hormigón y cristal.'
  },
  {
    id: 'residencia-atardecer',
    title: 'Mansión Mirador al Atardecer',
    category: 'cholets',
    categoryLabel: 'Casa de Lujo y Cholets',
    location: 'La Paz, Bolivia',
    image: '/assets/images/proj_residencia_atardecer.jpg',
    year: '2025',
    area: '720 m²',
    features: ['Vistas panorámicas 180°', 'Voladizos extremos de 4.5m', 'Ingeniería estructural antisísmica', 'Cascada arquitectónica'],
    description: 'Arquitectura de geometrías puras y planos inclinados orientados hacia la puesta de sol de la cordillera andina.'
  }
];

export const GUARANTEES_DATA = [
  {
    id: 'mat-cert',
    title: 'Materiales Certificados',
    description: 'Trabajamos exclusivamente con insumos de primera línea de marcas homologadas (Soboce, Gladymar, Tigre Plasmar, Lomas Fierro).'
  },
  {
    id: 'cost-cero',
    title: 'Cero Costos Ocultos',
    description: 'Presupuesto cerrado con cómputos métricos extraídos directamente del modelo BIM 3D antes del primer vaciado.'
  },
  {
    id: 'tiempo-cumplido',
    title: 'Plazos Garantizados',
    description: 'Cronograma estricto regido por Lean Construction y Last Planner System para asegurar hitos semanales sin retrasos.'
  },
  {
    id: 'bim-total',
    title: 'Ingeniería BIM 100%',
    description: 'Modelado federado de arquitectura, estructura e instalaciones hidrosanitarias y eléctricas para eliminar colisiones previas.'
  },
  {
    id: 'supervision',
    title: 'Supervisión Continua',
    description: 'Ingenieros residentes calificados permanentemente en obra controlando calidad de armaduras, fraguado y acabados.'
  },
  {
    id: 'llave-en-mano',
    title: 'Entrega Llave en Mano',
    description: 'Acompañamiento absoluto desde el estudio de suelos inicial hasta la entrega final de llaves y documentación legal en regla.'
  }
];

export const CERTIFIED_BRANDS = [
  { name: 'LOMAS FIERRO', category: 'Acero Estructural' },
  { name: 'TIGRE PLASMAR', category: 'Tuberías & Accesorios' },
  { name: 'SOBOCE READYMIX', category: 'Hormigón Premezclado' },
  { name: 'ISOCRET', category: 'Sistemas Aislantes' },
  { name: 'GLADYMAR', category: 'Pisos & Porcelanatos' },
  { name: 'TUMPAR', category: 'Materiales & Acabados' },
  { name: 'STI', category: 'Tecnología en Construcción' }
];

export const WORK_PHASES = [
  {
    phase: 'FASE 01',
    title: 'Diseño Arquitectónico',
    summary: 'Conceptualización espacial, estética y funcional adaptada a la normativa y al terreno.',
    details: [
      'Levantamiento topográfico y estudio de mecánica de suelos.',
      'Distribución de plantas arquitectónicas y elevaciones 3D hiperrealistas.',
      'Cálculo de asoleamiento, iluminación natural y confort térmico.',
      'Aprobación municipal de anteproyecto arquitectónico.'
    ]
  },
  {
    phase: 'FASE 02',
    title: 'BIM - Carpeta Ejecutiva Completa',
    summary: 'Ingeniería de todas las especialidades integrada en 3D antes de poner el primer ladrillo.',
    details: [
      'Cálculo y diseño estructural antisísmico computarizado.',
      'Diseño hidrosanitario, pluvial y bombas de agua.',
      'Ingeniería eléctrica, iluminación LED, corrientes débiles y domótica.',
      'Detección automática de choques o interferencias entre ductos y vigas.',
      'Cómputos métricos exactos y presupuesto cerrado al centavo.'
    ]
  },
  {
    phase: 'FASE 03',
    title: 'Construcción con Lean',
    summary: 'Ejecución rigurosa en obra sin sobrecostos ni tiempos muertos.',
    details: [
      'Planificación semanal con metodología Last Planner System.',
      'Control diario de cuadrillas y suministro justo a tiempo de materiales.',
      'Ensayos de probetas de hormigón en laboratorio certificado.',
      'Reportes fotográficos y de avance semanales para el propietario.'
    ]
  }
];
