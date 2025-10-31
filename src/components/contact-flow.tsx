import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import StepForm from "./step-form"
import { InlineWidget } from "react-calendly"
import { useEffect } from "react"
import { trackMetaCustomEvent } from "@/lib/analytics"

type Step = "form" | "calendly"

interface StepFormData {
  processes: string[]
  hasERP: string
  employees: string
  role: string
}

export default function ContactFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>("form")
  const [formData, setFormData] = useState<StepFormData | null>(null)
  const [isQualified, setIsQualified] = useState<boolean>(false)

  const computeIsQualified = (data: StepFormData): boolean => {
    if (data.hasERP === "No") return false
    if (["Gerente", "Otro"].includes(data.role)) return false
    return true
  }

  const handleFormComplete = (data: StepFormData) => {
    setFormData(data)
    const qualified = computeIsQualified(data)
    setIsQualified(qualified)
    setStep("calendly")
  }

  const handleClose = (hasScheduled: boolean) => {
    if (isQualified && !hasScheduled && formData) {
      trackMetaCustomEvent("LeadCualificado", {
        employees: formData.employees,
        role: formData.role,
        hasERP: formData.hasERP,
        processes: formData.processes.join(","),
        scheduled: false,
      })
    }
    setStep("form")
    setFormData(null)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="h-full w-full flex flex-col">
        <div className="relative flex-1 overflow-auto">

          <div className="w-full max-w-screen-xl mx-auto px-4 py-8 h-full min-h-0 flex flex-col">
            {step === "form" ? (
              <StepForm onComplete={handleFormComplete} />
            ) : (
              <CalendlyPlaceholder onClose={handleClose} isQualified={isQualified} formData={formData} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendlyPlaceholder({ onClose, isQualified, formData }: { onClose: (hasScheduled: boolean) => void; isQualified: boolean; formData: StepFormData | null }) {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL 
  const hasScheduledRef = useRef(false)

  useEffect(() => {
    hasScheduledRef.current = false
  }, [])

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (typeof e.data !== "object" || !e.data) return
      if ((e.data as any).event === "calendly.event_scheduled") {
        hasScheduledRef.current = true
        
        if (isQualified && formData) {
          trackMetaCustomEvent("AgendaCualificada", {
            employees: formData.employees,
            role: formData.role,
            hasERP: formData.hasERP,
            processes: formData.processes.join(","),
            scheduled: true,
          })
        } 
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [isQualified, formData])

  const handleClose = () => {
    onClose(hasScheduledRef.current)
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full min-h-0">
      <h3 className="text-3xl sm:text-4xl font-semibold text-center">Agenda tu reunión</h3>
      <div className="flex-1 min-h-0">
        <InlineWidget url={calendlyUrl} styles={{ height: "100%", width: "100%", minWidth: "320px" }} />
      </div>
      <div className="flex items-center justify-end">
        <Button onClick={handleClose} className="px-6">Cerrar</Button>
      </div>
    </div>
  )
}


