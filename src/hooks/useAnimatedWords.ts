import { useTranslation } from 'react-i18next';

export const useAnimatedWords = () => {
  const { i18n } = useTranslation();
  
  const getWords = (): string[] => {
    if (i18n.language === 'es') {
      return ['Experiencia', 'Gloria', 'Premios', 'Victoria'];
    }
    return ['Experience', 'Glory', 'Rewards', 'Victory'];
  };

  return getWords();
};
