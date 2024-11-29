import { BackgroundBeams } from "components/ui/background-beams"
import Header from "components/ui/header"
import { IconSwords, IconTrophy, IconRobot } from '@tabler/icons-react'

const App = () => {
  return (
    <div className="min-h-screen bg-[#0F0826] relative">
      <Header />
      
      {/* Features Section */}
      <div id="matching" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center relative z-10">
            <h2 className="text-base text-[#8B5CF6] font-semibold tracking-wide uppercase">Matching System</h2>
            <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Find Your Perfect
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]"> Gaming Match</span>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Experience competitive gaming like never before with our advanced matchmaking system.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: IconSwords,
                  title: 'Customized Matchmaking',
                  description: 'Filter matches by game, console, ranking, and more to find your perfect opponent.'
                },
                {
                  icon: IconTrophy,
                  title: 'Competitive Gaming',
                  description: 'Play for honor or include bets to unlock exciting possibilities.'
                },
                {
                  icon: IconRobot,
                  title: 'Fair Play System',
                  description: 'Advanced AI-powered validation ensures fair competition and accurate results.'
                }
              ].map((feature) => (
                <div 
                  key={feature.title} 
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#4F3B82] rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <div className="relative p-6 bg-[#1A103B] rounded-lg border border-[#4F3B82]/20 hover:border-[#4F3B82]/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <BackgroundBeams className="opacity-50" />
      </div>
    </div>
  )
}

export default App
