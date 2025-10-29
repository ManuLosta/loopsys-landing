import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Stepper } from "@/components/ui/stepper"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

interface StepFormData {
  processes: string[]
  hasERP: string
  employees: string
  role: string
}

interface StepFormProps {
  onComplete: (data: StepFormData) => void
}

export default function StepForm({ onComplete }: StepFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<StepFormData>({
    processes: [],
    hasERP: "",
    employees: "",
    role: "",
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalSteps = 4

  const processes = [
    "Liquidaciones de sueldo",
    "Maestros de datos",
    "Migraciones de datos",
    "Sistemas de fichado",
    "Inventarios - stock",
    "Facturación - Impuestos",
    "Correos y chats",
  ]

  const erpOptions = ["Sí", "No", "Sí, Excel"]

  const employeesOptions = [
    "Menos de 50",
    "50 - 100",
    "100 - 200",
    "Más de 200",
  ]

  const roleOptions = [
    "Propietario",
    "Ejecutivo",
    "Directivo",
    "Gerente",
    "Otro",
  ]

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
      } else {
        onComplete(formData)
      }
      setIsTransitioning(false)
    }, 300)
  }

  const handleBack = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(currentStep - 1)
      setIsTransitioning(false)
    }, 300)
  }

  const toggleProcess = (process: string) => {
    setFormData((prev) => ({
      ...prev,
      processes: prev.processes.includes(process)
        ? prev.processes.filter((p) => p !== process)
        : [...prev.processes, process],
    }))
  }

  const setField = (field: keyof StepFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.processes.length > 0
      case 2:
        return formData.hasERP !== ""
      case 3:
        return formData.employees !== ""
      case 4:
        return formData.role !== ""
      default:
        return true
    }
  }

  const renderQuestion = () => {
    return (
      <div
        className={cn(
          "w-full transition-all duration-300",
          isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
        )}
      >
        {currentStep === 1 && (
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold text-center">
              ¿Cuál/es de estos procesos debe gestionar tu empresa?
            </h3>
            <div className="grid gap-4">
              {processes.map((process) => (
                <label
                  key={process}
                  className={cn(
                    "w-full p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-md flex items-center gap-3",
                    formData.processes.includes(process)
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  <Checkbox
                    checked={formData.processes.includes(process)}
                    onCheckedChange={() => toggleProcess(process)}
                  />
                  <span className="text-lg flex-1">{process}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold text-center">
              ¿Cuentan actualmente con un ERP?
            </h3>
            <RadioGroup
              value={formData.hasERP}
              onValueChange={(value) => setField("hasERP", value)}
              className="grid gap-4 w-full"
            >
              {erpOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "w-full p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-md flex items-center gap-3",
                    formData.hasERP === option
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  <RadioGroupItem value={option} />
                  <span className="text-lg flex-1">{option}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold text-center">
              Cantidad de empleados en la empresa
            </h3>
            <RadioGroup
              value={formData.employees}
              onValueChange={(value) => setField("employees", value)}
              className="grid gap-4 w-full"
            >
              {employeesOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "w-full p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-md flex items-center gap-3",
                    formData.employees === option
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  <RadioGroupItem value={option} />
                  <span className="text-lg flex-1">{option}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold text-center">
              ¿Cuál es tu rol en la empresa?
            </h3>
            <RadioGroup
              value={formData.role}
              onValueChange={(value) => setField("role", value)}
              className="grid gap-4 w-full"
            >
              {roleOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "w-full p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-md flex items-center gap-3",
                    formData.role === option
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  <RadioGroupItem value={option} />
                  <span className="text-lg flex-1">{option}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto w-full pb-24 md:pb-0">
      <Stepper currentStep={currentStep} totalSteps={totalSteps} />
      
      <div className="min-h-[400px] flex items-center justify-center">
        {renderQuestion()}
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-4 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:static md:px-0 md:py-0 md:bg-transparent md:backdrop-blur-0">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <div>
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="px-6"
              >
                Atrás
              </Button>
            )}
          </div>
          <Button
            type="button"
            onClick={handleNext}
            disabled={!canProceed()}
            className="px-6"
          >
            {currentStep === totalSteps ? "Finalizar" : "Siguiente"}
          </Button>
        </div>
      </div>
    </div>
  )
}

