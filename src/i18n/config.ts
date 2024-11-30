import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          nav: {
            matching: 'Matching',
            honorPoints: 'Honor Points',
            winnerValidation: 'Winner Validation',
            wallet: 'Wallet',
            joinWaitlist: 'Join Waitlist'
          },
          hero: {
            playFor: 'Play for',
            butAlwaysForHonour: 'but always for Honour.',
            description: 'Join the ultimate gaming platform where skill meets reward. Challenge players, earn honor points, and compete for real prizes.'
          }
        }
      },
      es: {
        translation: {
          nav: {
            matching: 'Emparejamiento',
            honorPoints: 'Puntos de Honor',
            winnerValidation: 'Validación',
            wallet: 'Billetera',
            joinWaitlist: 'Unirse a la Lista'
          },
          hero: {
            playFor: 'Juega por',
            butAlwaysForHonour: 'pero siempre por Honor.',
            description: 'Únete a la plataforma definitiva de juegos donde la habilidad se encuentra con la recompensa. Desafía a jugadores, gana puntos de honor y compite por premios reales.'
          }
        }
      }
    }
  });

export default i18n;
