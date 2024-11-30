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
          },
          honorPoints: {
            title: 'Honor Points System',
            heading: {
              start: 'Play with',
              end: 'Honor'
            },
            description: 'Our unique honor points system rewards skill, sportsmanship, and fair play.',
            features: {
              leaderboards: {
                title: 'Earn Respect on the Leaderboards',
                description: 'Compete head-to-head and earn honor points that reflect your gaming skills. Rise through the ranks and establish yourself as a respected player in the community.'
              },
              sportsmanship: {
                title: "Loser's Bravery Rewarded",
                description: 'Embrace defeat with honesty and receive even more honor points, showing true sportsmanship. We believe in rewarding integrity as much as victory.'
              },
              levelUp: {
                title: 'Level Up and Face New Challengers',
                description: 'Accumulate honor points to unlock new match opportunities against equally skilled opponents. Progress through the ranks and face increasingly challenging competition.'
              },
              fairPlay: {
                title: 'Cheating Comes at a Price',
                description: 'Cheaters beware - honor points are at stake! Our system actively deters dishonest gameplay and ensures fair competition for all players.'
              }
            }
          },
          winnerValidation: {
            title: 'Winner Validation',
            heading: {
              start: 'Powered by',
              end: 'AI Technology'
            },
            description: 'Experience the future of fair play with our advanced AI-powered validation system.',
            features: {
              ai: {
                title: 'Powered by AI Technology',
                text: 'Discover the True Champion',
                revealText: 'AI-Powered Validation',
                description: 'Witness the extraordinary capabilities of AI technology in determining the rightful winner. Our advanced algorithms ensure fair and accurate results for every match.'
              },
              submit: {
                title: 'Submit, Verify, and Conquer',
                text: 'Submit and Verify',
                revealText: 'Instant Validation',
                description: 'Gamers provide key details for AI-assisted validation, ensuring the most accurate outcome for matches and bets. Our system processes the information instantly.'
              },
              resolve: {
                title: 'Unveiling the Ultimate Victor',
                text: 'Settle Disputes Fairly',
                revealText: 'AI Resolution',
                description: 'Leveraging the submitted information, AI settles disputes, resolves bets, and crowns the ultimate winner. No more lengthy debates or uncertain outcomes.'
              },
              accuracy: {
                title: 'Efficiency and Accuracy Guaranteed',
                text: 'Precision Guaranteed',
                revealText: '100% Accurate',
                description: 'Experience the seamless process of AI-assisted validation that brings an unwavering level of precision to every match. Trust in our technology.'
              }
            }
          },
          wallet: {
            title: 'Wallet System',
            heading: {
              start: 'Manage Your',
              end: 'Gaming Finances'
            },
            description: 'Take control of your gaming finances with our secure and convenient wallet system.',
            features: {
              freedom: {
                title: 'Unlock Financial Gaming Freedom',
                description: 'Manage your gaming finances with a dedicated wallet right within the Vrzus platform.'
              },
              hub: {
                title: 'All-In-One Fund Hub',
                description: 'Your Vrzus wallet is a secure and convenient hub for storing your bet amounts and net earnings.'
              },
              cashout: {
                title: 'Cash Out on Your Terms',
                description: 'Withdraw funds at any time, giving you the flexibility to enjoy your hard-earned winnings when you desire.'
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
          },
          honorPoints: {
            title: 'Sistema de Puntos de Honor',
            heading: {
              start: 'Juega con',
              end: 'Honor'
            },
            description: 'Nuestro sistema único de puntos de honor recompensa la habilidad, el espíritu deportivo y el juego limpio.',
            features: {
              leaderboards: {
                title: 'Gana Respeto en las Clasificaciones',
                description: 'Compite uno contra uno y gana puntos de honor que reflejen tus habilidades de juego. Asciende en las clasificaciones y establécete como un jugador respetado en la comunidad.'
              },
              sportsmanship: {
                title: 'Valentía del Perdedor Recompensada',
                description: 'Acepta la derrota con honestidad y recibe aún más puntos de honor, demostrando verdadero espíritu deportivo. Creemos en recompensar la integridad tanto como la victoria.'
              },
              levelUp: {
                title: 'Sube de Nivel y Enfrenta Nuevos Desafíos',
                description: 'Acumula puntos de honor para desbloquear nuevas oportunidades de partidas contra oponentes de igual habilidad. Progresa a través de los rangos y enfrenta competencia cada vez más desafiante.'
              },
              fairPlay: {
                title: 'Hacer Trampa Tiene un Precio',
                description: '¡Cuidado tramposos - los puntos de honor están en juego! Nuestro sistema disuade activamente el juego deshonesto y asegura una competencia justa para todos los jugadores.'
              }
            }
          },
          winnerValidation: {
            title: 'Validación de Ganadores',
            heading: {
              start: 'Impulsado por',
              end: 'Tecnología IA'
            },
            description: 'Experimenta el futuro del juego limpio con nuestro avanzado sistema de validación impulsado por IA.',
            features: {
              ai: {
                title: 'Impulsado por Tecnología IA',
                text: 'Descubre al Verdadero Campeón',
                revealText: 'Validación por IA',
                description: 'Presencia las extraordinarias capacidades de la tecnología de IA para determinar al ganador legítimo. Nuestros algoritmos avanzados aseguran resultados justos y precisos en cada partida.'
              },
              submit: {
                title: 'Envía, Verifica y Conquista',
                text: 'Envía y Verifica',
                revealText: 'Validación Instantánea',
                description: 'Los jugadores proporcionan detalles clave para la validación asistida por IA, asegurando el resultado más preciso para partidas y apuestas. Nuestro sistema procesa la información al instante.'
              },
              resolve: {
                title: 'Revelando al Último Vencedor',
                text: 'Resuelve Disputas Justamente',
                revealText: 'Resolución por IA',
                description: 'Aprovechando la información enviada, la IA resuelve disputas, determina apuestas y corona al ganador definitivo. No más debates prolongados ni resultados inciertos.'
              },
              accuracy: {
                title: 'Eficiencia y Precisión Garantizadas',
                text: 'Precisión Garantizada',
                revealText: '100% Preciso',
                description: 'Experimenta el proceso fluido de validación asistida por IA que aporta un nivel inquebrantable de precisión a cada partida. Confía en nuestra tecnología.'
              }
            }
          },
          wallet: {
            title: 'Sistema de Billetera',
            heading: {
              start: 'Gestiona tus',
              end: 'Finanzas de Juego'
            },
            description: 'Toma el control de tus finanzas de juego con nuestro sistema de billetera seguro y conveniente.',
            features: {
              freedom: {
                title: 'Desbloquea la Libertad Financiera en el Juego',
                description: 'Gestiona tus finanzas de juego con una billetera dedicada directamente en la plataforma Vrzus.'
              },
              hub: {
                title: 'Centro de Fondos Todo en Uno',
                description: 'Tu billetera Vrzus es un centro seguro y conveniente para almacenar tus montos de apuestas y ganancias netas.'
              },
              cashout: {
                title: 'Retira en tus Términos',
                description: 'Retira fondos en cualquier momento, dándote la flexibilidad de disfrutar tus ganancias cuando lo desees.'
              }
            }
          }
        }
      }
    }
  });

export default i18n;
