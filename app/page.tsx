import AiIntro from "@/components/HomePage/AiIntro";
import Features from "@/components/HomePage/Features/Features";
import SleekSaasHero from "@/components/HomePage/Hero";
import Recipes from "@/components/HomePage/Recipes";

export default function Home() {
  return (
    <>
      <SleekSaasHero />
      <Features />
      <Recipes />
      <AiIntro />
    </>
  );
}
