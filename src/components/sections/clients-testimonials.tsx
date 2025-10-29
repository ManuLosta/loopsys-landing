import { Button } from "@/components/ui/button"

export default function ClientsTestimonials() {
  return (
    <section className="flex flex-col items-center gap-10 py-16">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl sm:text-4xl text-primary font-semibold text-center">
          CLIENTES Y TESTIMONIOS
        </h2>
        <div className="h-[4px] w-28 bg-foreground/60 rounded-full"></div>
      </div>

      <div className="w-full flex items-center justify-center gap-10 flex-wrap">
        <LogoBox>YPF</LogoBox>
        <LogoBox>
          <span className="font-semibold">mercado</span>
          <span className="font-semibold"> libre</span>
        </LogoBox>
        <LogoBox>
          <span className="font-semibold">amazon</span>
        </LogoBox>
      </div>

      <div className="w-full grid sm:grid-cols-2 gap-6">
        <QuoteCard
          quote="Incorporar DataOK nos permitió automatizar controles que hacíamos a mano. Hoy validamos más, más rápido y con menos errores."
          author="Payroll Manager, empresa regional"
        />
        <QuoteCard
          quote="No sabíamos cuántos errores evitábamos hasta que DataOK los empezó a mostrar."
          author="Controller financiero, multinacional"
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button size="lg" className="rounded-full px-8">Contáctanos</Button>
        <p className="text-center text-sm text-muted-foreground">
          Sin implementación costosa · Sin compromiso · Con soporte real
        </p>
      </div>
    </section>
  )
}

function LogoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-28 min-h-12 px-4 py-2 rounded-md bg-secondary text-foreground/90 flex items-center justify-center text-xl">
      {children}
    </div>
  )
}

function QuoteCard({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="rounded-xl bg-card shadow-sm border p-6 relative">
      <blockquote className="text-lg leading-relaxed italic text-foreground/90">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 text-foreground/80 italic">– {author}</figcaption>
    </figure>
  )
}


