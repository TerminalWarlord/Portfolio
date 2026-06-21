export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joy Biswas",
    alternateName: "TerminalWarlord",
    givenName: "Joy",
    familyName: "Biswas",
    url: "https://joybiswas.com",
    jobTitle: "Software Engineer",
    description:
      "Software engineer and competitive programmer passionate about building scalable fullstack applications and solving complex problems.",
    knowsAbout: [
      "Fullstack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Nest.js",
      "Competitive Programming",
      "Data Structures & Algorithms",
    ],
    sameAs: [
      "https://github.com/TerminalWarlord",
      "https://www.linkedin.com/in/joybiswas389/",
      "https://x.com/JayBeeOP",
      "https://leetcode.com/u/terminalwarlord/",
      "https://codeforces.com/profile/TerminalWarlord",
      "https://www.codechef.com/users/jaybeeop",
      "https://atcoder.jp/users/TerminalWarlord",
      "https://cses.fi/user/112416",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Joy Biswas",
    url: "https://joybiswas.com",
    description:
      "Portfolio of Joy Biswas — software engineer, fullstack developer, and competitive programmer.",
    about: {
      "@type": "Person",
      name: "Joy Biswas",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
