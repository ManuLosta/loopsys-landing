import { useState } from "react"
import { Button } from "@/components/ui/button"
import StepForm from "./step-form"

type Step = "form" | "calendly"

interface StepFormData {
  processes: string[]
  hasERP: string
  employees: string
  role: string
}

export default function ContactFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>("form")
  const [_, setFormData] = useState<StepFormData | null>(null)

  const handleFormComplete = (data: StepFormData) => {
    setFormData(data)
    setStep("calendly")
  }

  const handleClose = () => {
    setStep("form")
    setFormData(null)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="h-full w-full flex flex-col">
        <div className="relative flex-1 overflow-auto">

          <div className="w-full md:max-w-3xl mx-auto px-4 py-8">
            {step === "form" ? (
              <StepForm onComplete={handleFormComplete} />
            ) : (
              <CalendlyPlaceholder onClose={handleClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendlyPlaceholder({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6 w-full md:max-w-3xl mx-auto">
      <h3 className="text-3xl sm:text-4xl font-semibold text-center">Agenda tu reunión</h3>
      <p className="text-center text-muted-foreground">Aquí iría el embed de Calendly (no integrado).</p>
      <div className="border rounded-xl h-[600px] flex items-center justify-center bg-secondary">
        <span className="text-muted-foreground">Calendly aquí</span>
      </div>
      <div className="flex items-center justify-end">
        <Button onClick={onClose} className="rounded-full px-6">Cerrar</Button>
      </div>
    </div>
  )
}


