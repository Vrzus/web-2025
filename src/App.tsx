import { BackgroundBeams } from "components/ui/background-beams"
import Header from "components/ui/header"
import { IconSwords, IconTrophy, IconRobot } from '@tabler/icons-react'
import { HoverEffect } from "components/ui/card-hover-effect"
import { StickyScroll } from "components/ui/sticky-scroll-reveal"
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "components/ui/text-reveal-card"
import { useTranslation } from 'react-i18next'
import { IconMedal, IconShield, IconStairs } from "@tabler/icons-react"

const App = () => {
  const { t } = useTranslation()

  const matchingFeatures = [
    {
      title: t('matching.features.match.title'),
      description: t('matching.features.match.description'),
      icon: IconSwords,
    },
    {
      title: t('matching.features.customize.title'),
      description: t('matching.features.customize.description'),
      icon: IconTrophy,
    },
    {
      title: t('matching.features.play.title'),
      description: t('matching.features.play.description'),
      icon: IconRobot,
    },
  ];

  const honorPointsContent = [
    {
      title: t('honorPoints.features.leaderboards.title'),
      description: t('honorPoints.features.leaderboards.description'),
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <IconTrophy className="w-32 h-32 text-white" />
        </div>
      ),
    },
    {
      title: t('honorPoints.features.sportsmanship.title'),
      description: t('honorPoints.features.sportsmanship.description'),
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <IconMedal className="w-32 h-32 text-white" />
        </div>
      ),
    },
    {
      title: t('honorPoints.features.levelUp.title'),
      description: t('honorPoints.features.levelUp.description'),
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <IconStairs className="w-32 h-32 text-white" />
        </div>
      ),
    },
    {
      title: t('honorPoints.features.fairPlay.title'),
      description: t('honorPoints.features.fairPlay.description'),
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <IconShield className="w-32 h-32 text-white" />
        </div>
      ),
    },
    {
      title: "Honour is all!",
      description: "",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <IconShield className="w-32 h-32 text-white" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0826] relative">
      <Header />
      
      {/* Matching Section */}
      <div id="matching" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center relative z-10">
            <h2 className="text-base text-[#8B5CF6] font-semibold tracking-wide uppercase">
              {t('matching.title')}
            </h2>
            <p className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
              {t('matching.heading.start')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
                {t('matching.heading.end')}
              </span>
            </p>
            <p className="mt-6 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              {t('matching.description')}
            </p>
          </div>

          <div className="mt-16">
            <HoverEffect items={matchingFeatures.map(feature => ({
              title: feature.title,
              description: feature.description,
              icon: <feature.icon className="h-8 w-8 text-[#8B5CF6]" />,
            }))} />
          </div>
        </div>
      </div>

      {/* Honor Points Section */}
      <div id="honor-points" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center relative z-10 mb-16">
            <h2 className="text-base text-[#8B5CF6] font-semibold tracking-wide uppercase">
              {t('honorPoints.title')}
            </h2>
            <p className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
              {t('honorPoints.heading.start')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
                {t('honorPoints.heading.end')}
              </span>
            </p>
            <p className="mt-6 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              {t('honorPoints.description')}
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#4F3B82]/20">
            <StickyScroll 
              content={honorPointsContent}
              contentClassName="bg-[#1A103B] border border-[#4F3B82]/50"
            />
          </div>
        </div>
      </div>

      {/* Winner Validation Section */}
      <div id="winner-validation" className="py-32 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center relative z-10 mb-24">
            <h2 className="text-base text-[#8B5CF6] font-semibold tracking-wide uppercase">
              {t('winnerValidation.title')}
            </h2>
            <p className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
              {t('winnerValidation.heading.start')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
                {t('winnerValidation.heading.end')}
              </span>
            </p>
            <p className="mt-6 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              {t('winnerValidation.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="flex justify-center items-start">
              <TextRevealCard
                text={t('winnerValidation.features.ai.text')}
                revealText={t('winnerValidation.features.ai.revealText')}
              >
                <TextRevealCardTitle>
                  {t('winnerValidation.features.ai.title')}
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  {t('winnerValidation.features.ai.description')}
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>

            <div className="flex justify-center items-start">
              <TextRevealCard
                text={t('winnerValidation.features.submit.text')}
                revealText={t('winnerValidation.features.submit.revealText')}
              >
                <TextRevealCardTitle>
                  {t('winnerValidation.features.submit.title')}
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  {t('winnerValidation.features.submit.description')}
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>

            <div className="flex justify-center items-start">
              <TextRevealCard
                text={t('winnerValidation.features.resolve.text')}
                revealText={t('winnerValidation.features.resolve.revealText')}
              >
                <TextRevealCardTitle>
                  {t('winnerValidation.features.resolve.title')}
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  {t('winnerValidation.features.resolve.description')}
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>

            <div className="flex justify-center items-start">
              <TextRevealCard
                text={t('winnerValidation.features.accuracy.text')}
                revealText={t('winnerValidation.features.accuracy.revealText')}
              >
                <TextRevealCardTitle>
                  {t('winnerValidation.features.accuracy.title')}
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  {t('winnerValidation.features.accuracy.description')}
                </TextRevealCardDescription>
              </TextRevealCard>
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
