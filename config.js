// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Supavit (Troy) Pitaknarongphorn",
  initials:   "SP",
  role:       "PhD Applicant",
  university: "",
  email:      "spitakna@andrew.cmu.edu",
  // Each array item is rendered as its own <p> — one entry per paragraph.
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
    scholar: "",
    github:  "",
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2025,
      title:    "Your Paper Title Here",
      authors:  "Your Name, Co-Author 1, Co-Author 2",
      venue:    "Conference / Journal Name 2025",
      links:    { pdf: "#", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
    {
      year:     2024,
      title:    "Another Paper Title",
      authors:  "Your Name, Co-Author 1",
      venue:    "Conference / Journal Name 2024",
      links:    { pdf: "#" },
      abstract: "",
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
    },
  ],

  news: [
    { date: "2025.01", badge: "New",   text: "Paper accepted at Conference 2025!" },
    { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  ],

  education: [
    { period: "2025-Present", degree: "M.S. in Information Technology - Information Security, Cyber Forensics and Incident Response Track", institution: "Carnegie Mellon University" },
    { period: "2021-2025",    degree: "B.S. in Computer Science and Engineering, Entrepreneurship Minor",  institution: "University of California, Los Angeles" },
  ],

  experience: [
    { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  ],
};
