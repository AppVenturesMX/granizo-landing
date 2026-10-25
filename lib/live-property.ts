export type LivePhoto = { src: string; alt: string }

type LivePropertyResponse = {
  slug: string
  status: string
  locationBadge: string
  titleHook: string
  title: string
  description: string
  price: number
  currency: string
  heroImage: LivePhoto
  gallery: LivePhoto[]
}

export type LiveGranizoData = {
  heroImage: LivePhoto
  gallery: LivePhoto[]
  price: number
}

const HUB_ORIGIN = "https://bienesraiceshub.com"
const SLUG = "granizo-playas-tijuana"

// Las rutas de foto que vienen de la tabla properties del Hub pueden ser
// relativas (las 7 propiedades migradas desde lib/properties.ts, ej.
// "/images/properties/granizo-playas-tijuana/fachada.jpg", que solo existen
// en el dominio del Hub) o absolutas (fotos subidas después con el botón
// "Subir fotos" del panel, que van a Vercel Blob y ya traen su propio
// https://...). Esta landing vive en su propio dominio aparte, así que toda
// ruta relativa hay que resolverla contra el Hub explícitamente.
function resolveImageSrc(src: string): string {
  return src.startsWith("http") ? src : `${HUB_ORIGIN}${src}`
}

// Trae el precio y las fotos (hero + galería) que Alex puede actualizar
// desde /admin/propiedades/administrar/granizo-playas-tijuana en el Hub,
// sin necesitar un cambio de código en este repo aparte. El título,
// descripción y demás copy de esta landing siguen fijos en el código a
// propósito — cada landing tiene su propio gancho de marketing escrito a
// mano, distinto del campo "título" genérico que usa el Hub, así que no se
// sincroniza automáticamente (evita que un texto pensado para el Hub pise
// el copy ya afinado de esta página). Si se quiere sincronizar también el
// texto más adelante, es un cambio aparte.
//
// Nunca debe tronar ni dejar la página en blanco: cualquier falla (Hub
// caído, el PR del endpoint público todavía sin mergear, red, etc.) regresa
// null y los componentes usan su contenido fijo de siempre.
export async function getLiveGranizoPhotos(): Promise<LiveGranizoData | null> {
  try {
    const res = await fetch(`${HUB_ORIGIN}/api/public/properties/${SLUG}`, { cache: "no-store" })
    if (!res.ok) return null

    const data = (await res.json()) as { property?: LivePropertyResponse }
    if (!data.property) return null

    return {
      heroImage: {
        src: resolveImageSrc(data.property.heroImage.src),
        alt: data.property.heroImage.alt,
      },
      gallery: data.property.gallery.map((img) => ({
        src: resolveImageSrc(img.src),
        alt: img.alt,
      })),
      price: data.property.price,
    }
  } catch {
    return null
  }
}
