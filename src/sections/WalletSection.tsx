import { useTranslation } from "react-i18next";
import { IconWallet, IconDatabase, IconCash } from "@tabler/icons-react";
import { CardContainer, CardBody, CardItem } from "components/ui/3d-card";
import { Meteors } from "components/ui/meteors";

const WalletSection = () => {
  const { t } = useTranslation();

  const walletFeatures = [
    {
      title: t("wallet.features.freedom.title"),
      description: t("wallet.features.freedom.description"),
      icon: <IconWallet className="h-12 w-12 text-[#8B5CF6]" />,
    },
    {
      title: t("wallet.features.hub.title"),
      description: t("wallet.features.hub.description"),
      icon: <IconDatabase className="h-12 w-12 text-[#8B5CF6]" />,
    },
    {
      title: t("wallet.features.cashout.title"),
      description: t("wallet.features.cashout.description"),
      icon: <IconCash className="h-12 w-12 text-[#8B5CF6]" />,
    },
  ];

  return (
    <div id="wallet" className="py-20 relative overflow-hidden">
      <Meteors number={20} className="absolute inset-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center relative z-10 mb-16">
          <h2 className="text-base text-[#8B5CF6] font-semibold tracking-wide uppercase">
            {t("wallet.title")}
          </h2>
          <p className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            {t("wallet.heading.start")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]">
              {t("wallet.heading.end")}
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            {t("wallet.description")}
          </p>
        </div>

        {/* Wallet Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {walletFeatures.map((feature, index) => (
            <CardContainer key={index} containerClassName="py-10">
              <CardBody className="relative group/card h-auto w-auto bg-[#1A103B] border border-[#4F3B82]/50 rounded-xl p-8">
                <CardItem translateZ={70} className="relative z-10">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
