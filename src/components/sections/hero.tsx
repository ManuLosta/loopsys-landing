import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import { motion } from "motion/react";
import { LightRays } from "../ui/light-rays";

export default function Hero({ onContact }: { onContact?: () => void }) {
  return (
    <section className="min-h-screen flex items-center">
      <LightRays />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center gap-4"
      >
        <h1 
        className="sm:text-6xl text-3xl text-primary text-center">
          <span className="font-bold">PRUEBA</span> DE CONCEPTO CON <span className="font-bold">RESULTADOS MEDIBLES</span> EN <span className="font-bold">30 DIAS</span>
        </h1>
        <p className="text-center text-muted-foreground text-lg">
          Sin compromisos ni venta forzada
        </p>
        <Button size="lg" className="hover:scale-105 transition-all duration-300 mt-4" onClick={onContact}>
          Contáctanos
          <ArrowRightIcon className="size-4" />
        </Button>
      </motion.div>
    </section>
  )
}