import { SiteHeader } from "@/components/layout/site-header";
import { HomeAchievements } from "@/features/home/home-achievements";
import { HomeHero } from "@/features/home/home-hero";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-24 lg:pb-0">
        <HomeHero />
        <HomeAchievements />
      </main>
    </>
  );
}
