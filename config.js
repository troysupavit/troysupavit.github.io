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
    {
      year:     2025,
      title:    "Your Paper Title Here",
      authors:  "Your Name, Co-Author 1, Co-Author 2",
      venue:    "Conference / Journal Name 2025",
      links:    { pdf: "#", code: "#" },
      abstract: "A brief summary of your paper's contributions and findings.",
    },
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
      links:       {discussion_ppt: "assets/UCLA_research_litrev_ppt.pdf"},
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
      authors:  "Michael Cheung, Shuaiwei Huang, Supavit Pitaknarongphorn, Miaoyang Ye, Jiacheng Zhang, Dante Cannestra",
      location: "Honda 99P Lab",
      desc:     "Finding information is cheap now. Judging it is still hard, and mostly unsolved. Nobody has a good answer for how an agent, starting from zero, could build a body of knowledge it can defend: what to keep, what to trust when sources conflict, and how to notice when something it learned stops being true. Tools like deep search collect; they don't curate, and they don't maintain. That gap between collecting information and establishing trust in it is what we're investigating.",
      links:    { code: "https://github.com/mcheung2-CMU/cmu-ini-fall-2026" },
    },
    {
      date:     "2026",
      name:     "Secure Skies, Inc. - Cyber Risk Modeling",
      authors:  "Arturo Bohuchot, Porter Geddes, Viknesh Pathmarajah, Supavit Pitaknarongphorn",
      location: "CMU Cyber Risk Modeling",
      desc:     "Conducted a comprehensive cyber risk assessment for Secure Skies, Inc., evaluating CMMC Level 2 compliance against NIST SP 800-171 requirements. Applied MITRE ATT&CK, STRIDE, and FAIR methodologies to identify vulnerabilities, model cyber risks, and estimate potential financial losses. Developed a prioritized 18-month remediation roadmap to strengthen security controls, reduce cyber risk, and improve compliance readiness.",
      links:    { pdf: "assets/CRM_final_report.pdf", ppt: "assets/CRM_final_ppt.pdf", html: "assets/CRM_final_dashboard.html" },
    },
    {
      date:     "2026",
      name:     "AI-Assisted Host-Based Forensic Report Generation & Artifact Correlation",
      authors:  "Aadi Jain, Supavit Pitaknarongphorn, Evan Yu",
      location: "CMU Host-Based Forensics",
      desc:     "Developed an AI-assisted digital forensics pipeline to automate host-based forensic report generation and reduce manual investigative effort. Designed an MCP-based architecture connecting LLMs to Autopsy forensic artifacts, enabling structured evidence retrieval and cross-artifact correlation. Explored how generative AI can improve the accuracy, efficiency, and reliability of forensic investigations while mitigating hallucinations and bias.",
      links:    { ppt: "assets/CMU_HBF_final_ppt.pdf" },
    },
    {
      date:     "2025",
      name:     "HTTP/2 Protocol Analysis - Encrypted Performance & Packet Forensics",
      authors:  "Supavit (Troy) Pitaknarongphorn",
      location: "CMU Network-Based Forensics",
      desc:     "Authored a network forensics lab that stands up an NGINX server with TLS 1.3 and HTTP/2, captures the resulting encrypted traffic with tshark, and shows why HTTP/2 frames stay invisible inside TLS Application Data. Recovering the session keys through SSL key logging decrypts the capture, revealing multiplexing, HPACK header compression, and frame-level detail in both tshark and Wireshark. Closes by framing why encryption is forcing forensic method to evolve, and why real investigations rarely hold the keys to match it.",
      links:    { pdf: "assets/CMU_NBF_final_report.pdf" },
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
