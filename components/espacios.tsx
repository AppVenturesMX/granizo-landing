import { BedDouble, Sofa, Warehouse, Droplets, Briefcase } from "lucide-react"
import { Reveal } from "@/components/reveal"

const espacios = [
  {
    icon: BedDouble,
    title: "3 Recámaras + Estancia de TV",
    description:
      "Con opción a convertirse en 4ta recámara o tu oficina de Home Office. La recámara principal es un oasis con baño privado y clóset gigante.",
  },
  {
    icon: Sofa,
    title: "Área Social",
    description:
      "Sala súper amplia para tus reuniones, comedor independiente y cocina integral lista para disfrutar.",
  },
  {
    icon: Warehouse,
    title: "Comodidad",
    description: "Estacionamiento techado, patio frontal y patio trasero.",
  },
  {
    icon: Droplets,
    title: "Plus técnico",
    description:
      "Cisterna de concreto con bomba (¡olvídate de los cortes de agua!), tanque estacionario y boiler Bosch de alta capacidad.",
  },
  {
    icon: Briefcase,
    title: "¿Visión de negocio?",
    description:
      "Ubicación con potencial de uso comercial (sujeto a verificación del uso de suelo).",
  },
]

export function Espacios() {
  return (
    <section id="espacios" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Espacios que enamoran
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Amplitud, confort y detalles pensados para vivir sin
            preocupaciones.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {espacios.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
