export default function CommonProblems() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl sm:text-4xl text-primary font-semibold text-center">
            PROBLEMAS COMÚNES
          </h2>
        </div>

        <div className="w-full border-2 border-primary/70 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            ¿Identificas alguno de estos problemas con tu empresa?
          </h3>

          <ul className="flex flex-col gap-6">
            <ProblemItem
              title="Errores manuales recurrentes"
              description="Errores humanos que ocurren por la carga manual de datos"
            />
            <ProblemItem
              title="Costes en aumento"
              description="La competitividad requiere inversiones crecientes en recursos."
            />
            <ProblemItem
              title="Sobrecarga y estrés operativo"
              description="Pérdida de tiempo en tareas repetitivas y poco estratégicas. Jornadas enteras revisando planillas antes de un cierre"
            />
            <ProblemItem
              title="Agilidad Restringida"
              description="La personalización de soluciones demora y limita la respuesta al mercado."
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProblemItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex items-start gap-4">
      <BulletIcon className="text-primary size-8 mt-1 shrink-0" />
      <p className="leading-relaxed">
        <span className="font-semibold">{title}: </span>
        {description}
      </p>
    </li>
  )
}

function BulletIcon({ className = "" }: { className?: string }) {
  return (
    <img src="bullet.svg" alt="Bullet" width={24} height={24} className={className} />
  )
}


