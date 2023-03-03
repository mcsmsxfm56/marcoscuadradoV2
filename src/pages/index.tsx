import ResponsiveCarousel from "../carrousel/Responsive";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t: translate } = useTranslation("home");
  return (
    <div>
      <p className="text-teal-600 ml-6">{translate("hello")}</p>
      <p className="text-6xl ml-6">Marcos Cuadrado.</p>
      <p className="text-5xl text-gray-600 ml-6">{translate("ocupation")}</p>
      <p className="ml-6">{translate("experience")}</p>
      <ResponsiveCarousel />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
