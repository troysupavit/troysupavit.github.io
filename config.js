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
      description: "Looks at how email scams change when the target isn't a person but an AI assistant that reads and acts on emails. It compares traditional phishing emails with these newer prompt-injection attacks to see how they differ and whether they can be told apart. It then tests how well different detection tools catch each type, and what that means for protecting people and AI systems from fraud.",
      links:       {},
    },
    {
      period:      "2026-Present",
      role:        "Research Assistant",
      institution: "CMU Security & AI Research Lab, PI: Taha Khan",
      description: "Built a data pipeline for a VPN research project, analysing experiments across multiple providers and protocols to compare device power draw and network path behaviour with and without VPN encryption. Wrote the tooling end to end: experiment-quality validation, IP metadata enrichment for network attribution, and analysis scripts isolating the VPN-specific portion of each network path. Findings show VPN encryption substantially lengthens network paths and introduces additional network operators along the route, though much of the apparent overhead traces to the shared client-to-server segment rather than the VPN tunnel itself.",
      links:       {},
    },
    {
      period:      "2025",
      role:        "Teaching Assistant",
      institution: "UCLA Tech Commercialization, Prof: Nathan Wilson",
      description: "Supported students in understanding technology commercialization, intellectual property protection, and startup development. Facilitated student learning through practical case studies, class discussions, and guidance on applying course concepts to real-world business scenarios. Supported the instructor in fostering student engagement and developing critical thinking and analytical skills.",
      links:       {},
    },
    {
      period:      "2024-2025",
      role:        "Research Assistant",
      institution: "UCLA Security & Privacy Lab, PI: Yuan Tian",
      description: "Studied 5 research papers on software security analysis & detection tools, virtual reality systems, and existing vulnerabilities. Analyzed 100+ source codes and libraries from Unity and Unreal Engine to find vulnerabilities and identify patterns. Created vulnerability detection software for virtual reality applications based on identified patterns from 100+ assets",
      links:       {discussion_ppt: "assets/UCLA_research_litrev_ppt.pdf"},
    },
    {
      period:      "2022",
      role:        "Research Assistant",
      institution: "Mahidol University, PI: Wittawat Kositwattanarerk",
      description: "Conducted research on technology of cryptocurrencies, markets, and issues such as 51% attack and impermanent loss. Analyzed uni-swap markets and phenomenon of impermanent loss across 5 exchange functions and policies. Developed equations, models, and regulations to minimize impermanent loss for liquidity providers",
      links:       {},
    },
    {
      period:      "2020",
      role:        "Research Assistant",
      institution: "California State University, Fullerton, PI: Wenlin Han",
      description: "Conducted research on illicit drug trafficking cases involving cryptocurrency and darknet marketplaces, including the Silk Road, to understand how these technologies facilitate illegal activities. Reviewed and analyzed previous cases of cryptocurrency-related drug interdiction to identify key trends and investigative insights. Collaborated with the research team to develop a survey paper summarizing findings for academic research.",
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
      links:    { pdf: "assets/CMU_CRM_final_report.pdf", ppt: "assets/CMU_CRM_final_ppt.pdf", html: "assets/CMU_CRM_final_dashboard.html" },
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
    { date: "2024.08", badge: "Cert", text: "ISC2 Cybersecurity Certified", links: { pdf: "assets/ISC2_Cybersecurity_Certification.pdf" } },
    { date: "2022.06", badge: "Award", text: "Dean's Honors List", },
    { date: "2023.03", badge: "Award", text: "Dean's Honors List", },
    { date: "2022.06", badge: "Award", text: "Dean's Honors List", },
    { date: "2022.03", badge: "Award", text: "Dean's Honors List", },
    { date: "2021.06", badge: "Award", text: "Salutatorian", },
    { date: "2021.03", badge: "New", text: "Admitted to UCLA!", },
    { date: "2021.02", badge: "New", text: "Ranked top 20 in RUSecutre CTF Nationals!"},
    { date: "2020.06", badge: "Award", text: "National Merit Scholarship Program Letter of Commendation", },
    { date: "2019.06", badge: "Award", text: "AP Scholar with Distinction", },
    { date: "2019.03", badge: "Award", text: "CyberPatriot Nationals 2nd Place", links: { web: "https://troynjrotc.org/infosec2018-2019" } },
    { date: "2018.06", badge: "Award", text: "Top 100 Academic Accomplishment", },
    { date: "2017.03", badge: "New", text: "Admitted to Troy Tech Program", },
  ],
};
