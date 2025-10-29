import { useState } from "react"
import { Button } from "@/components/ui/button"

type Step = "form" | "calendly"

export default function ContactFlow({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [step, setStep] = useState<Step>("form")

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-background w-full max-w-2xl rounded-2xl shadow-xl border">
        <button
          aria-label="Cerrar"
          className="absolute top-3 right-3 text-foreground/70 hover:text-foreground"
          onClick={() => onOpenChange(false)}
        >
          ×
        </button>

        {step === "form" ? <ContactForm onContinue={() => setStep("calendly")} /> : <CalendlyPlaceholder onClose={() => onOpenChange(false)} />}
      </div>
    </div>
  )
}

function ContactForm({ onContinue }: { onContinue: () => void }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onContinue()
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 flex flex-col gap-4">
      <h3 className="text-2xl font-semibold">Conversemos</h3>
      <p className="text-sm text-muted-foreground">Déjanos tus datos y agendamos la reunión.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm">Nombre</span>
          <input required name="name" className="border rounded-md px-3 h-10 bg-background" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm">Email</span>
          <input required name="email" type="email" className="border rounded-md px-3 h-10 bg-background" />
        </label>
        <label className="flex flex-col gap-1 sm:col-span-2">
          <span className="text-sm">Empresa</span>
          <input name="company" className="border rounded-md px-3 h-10 bg-background" />
        </label>
        <label className="flex flex-col gap-1 sm:col-span-2">
          <span className="text-sm">Mensaje</span>
          <textarea name="message" rows={4} className="border rounded-md px-3 py-2 bg-background" />
        </label>
      </div>

      <div className="mt-2 flex items-center justify-end gap-3">
        <Button type="button" variant="outline" onClick={onContinue}>Saltar</Button>
        <Button type="submit" className="rounded-full px-6">Continuar</Button>
      </div>
    </form>
  )
}

function CalendlyPlaceholder({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-6 sm:p-8 flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-center">Agenda tu reunión</h3>
      <p className="text-center text-sm text-muted-foreground">Aquí iría el embed de Calendly (no integrado).</p>
      <div className="border rounded-xl h-72 sm:h-96 flex items-center justify-center bg-secondary">
        <span className="text-muted-foreground">Calendly aquí</span>
      </div>
      <div className="flex items-center justify-end">
        <Button onClick={onClose} className="rounded-full px-6">Cerrar</Button>
      </div>
    </div>
  )
}


