import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Popup } from "@typebot.io/react";
import {
  IconTrophy,
  IconSwords,
  IconRobot,
  IconWallet,
} from "@tabler/icons-react";
import { SparklesCore } from "./sparkles";
import { FlipWords } from "./flip-words";
import LanguageSwitcher from "./language-switcher";
import { useAnimatedWords } from "../../hooks/useAnimatedWords";
import iconNoBg from "../../assets/icon-no-bg.png";
import { Language } from "src/types/types";

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { t } = useTranslation();
  const animatedWords = useAnimatedWords();

  const { i18n } = useTranslation();

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <header className="relative">
      {/* Navigation */}
      <nav className="bg-[#0F0826]/50 backdrop-blur-md fixed w-full z-50 border-b border-[#4F3B82]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#4F3B82] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img
                  src={iconNoBg}
                  alt="VRZUS Logo"
                  className="relative h-10 w-10 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
                VRZUS
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#matching"
                className="group flex items-center space-x-2 text-gray-300 hover:text-[#8B5CF6] transition-all duration-300"
              >
                <IconSwords className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">
                  {t("nav.matching")}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#8B5CF6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </a>
              <a
                href="#honor-points"
                className="group flex items-center space-x-2 text-gray-300 hover:text-[#8B5CF6] transition-all duration-300"
              >
                <IconTrophy className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">
                  {t("nav.honorPoints")}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#8B5CF6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </a>
              <a
                href="#winner-validation"
                className="group flex items-center space-x-2 text-gray-300 hover:text-[#8B5CF6] transition-all duration-300"
              >
                <IconRobot className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">
                  {t("nav.winnerValidation")}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#8B5CF6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </a>
              <a
                href="#wallet"
                className="group flex items-center space-x-2 text-gray-300 hover:text-[#8B5CF6] transition-all duration-300"
              >
                <IconWallet className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">
                  {t("nav.wallet")}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#8B5CF6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </a>

              <LanguageSwitcher
                currentLanguage={currentLanguage}
                languages={languages}
              />

              <button
                className="relative group px-4 py-2 rounded-lg overflow-hidden"
                onClick={() => setIsChatOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] transition-all duration-300 group-hover:scale-105"></div>
                <span className="relative text-white font-medium">
                  {t("nav.joinWaitlist")}
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                languages={languages}
              />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#4F3B82] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8B5CF6]"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#matching"
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-[#8B5CF6] hover:bg-[#4F3B82]/30"
              >
                <IconSwords className="w-5 h-5" />
                <span>{t("nav.matching")}</span>
              </a>
              <a
                href="#honor-points"
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-[#8B5CF6] hover:bg-[#4F3B82]/30"
              >
                <IconTrophy className="w-5 h-5" />
                <span>{t("nav.honorPoints")}</span>
              </a>
              <a
                href="#winner-validation"
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-[#8B5CF6] hover:bg-[#4F3B82]/30"
              >
                <IconRobot className="w-5 h-5" />
                <span>{t("nav.winnerValidation")}</span>
              </a>
              <a
                href="#wallet"
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-[#8B5CF6] hover:bg-[#4F3B82]/30"
              >
                <IconWallet className="w-5 h-5" />
                <span>{t("nav.wallet")}</span>
              </a>
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  {t("nav.joinWaitlist")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Enhanced Sparkles */}
      <div className="relative pt-16">
        <div className="h-[40rem] w-full bg-[#0F0826] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="relative z-20 text-center space-y-8">
            <div className="flex justify-center mb-8">
              <img
                src={iconNoBg}
                alt="VRZUS Logo"
                className="h-24 w-24 object-contain animate-pulse"
              />
            </div>
            <div className="md:text-5xl text-2xl lg:text-6xl font-bold text-center flex flex-col items-center">
              <span className="text-white mb-2">{t("hero.playFor")}</span>
              <div className="h-[1.2em] flex items-center justify-center w-full relative mb-2">
                <FlipWords
                  words={animatedWords}
                  className="text-white absolute"
                  duration={3000}
                />
                <span className="invisible">Placeholder</span>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
                {t("hero.butAlwaysForHonour")}
              </span>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4 mt-8">
              {t("hero.description")}
            </p>

            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <button
                onClick={() => setIsChatOpen(true)}
                className="relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-medium text-lg hover:scale-105 transition-transform duration-300"
              >
                {t("nav.joinWaitlist")}
              </button>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <SparklesCore
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#8B5CF6"
            />
          </div>
        </div>
      </div>
      <Popup
        typebot={`vrzus-wait-list-${currentLanguage.code}`}
        isOpen={isChatOpen}
        onEnd={() => {
          setTimeout(() => setIsChatOpen(false)), 3000;
        }}
        onClose={() => setIsChatOpen(false)}
      />
    </header>
  );
};

export default Header;
