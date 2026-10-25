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
// en el dominio del Hub) o absolutas (fotos subidas despuÃ©s con el botÃ³n
// "Subir fotos" del panel, que van a Vercel Blob y ya traen su propio
// https://...). Esta landing vive en su propio dominio aparte, asÃ­ que toda
// ruta relativa hay que resolverla contra el Hub explÃ­citamente.
function resolveImageSrc(src: string): string {
  return src.startsWith("http") ? src : `${HUB_ORIGIN}${src}`
}

// Trae el precio y las fotos (hero + galerÃ­a) que Alex puede actualizar
// desde /admin/propiedades/administrar/granizo-playas-tijuana en el Hub,
// sin necesitar un cambio de cÃ³digo en este repo aparte. El tÃ­tulo,
// descripciÃ³n y demÃ¡s copy de esta landing siguen fijos en el cÃ³digo a
// propÃ³sito â cada landing tiene su propio gancho de marketing escrito a
// mano, distinto del campo "tÃ­tulo" genÃ©rico que usa el Hub, asÃ­ que no se
// sincroniza automÃ¡ticamente (evita que un texto pensado para el Hub pise
// el copy ya afinado de esta pÃ¡gina). Si se quiere sincronizar tambiÃ©n el
// texto mÃ¡s adelante, es un cambio aparte.
//
// Nunca debe tronar ni dejar la pÃ¡gina en blanco: cualquier falla (Hub
// caÃ­do, el PR del endpoint pÃºblico todavÃ­a sin mergear, red, etc.) regresa
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
