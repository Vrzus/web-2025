import { HoverEffect } from "components/ui/card-hover-effect";
import { IconSwords, IconTrophy, IconRobot } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { CardContainer, CardBody, CardItem } from "components/ui/3d-card";
import gameController from "../assets/neon-controller.png";

const MatchingSection = () => {
  const { t } = useTranslation();

  const matchingFeatures = [
    {
      title: t("matching.features.match.title"),
      description: t("matching.features.match.description"),
      icon: IconSwords,
    },
    {
      title: t("matching.features.customize.title"),
      description: t("matching.features.customize.description"),
      icon: IconTrophy,
    },
    {
      title: t("matching.features.play.title"),
      description: t("matching.features.play.description"),
      icon: IconRobot,
    },
  ];

  return (
    <div id="matching" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="title" className="lg:text-center relative z-10">
          <h2 className="text-base text-[#8B5CF6] font-semibold tracking-wide uppercase">
            {t("matching.title")}
          </h2>
          <p className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            {t("matching.heading.start")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
              {t("matching.heading.end")}
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            {t("matching.description")}
          </p>
        </div>

        <CardContainer className="w-full py-0">
          <CardBody className="relative flex items-center justify-center">
            <CardItem translateZ={100} className="w-20">
              <img
                src={gameController}
                alt="Game Controller"
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        <div id="cards">
          <HoverEffect
            items={matchingFeatures.map((feature) => ({
              title: feature.title,
              description: feature.description,
              icon: <feature.icon className="h-8 w-8 text-[#8B5CF6]" />,
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default MatchingSection;
