import { Button } from "@/components/ui/button"
import { ArrowRightIcon, Quote, QuoteIcon, TextQuote } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function ClientsTestimonials({ onContact }: { onContact?: () => void }) {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl sm:text-4xl text-primary font-semibold text-center">
          CLIENTES Y TESTIMONIOS
        </h2>

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
          <img src="ypf.png" alt="YPF" width={150} />
        </LogoBox>
        <LogoBox>
          <img src="mercadolibre.png" alt="Mercado Libre" width={150} />
        </LogoBox>
        <LogoBox>
          <img src="amazon.png" alt="Amazon" width={150} />
        </LogoBox>
        <LogoBox>
          <img src="latam.png" alt="Latam" width={150} />
        </LogoBox>
        </Marquee>

        <div className="w-full grid sm:grid-cols-2 gap-6">
        <QuoteCard
          quote="Incorporar DataOK nos permitió automatizar controles que hacíamos a mano. Hoy validamos más, más rápido y con menos errores."
          author="Payroll Manager"
          company="Empresa Regional"
        />
        <QuoteCard
          quote="No sabíamos cuántos errores evitábamos hasta que DataOK los empezó a mostrar."
          author="Controller financiero"
          company="Multinacional"
        />
        </div>

        <div className="flex flex-col items-center gap-4">
        <Button size="lg" className="hover:scale-105 transition-all duration-300" onClick={onContact}>
          Contáctanos
          <ArrowRightIcon className="size-4" />
        </Button>
          <p className="text-center text-sm text-muted-foreground">
            Sin implementación costosa · Sin compromiso · Con soporte real
          </p>
        </div>
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

function QuoteCard({ quote, author, company }: { quote: string; author: string; company: string }) {
  return (
    <div className="rounded-xl bg-card shadow-sm border p-6 relative bg-transparent flex flex-col justify-between">
      <div className="absolute top-2 right-2">
        <QuoteIcon className="size-6  text-primary" />
      </div>
      <p className="text-lg italic text-foreground">
        {quote}
      </p>
      <div className="mt-6">
        <p className="text-foreground/80 font-bold">{author}</p>
        <p className="text-foreground/80">{company}</p>
      </div>
    </div>
  )
}
