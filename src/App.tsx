import { useState } from "react"
import Hero from "@/components/sections/hero"
import MeetingPreview from "@/components/sections/meeting-preview"
import CommonProblems from "@/components/sections/common-problems"
import ClientsTestimonials from "@/components/sections/clients-testimonials"
import ContactFlow from "@/components/contact-flow"

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Hero onContact={openContact} />
      <MeetingPreview />
      <CommonProblems />
      <ClientsTestimonials onContact={openContact} />
      <ContactFlow open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  )
}

export default App
