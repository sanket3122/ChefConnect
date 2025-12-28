import MainHeader from "../components/layout/MainHeader";

export default function AboutPage() {
  return (
    <div>
      <MainHeader />

      <div className="waveHero">
        <div className="waveHeroBg" />
        <div className="waveHeroOverlay" />
        <div className="container waveHeroContent">
          <div className="waveKicker">Who We Are</div>
          <h1 className="waveTitle">
            About <span className="accent">Us</span>
          </h1>
        </div>
        <div className="waveShape" />
      </div>

      <div className="container" style={{ padding: "34px 0 70px" }}>
        <h2 style={{ textAlign: "center", margin: "0 0 10px", fontWeight: 900 }}>
          About Us Chef<span className="accent">Connect</span>
        </h2>
        <p style={{ maxWidth: 860, margin: "0 auto 28px", color: "#555", lineHeight: 1.6 }}>
          ChefConnect is a demo marketplace for booking private chefs at home. The goal is simple:
          make it easy to find a chef, book a time slot, and get a reliable experience with support.
          This project is built to look and behave like a real production app, not a toy landing page.
        </p>

        <div className="aboutGrid">
          <div className="aboutImg" />
          <div>
            <h3 style={{ margin: 0, fontWeight: 900, fontSize: 24 }}>
              Bringing <span className="accent">Culinary Magic</span> to Your Home
            </h3>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
              In production: chef onboarding, verification, menu management, availability calendars,
              secure payments, and customer support workflows. In this MVP: polished UI + routing +
              auth modal, and we’ll wire backend next.
            </p>

            <div className="valueRow">
              <div className="valueCard">
                <div className="valueIcon" />
                <div className="valueTitle">Reliable</div>
                <div className="valueText">Bookings confirmed with clear status and support.</div>
              </div>
              <div className="valueCard">
                <div className="valueIcon" />
                <div className="valueTitle">Transparent</div>
                <div className="valueText">Menus, pricing, and policies visible upfront.</div>
              </div>
              <div className="valueCard">
                <div className="valueIcon" />
                <div className="valueTitle">Accessible</div>
                <div className="valueText">Simple booking flow across devices.</div>
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ textAlign: "center", marginTop: 46, fontWeight: 900 }}>
          Meet <span className="accent">Our</span> Team
        </h3>

        <div className="teamGrid">
          <div className="teamCard">
            <div className="avatar" />
            <div className="teamName">Michael (Demo)</div>
            <div className="teamRole muted">Co-founder</div>
          </div>
          <div className="teamCard">
            <div className="avatar" />
            <div className="teamName">Kim (Demo)</div>
            <div className="teamRole muted">Operations</div>
          </div>
        </div>
      </div>
    </div>
  );
}
