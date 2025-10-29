import { Button } from "@/components/ui/button"

export default function Hero({ onContact }: { onContact?: () => void }) {
  return (
    <section className="py-64">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
        <h1 className="sm:text-6xl text-3xl text-primary text-center">
          <span className="font-bold">PRUEBA</span> DE CONCEPTO CON <span className="font-bold">RESULTADOS MEDIBLES</span> EN <span className="font-bold">30 DIAS</span>
        </h1>
        <p className="text-center text-muted-foreground text-lg">
          Sin compromisos ni venta forzada
        </p>
        <Button size="lg" className="rounded-full" onClick={onContact}>
          Contáctanos
        </Button>
      </div>
    </section>
  )
}