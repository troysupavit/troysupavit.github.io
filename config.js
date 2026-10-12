// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Supavit (Troy) Pitaknarongphorn",
  initials:   "SP",
  roles: [
    { role: "PhD Applicant", university: "" },
    { role: "Master's Student, M.S. Information Technology - Information Security", university: "Carnegie Mellon University" }
  ],
  email:      "spitakna@andrew.cmu.edu",
  bio: [
    "Hi, I’m Troy, a master’s student in Information Technology - Information Security, Cyber Forensics and Incident Response track at Carnegie Mellon University (CMU). I earned my B.S. in Computer Science and Engineering, Entrepreneurship minor, from the University of California, Los Angeles (UCLA).",
    "My interests lie at the intersection of cybersecurity, cybercrime, and artificial intelligence, with a focus on understanding and preventing online fraud, scams, and phishing attacks. I am particularly interested in how cyberattacks exploit human vulnerabilities and how we can develop effective systems to detect, investigate, and prevent these threats.",
    "As AI systems become increasingly capable of reading emails, communicating with users, and taking actions on their behalf, I am also interested in how cybercriminals may adapt their tactics to target AI agents. My current research explores the characteristics and differences between human-targeted phishing and AI-agent-targeted prompt injection in email.",
    "Ultimately, I hope to contribute to research and develop practical security solutions that protect people from evolving cyber threats in an increasingly AI-driven world.",
  ],
  photo:      "assets/portrait.jpeg",   // optional: path to your photo, e.g. "assets/photo.jpg"

  stats: [
    { value: "10+",  label: "Projects" },
    { value: "10+", label: "Awards" }
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/supavitpitak/",
    scholar:  "",
    github:   "https://github.com/troysupavit",
    cv:       "assets/cv.pdf",
    resume:   "assets/resume.pdf",
  },

  education: [
    { period: "2025-Present", degree: "M.S. in Information Technology - Information Security, Cyber Forensics and Incident Response Track", institution: "Carnegie Mellon University" },
    { period: "2021-2025",    degree: "B.S. in Computer Science and Engineering, Entrepreneurship Minor",  institution: "University of California, Los Angeles" },
  ],

  publications: [
    
  ],

  experience: [
    {
      period:      "2026-Present",
      role:        "Master's Thesis",
      institution: "Carnegie Mellon University",
      description: "Compare characteristics of human-targeted phishing and AI-targeted prompt injection email to improve detection and prevention system",
      links:       {},
    },
    {
      period:      "2026-Present",
      role:        "Research Assistant",
      institution: "CMU Security & AI Research Lab",
      description: "Evaluate the power consumption of VPNs across different VPN configurations, client environments, and server architectures",
      links:       {},
    },
    {
      period:      "2025",
      role:        "Teaching Assistant",
      institution: "UCLA Tech Commercialization",
      description: "",
      links:       {},
    },
    {
      period:      "2024-2025",
      role:        "Research Assistant",
      institution: "UCLA Security & Privacy Lab",
      description: "Investigate security and vulnerability of VR/AR assets, and their imapct on implemented applications.",
      links:       {},
    },
    {
      period:      "2022",
      role:        "Research Assistant",
      institution: "Mahidol University",
      description: "Conducted research on cryptocurrencies, markets, and issues such as 51% attack and impermanent loss",
      links:       {},
    },
  ],

  projects: [
    {
      date:     "2026",
      name:     "Source Credibility Reasoning In Bodies of Evidence",
      location: "Honda 99P Lab",
      desc:     "Finding information is cheap now. Judging it is still hard, and mostly unsolved. Nobody has a good answer for how an agent, starting from zero, could build a body of knowledge it can defend: what to keep, what to trust when sources conflict, and how to notice when something it learned stops being true. Tools like deep search collect; they don't curate, and they don't maintain. That gap between collecting information and establishing trust in it is what we're investigating.",
      links:    { code: "https://github.com/mcheung2-CMU/cmu-ini-fall-2026" },
    },
  ],

  news: [
    { date: "2025.03", badge: "Award", text: "INI Fellowship", },
    { date: "2025.03", badge: "New", text: "Admitted to CMU!", },
    { date: "2025.03", badge: "Award", text: "Dean's Honors List", },
    { date: "2024.12", badge: "Award", text: "Dean's Honors List", },
    { date: "2024.08", badge: "Cert", text: "ISC2 Cybersecurity Certified", links: { pdf: "assets/Isc2_Cybersecurity_Certification.pdf" } },
    { date: "2022.06", badge: "Award", text: "Dean's Honors List", },
    { date: "2023.03", badge: "Award", text: "Dean's Honors List", },
    { date: "2022.06", badge: "Award", text: "Dean's Honors List", },
    { date: "2022.03", badge: "Award", text: "Dean's Honors List", },
    { date: "2021.06", badge: "Award", text: "Salutatorian", },
    { date: "2021.03", badge: "New", text: "Admitted to UCLA!", },
    { date: "2019.03", badge: "Award", text: "CyberPatriot Nationals 2nd Place", links: { web: "https://troynjrotc.org/infosec2018-2019" } },
    { date: "2017.03", badge: "New", text: "Admitted to Troy Tech Program", },
  ],
};
