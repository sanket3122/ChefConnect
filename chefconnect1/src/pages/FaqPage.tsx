import MainHeader from "../components/layout/MainHeader";

const faqs = [
  {
    q: "How does ChefConnect work?",
    a: "Pick your city, choose a chef profile, select a time slot, and book. You’ll get confirmation and support if anything changes.",
  },
  {
    q: "Do I need to provide ingredients?",
    a: "Not required in this demo. In production, you can support both options: chef-provided or customer-provided ingredients.",
  },
  {
    q: "Is pricing fixed?",
    a: "Pricing is menu + time-slot based. You can add surge pricing, weekend premiums, and promo codes later.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Policy is configurable per booking. Start with: full refund 24h+ before, partial inside 24h.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <MainHeader />

      <div className="waveHero">
        <div className="waveHeroBg" />
        <div className="waveHeroOverlay" />
        <div className="container waveHeroContent">
          <div className="waveKicker">Explore the Answers to Your Questions</div>
          <h1 className="waveTitle">
            Frequently <span className="accent">Asked</span> Questions
          </h1>
        </div>
        <div className="waveShape" />
      </div>

      <div className="container" style={{ padding: "34px 0 70px" }}>
        <h2 style={{ textAlign: "center", margin: "0 0 18px", fontWeight: 900 }}>
          Frequently <span className="accent">Asked</span> Questions
        </h2>

        <div className="faqGrid">
          {faqs.map((f) => (
            <details key={f.q} className="faqCard">
              <summary className="faqSummary">
                <span>{f.q}</span>
                <span className="faqPlus">+</span>
              </summary>
              <div className="faqBody">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
