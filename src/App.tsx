import { BackgroundBeams } from "components/ui/background-beams"
import Header from "components/ui/header"
import MatchingSection from "./sections/MatchingSection"
import HonorPointsSection from "./sections/HonorPointsSection"
import WinnerValidationSection from "./sections/WinnerValidationSection"
import WalletSection from "./sections/WalletSection"

const App = () => {
  return (
    <div className="min-h-screen bg-[#0F0826] relative">
      <Header />
      
      <MatchingSection />
      <HonorPointsSection />
      <WinnerValidationSection />
      <WalletSection />

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <BackgroundBeams className="opacity-50" />
      </div>
    </div>
  )
}

export default App
