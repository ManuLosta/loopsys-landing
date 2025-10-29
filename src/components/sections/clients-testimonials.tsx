import { Button } from "@/components/ui/button"
import Marquee from "react-fast-marquee";

export default function ClientsTestimonials({ onContact }: { onContact?: () => void }) {
  return (
    <section className="flex flex-col items-center gap-10 py-16">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl sm:text-4xl text-primary font-semibold text-center">
          CLIENTES Y TESTIMONIOS
        </h2>
      </div>

      <Marquee className="w-full" pauseOnHover style={{
        maskImage: `linear-gradient(${
              "to right"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          ,
        WebkitMaskImage: `linear-gradient(${
              "to right"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          ,
      }}>
        <LogoBox>
          <img src="/ypf.png" alt="YPF" width={150} />
        </LogoBox>
        <LogoBox>
          <img src="/mercadolibre.png" alt="Mercado Libre" width={150} />
        </LogoBox>
        <LogoBox>
          <img src="/amazon.png" alt="Amazon" width={150} />
        </LogoBox>
        <LogoBox>
          <img src="/latam.png" alt="Latam" width={150} />
        </LogoBox>
      </Marquee>

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
        <Button size="lg" className="rounded-full px-8" onClick={onContact}>Contáctanos</Button>
        <p className="text-center text-sm text-muted-foreground">
          Sin implementación costosa · Sin compromiso · Con soporte real
        </p>
      </div>
    </section>
  )
}

function LogoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-8 py-2 flex items-center justify-center">
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
