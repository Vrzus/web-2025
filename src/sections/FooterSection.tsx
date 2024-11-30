import { useTranslation } from 'react-i18next'
import { IconBrandDiscord, IconBrandTwitter, IconBrandInstagram } from '@tabler/icons-react'

const FooterSection = () => {
  const { t } = useTranslation()

  const navigation = {
    main: [
      { name: t('nav.matching'), href: '#matching' },
      { name: t('nav.honorPoints'), href: '#honor-points' },
      { name: t('nav.winnerValidation'), href: '#winner-validation' },
      { name: t('nav.wallet'), href: '#wallet' },
    ],
    social: [
      {
        name: 'Discord',
        href: '#',
        icon: IconBrandDiscord,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: IconBrandTwitter,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: IconBrandInstagram,
      },
    ],
  }

  return (
    <footer className="bg-[#1A103B]">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4" aria-label="Footer">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 hover:text-[#8B5CF6] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-[#8B5CF6] transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} VRZUS. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
