function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l3.1 6.4 7 .9-5.1 4.9 1.3 7-6.3-3.4-6.3 3.4 1.3-7L1.9 9.3l7-.9L12 2Z"
        fill="#caa261"
      />
    </svg>
  );
}

const VIDEO_POSTER = "https://d1ldsdizoomx9z.cloudfront.net/FFK-Holiday-Poster.jpg";
const VIDEO_DESKTOP = "https://d1ldsdizoomx9z.cloudfront.net/FFK-Holiday.mp4";
const VIDEO_MOBILE = "https://d1ldsdizoomx9z.cloudfront.net/FFK-Holiday-Mobile.mp4";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background video layer */}
      <video
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={VIDEO_POSTER}
      >
        <source src={VIDEO_MOBILE} type="video/mp4" media="(max-width: 767px)" />
        <source src={VIDEO_DESKTOP} type="video/mp4" media="(min-width: 768px)" />
      </video>

      {/* Dark overlay for readability */}
      <div className="heroOverlay" />

      <div className="container heroContent">
        <div className="heroLeft">
          {/* <h1 className="heroTitle">
            Experience <span className="accent">together</span>
          </h1> */}

          <div className="heroSub">
            <div className="heroSubLine">
              Hire a <span className="accent">Private Chef</span> and Bring the
            </div>
            <div className="heroSubLine">
              <span className="gold">5-Star Experience</span> to Your Home
            </div>
          </div>

          <div className="heroRating">
            <div className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="heroRatingText">
              Trusted by over <span className="accent">83.9k</span> hosts since 2025
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="heroHelp">
            Prefer to speak to someone to customize your event?{" "}
            <a href="#" className="heroHelpLink">
              Click here
            </a>
          </div>

          <div className="searchPill">
            <span className="searchDivider" aria-hidden="true" />
            <input className="searchInput" placeholder="Enter City to Search Chefs and Menus" />
            <button className="searchBtn" aria-label="search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <path
                  d="M16.5 16.5 21 21"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
