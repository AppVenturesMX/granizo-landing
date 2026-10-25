import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Galeria } from "@/components/galeria"
import { Ubicacion } from "@/components/ubicacion"
import { Espacios } from "@/components/espacios"
import { Facilidades } from "@/components/facilidades"
import { Contacto } from "@/components/contacto"
import { FloatingButtons } from "@/components/floating-buttons"
import { SiteFooter } from "@/components/site-footer"
import { EditarPropiedadLink } from "@/components/editar-propiedad-link"
import { getLiveGranizoPhotos } from "@/lib/live-property"

export default async function Page() {
  // Precio y fotos (hero + galería) en vivo desde el panel del Hub, con
  // fallback automático al contenido fijo de siempre si el Hub no responde
  // (ver lib/live-property.ts).
  const live = await getLiveGranizoPhotos()

  return (
    <>
      <Navbar />
      <main>
        <Hero live={live} />
        <Galeria live={live} />
        <Ubicacion />
        <Espacios />
        <Facilidades />
        <Contacto />
      </main>
      <SiteFooter />
      <FloatingButtons />
      <EditarPropiedadLink />
    </>
  )
}
