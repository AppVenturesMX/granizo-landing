// Acceso directo y discreto al panel de edición de esta propiedad en el
// Hub (misma pantalla que usa Alex para dar de alta propiedades nuevas en
// bienesraiceshub.com). Queda protegido por el login de /admin del Hub, así
// que mostrarlo en la página pública no expone nada — un visitante que le
// dé clic solo llega a una pantalla de inicio de sesión.
const EDIT_URL = "https://bienesraiceshub.com/admin/propiedades/administrar/granizo-playas-tijuana"

export function EditarPropiedadLink() {
  return (
    <a
      href={EDIT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-1.5 rounded-full bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-white/70 opacity-60 shadow-lg backdrop-blur transition-opacity hover:opacity-100"
    >
      <span aria-hidden="true">⚙</span>
      Editar propiedad
    </a>
  )
}
