export interface Property {
  id: string;
  title: string;
  tipo: "atico" | "villa" | "casa" | "loft" | "apartamento";
  price: string;
  priceValue: number;
  location: string;
  city: "miraflores" | "san-isidro" | "la-molina" | "barranco" | "asia";
  beds: number;
  baths: number;
  sqm: number;
  tag?: string;
  images: string[];
  description: string;
  features: string[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  phone: string;
  email: string;
  photo: string;
  languages: string[];
  sales: number;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Penthouse Vista al Pacífico",
    tipo: "atico",
    price: "S/ 3.850.000",
    priceValue: 3850000,
    location: "Malecón de la Reserva, Miraflores",
    city: "miraflores",
    beds: 4,
    baths: 3,
    sqm: 280,
    tag: "Exclusivo",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&h=1300&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=900&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
    ],
    description:
      "Penthouse de lujo en el icónico Malecón de la Reserva con vistas panorámicas al Pacífico y el acantilado de Miraflores. Acabados de primera línea, terrazas privadas y amenidades exclusivas definen este espacio único en la capital peruana.",
    features: ["Terraza de 90 m²", "Piscina privada", "Spa completo", "Bodega climatizada", "Domótica integral", "Estacionamiento × 3"],
  },
  {
    id: "2",
    title: "Casa La Planicie",
    tipo: "casa",
    price: "S/ 2.200.000",
    priceValue: 2200000,
    location: "La Planicie, La Molina",
    city: "la-molina",
    beds: 5,
    baths: 4,
    sqm: 480,
    tag: "Nueva",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&h=1200&fit=crop&auto=format",
    ],
    description:
      "Residencia de nueva construcción en La Planicie, el entorno más tranquilo y verde de La Molina. Arquitectura contemporánea con grandes jardines, piscina y materiales importados de primera calidad.",
    features: ["Jardín de 1.200 m²", "Piscina con heating", "Cuarto de servicio", "Garaje × 4", "Paneles solares", "Certificado A"],
  },
  {
    id: "3",
    title: "Departamento Premium",
    tipo: "apartamento",
    price: "S/ 1.150.000",
    priceValue: 1150000,
    location: "Av. Javier Prado Este, San Isidro",
    city: "san-isidro",
    beds: 3,
    baths: 2,
    sqm: 195,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&h=900&fit=crop&auto=format",
    ],
    description:
      "Departamento de alta gama en el corazón financiero de San Isidro. Techos de doble altura, acabados europeos y una terraza privada con vistas sobre el Olivar, el bosque más icónico de Lima.",
    features: ["Terraza 40 m²", "Doble altura 5 m", "Cocina italiana", "Pisos de mármol", "Clima centralizado", "Conserje 24 h"],
  },
  {
    id: "4",
    title: "Mansión Chacarilla",
    tipo: "casa",
    price: "S/ 4.500.000",
    priceValue: 4500000,
    location: "Chacarilla del Estanque, Surco",
    city: "la-molina",
    beds: 6,
    baths: 5,
    sqm: 750,
    tag: "Oportunidad",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=900&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
    ],
    description:
      "Mansión de lujo en Chacarilla del Estanque, uno de los urbanizaciones más exclusivas de Lima. Gran parcela arbolada, piscina temperada, cancha de squash y toda la privacidad que una familia exigente merece.",
    features: ["Parcela 2.800 m²", "Piscina temperada", "Cancha de squash", "Cine privado", "Sala de fitness", "Garaje × 6"],
  },
  {
    id: "5",
    title: "Loft Boutique Barranco",
    tipo: "loft",
    price: "S/ 850.000",
    priceValue: 850000,
    location: "Av. Grau, Barranco",
    city: "barranco",
    beds: 2,
    baths: 2,
    sqm: 165,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&h=1000&fit=crop&auto=format",
    ],
    description:
      "Antiguo almacén republicano convertido en loft de diseño en el barrio más bohemio de Lima. Techos de 5 metros, vigas originales de madera y ventanales industriales crean una atmósfera única e irrepetible.",
    features: ["Techos 5 m", "Vigas originales", "Mezzanine", "Cocina abierta", "Acceso azotea", "Bicicleta parking"],
  },
  {
    id: "6",
    title: "Casona Colonial Barranco",
    tipo: "casa",
    price: "S/ 5.600.000",
    priceValue: 5600000,
    location: "Pedro de Osma, Barranco",
    city: "barranco",
    beds: 7,
    baths: 6,
    sqm: 920,
    tag: "Exclusivo",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1400&h=900&fit=crop&auto=format",
    ],
    description:
      "Casona republicana de 1918 completamente restaurada en la calle más icónica de Barranco. Jardín interior, piscina y una arquitectura de época preservada con maestría que convive con interiores de diseño contemporáneo.",
    features: ["Jardín 1.800 m²", "Piscina", "Biblioteca", "Sala de música", "Cuartos de servicio", "Ascensor privado"],
  },
  {
    id: "7",
    title: "Departamento Malecón",
    tipo: "apartamento",
    price: "S/ 620.000",
    priceValue: 620000,
    location: "Malecón Cisneros, Miraflores",
    city: "miraflores",
    beds: 2,
    baths: 1,
    sqm: 95,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=1000&fit=crop&auto=format",
    ],
    description:
      "Departamento en el codiciado Malecón Cisneros con vistas directas al Pacífico. Reforma integral respetando los detalles originales del edificio, con acabados modernos que elevan la experiencia de vivir frente al mar.",
    features: ["Vista al mar", "Reforma integral", "Pisos de madera", "Balcón exterior", "Edificio seguro", "Estacionamiento"],
  },
  {
    id: "8",
    title: "Villa Asia Ocean Club",
    tipo: "villa",
    price: "S/ 1.650.000",
    priceValue: 1650000,
    location: "Asia, Cañete",
    city: "asia",
    beds: 4,
    baths: 3,
    sqm: 380,
    tag: "Nueva",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=1200&fit=crop&auto=format",
    ],
    description:
      "Villa de playa de nueva construcción en el exclusivo balneario de Asia, el destino de verano más codiciado por la élite limeña. Acceso privado a la playa, piscina infinity y materiales de primer nivel.",
    features: ["Jardín 600 m²", "Piscina infinity", "Acceso playa privada", "Garaje × 3", "Domótica completa", "Amoblado"],
  },
  {
    id: "9",
    title: "Departamento Centro Financiero",
    tipo: "apartamento",
    price: "S/ 1.050.000",
    priceValue: 1050000,
    location: "Centro Empresarial, San Isidro",
    city: "san-isidro",
    beds: 3,
    baths: 2,
    sqm: 150,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=900&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=1400&h=1000&fit=crop&auto=format",
    ],
    description:
      "Departamento ejecutivo en el corazón financiero de San Isidro, a metros de las principales sedes corporativas. Diseño minimalista, vistas a las lomas y acceso directo a los mejores restaurantes de Lima.",
    features: ["Terraza 25 m²", "Vistas a las lomas", "Piscina comunitaria", "Gimnasio", "Seguridad 24 h", "Estacionamiento × 2"],
  },
];

export const agents: Agent[] = [
  {
    id: "a1",
    name: "María Fernández",
    role: "Directora General",
    specialty: "Propiedades de Ultra Lujo",
    phone: "+51 999 000 001",
    email: "maria.fernandez@arque.pe",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&auto=format",
    languages: ["Español", "Inglés", "Francés"],
    sales: 142,
  },
  {
    id: "a2",
    name: "Carlos Torres",
    role: "Asesor Senior",
    specialty: "Mercado Limeño",
    phone: "+51 999 000 002",
    email: "carlos.torres@arque.pe",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&auto=format",
    languages: ["Español", "Inglés"],
    sales: 98,
  },
  {
    id: "a3",
    name: "Ana Quispe",
    role: "Especialista Miraflores",
    specialty: "Residencial Miraflores y Barranco",
    phone: "+51 999 000 003",
    email: "ana.quispe@arque.pe",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=700&fit=crop&auto=format",
    languages: ["Español", "Inglés", "Quechua"],
    sales: 87,
  },
  {
    id: "a4",
    name: "Diego Villanueva",
    role: "Asesor Internacional",
    specialty: "Inversión y Clientes Extranjeros",
    phone: "+51 999 000 004",
    email: "diego.villanueva@arque.pe",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&auto=format",
    languages: ["Español", "Inglés", "Portugués"],
    sales: 73,
  },
];
