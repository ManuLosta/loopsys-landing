import { useState } from "react"
import Hero from "@/components/sections/hero"
import MeetingPreview from "@/components/sections/meeting-preview"
import CommonProblems from "@/components/sections/common-problems"
import ClientsTestimonials from "@/components/sections/clients-testimonials"
import ContactFlow from "@/components/contact-flow"

function App() {
  const [showForm, setShowForm] = useState(false)

  // Renderizado condicional: mostrar formulario o landing
  if (showForm) {
    return <ContactFlow onClose={() => setShowForm(false)} />
  }

  return (
    <>
      <Hero onContact={() => setShowForm(true)} />
      <MeetingPreview />
      <CommonProblems />
      <ClientsTestimonials onContact={() => setShowForm(true)} />
    </>
  )
}

export default App
