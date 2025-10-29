import Hero from "@/components/sections/hero"
import MeetingPreview from "@/components/sections/meeting-preview"
import CommonProblems from "@/components/sections/common-problems"
import ClientsTestimonials from "@/components/sections/clients-testimonials"

function App() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Hero />
      <MeetingPreview />
      <CommonProblems />
      <ClientsTestimonials />
    </div>
  )
}

export default App
