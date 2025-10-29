import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-64 gap-4">
      <p className="text-center">
        Sin compromisos ni venta forzada
      </p>
      <div className="h-[2px] w-[98px] bg-foreground"></div>
      <h1 className="sm:text-4xl text-3xl text-primary text-center">
        <span className="font-bold">PRUEBA</span> DE CONCEPTO CON <span className="font-bold">RESULTADOS MEDIBLES</span> EN <span className="font-bold">30 DIAS</span>
      </h1>
      <Button size="lg" className="rounded-full">
        Contáctanos
      </Button>
    </section>
  )
}