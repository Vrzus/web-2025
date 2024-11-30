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
          },
          matching: {
            title: 'Matching System',
            heading: {
              start: 'Find Your Perfect',
              end: 'Gaming Match'
            },
            description: 'Experience competitive gaming like never before with our advanced matchmaking system.',
            features: {
              match: {
                title: 'Find Your Perfect Gaming Match',
                description: 'Discover adrenaline-pumping gaming encounters that will keep you on the edge of your seat.'
              },
              customize: {
                title: 'Customize Your Ideal Opponent',
                description: 'Filter matches by game, console, ranking, and more, to find your perfect match.'
              },
              play: {
                title: 'Play for Honor or Bet Big',
                description: 'Experience the thrill of competitive gaming by playing for honor or including a bet, unlocking a world of exciting possibilities.'
              }
            }
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
          },
          matching: {
            title: 'Sistema de Emparejamiento',
            heading: {
              start: 'Encuentra tu',
              end: 'Partida Perfecta'
            },
            description: 'Experimenta los juegos competitivos como nunca antes con nuestro avanzado sistema de emparejamiento.',
            features: {
              match: {
                title: 'Encuentra tu Partida Perfecta',
                description: 'Descubre encuentros de juego llenos de adrenalina que te mantendrán al borde de tu asiento.'
              },
              customize: {
                title: 'Personaliza tu Oponente Ideal',
                description: 'Filtra partidas por juego, consola, ranking y más, para encontrar tu rival perfecto.'
              },
              play: {
                title: 'Juega por Honor o Apuesta a lo Grande',
                description: 'Experimenta la emoción de los juegos competitivos jugando por honor o incluyendo una apuesta, desbloqueando un mundo de posibilidades emocionantes.'
              }
            }
          }
        }
      }
    }
  });

export default i18n;
