import { StickyScroll } from "components/ui/sticky-scroll-reveal"
import { IconTrophy, IconMedal, IconStairs, IconShield } from "@tabler/icons-react"
import { useTranslation } from 'react-i18next'

const HonorPointsSection = () => {
  const { t } = useTranslation()

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
  )
}

export default HonorPointsSection
