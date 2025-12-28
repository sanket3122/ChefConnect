import PromoBar from "../components/layout/PromoBar";
import MainHeader from "../components/layout/MainHeader";
import Hero from "../components/home/Hero";
import Section from "../components/layout/Section";
import AsSeenOn from "../components/home/AsSeenOn";
import GuaranteeStrip from "../components/home/GuaranteeStrip";
import StatsAndRatings from "../components/home/StatsAndRatings";

export default function LandingPage() {
  return (
    <div>
      <PromoBar />
      <MainHeader />
      <Hero />
      <Section>
        <AsSeenOn />
        <GuaranteeStrip />
        <StatsAndRatings />
      </Section>
    </div>
  );
}
