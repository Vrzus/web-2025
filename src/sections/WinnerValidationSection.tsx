import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "components/ui/text-reveal-card"
import { useTranslation } from 'react-i18next'

const WinnerValidationSection = () => {
  const { t } = useTranslation()

  return (
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
  )
}

export default WinnerValidationSection
