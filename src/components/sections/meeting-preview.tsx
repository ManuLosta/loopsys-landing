export default function MeetingPreview() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-16">
      <div className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-semibold">
        En una llamada de 30 mins vamos a…
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="border rounded-xl p-6 flex items-start justify-between gap-6">
          <p className="text-lg max-w-[520px]">
            Ver ejemplos concretos de automatización y entregarte una propuesta de solución <span className="text-primary font-semibold">REAL</span>
          </p>
          <LightbulbIcon className="text-primary size-16 shrink-0" />
        </div>

        <div className="border rounded-xl p-6 flex items-start justify-between gap-6">
          <p className="text-lg max-w-[520px]">
            <span className="text-primary font-semibold">Revisar</span> tus procesos actuales e <span className="text-primary font-semibold">Identificar</span> puntos de mejora
          </p>
          <ProcessIcon className="text-primary size-16 shrink-0" />
        </div>
      </div>

      <p className="text-center text-sm italic max-w-[640px]">
        *No es una reunión de venta. Es una conversación para entender tu proyecto, analizarlo y darte claridad antes de avanzar.*
      </p>
    </section>
  )
}

function LightbulbIcon({ className = "" }: { className?: string }) {
  return (
    <img src="/lightbulb.svg" alt="Lightbulb" width={24} height={24} className={className} />
  )
}

function ProcessIcon({ className = "" }: { className?: string }) {
  return (
    <img src="/box.svg" alt="Process" width={24} height={24} className={className} />
  )
}


