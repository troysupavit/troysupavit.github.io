// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Supavit (Troy) Pitaknarongphorn",
  initials:   "SP",
  siteTitle: "Homepage",
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
    { value: "4", label: "Labs"},
    { value: "10+",  label: "Projects" },
    { value: "9", label: "Awards" }
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
      description: "Looks at how email scams change when the target isn't a person but an AI assistant that reads and acts on emails. It compares traditional phishing emails with these newer prompt-injection attacks to see how they differ and whether they can be told apart. It then tests how well different detection tools catch each type, and what that means for protecting people and AI systems from fraud.",
      links:       {},
    },
    {
      period:      "2026-Present",
      role:        "Graduate Research Assistant",
      institution: "CMU Security & AI Research Lab",
      description: "Built a data pipeline for a VPN research project, analysing experiments across multiple providers and protocols to compare device power draw and network path behaviour with and without VPN encryption. Wrote the tooling end to end: experiment-quality validation, IP metadata enrichment for network attribution, and analysis scripts isolating the VPN-specific portion of each network path. Findings show VPN encryption substantially lengthens network paths and introduces additional network operators along the route, though much of the apparent overhead traces to the shared client-to-server segment rather than the VPN tunnel itself.",
      links:       {},
    },
    {
      period:      "2025",
      role:        "Undergraduate Teaching Assistant",
      institution: "UCLA Tech Commercialization",
      description: "Supported students in understanding technology commercialization, intellectual property protection, and startup development. Facilitated student learning through practical case studies, class discussions, and guidance on applying course concepts to real-world business scenarios. Supported the instructor in fostering student engagement and developing critical thinking and analytical skills.",
      links:       {},
    },
    {
      period:      "2025",
      role:        "Software Engineering and Business Development Intern",
      institution: "UniShack",
      description: "Created a webscraper leveraging Python and Beautiful Soup, gathering 1000+ contacts for customer acquisition purposes. Developed an LLM agent with OpenAI API to find 1000+ contact information based on existing potential partner data. Produced a standardized expansion flow chart for future campuses, being deployed on next known 5 campuses.",
      links:       {report: "assets/UCLA_Entrepreneurship_report.pdf", ppt: "assets/UCLA_Entrepreneurship_ppt.pdf" },
    },
    {
      period:      "2024-2025",
      role:        "Undergraduate Research Assistant",
      institution: "UCLA Security & Privacy Lab",
      description: "Studied 5 research papers on software security analysis & detection tools, virtual reality systems, and existing vulnerabilities. Analyzed 100+ source codes and libraries from Unity and Unreal Engine to find vulnerabilities and identify patterns. Created vulnerability detection software for virtual reality applications based on identified patterns from 100+ assets.",
      links:       {discussion_ppt: "assets/UCLA_research_litrev_ppt.pdf"},
    },
    {
      period:      "2024",
      role:        "Thai CERT Intern",
      institution: "Ministry of Digital Economy and Society",
      description: "Investigated cybercrime activities using Group IB and wrote 20+ daily reports on activities and potential dangers. Drafted 4 weekly reports compiling 10k+ records separated by sectors, critical levels, and types of attacks. Translated 5+ articles related to cybersecurity from English to Thai, ensuring relevant information is preserved.",
      links:       {},
    },
    {
      period:      "2023",
      role:        "Engineering Intern",
      institution: "Nippon Technology Solution Co., Ltd.",
      description: "Designed and constructed a virtual model of an industrial plastic shrink wrap machine leveraging AutoCAD. Manufactured industrial plastic shrink wrap machine and assembled electrical circuits from 10000+ components. Directed marketing research projects on the United States packaging and recyclable material situations.",
      links:       {},
    },
    {
      period:      "2022",
      role:        "Undergraduate Research Assistant",
      institution: "Mahidol University",
      description: "Conducted research on technology of cryptocurrencies, markets, and issues such as 51% attack and impermanent loss. Analyzed uni-swap markets and phenomenon of impermanent loss across 5 exchange functions and policies. Developed equations, models, and regulations to minimize impermanent loss for liquidity providers",
      links:       {},
    },
    {
      period:      "2020",
      role:        "Undergraduate Research Assistant",
      institution: "University of California, Los Angeles",
      description: "Conducted research on historical cases of illicit drug trafficking involving cryptocurrency and darknet marketplaces, including the Silk Road, to support efforts to understand and prevent cryptocurrency-facilitated drug dealing. Analyzed and synthesized findings from previous cases to identify relevant patterns, methods, and implications. Collaborated with the research team to prepare a survey research paper summarizing the findings for faculty review.",
      links:       {},
    },
  ],

  projects: [
    {
      date:     "2026",
      name:     "Source Credibility Reasoning In Bodies of Evidence",
      authors:  "Michael Cheung, Shuaiwei Huang, Supavit Pitaknarongphorn, Miaoyang Ye, Jiacheng Zhang, Dante Cannestra",
      location: "Honda 99P Lab",
      desc:     "Built a company-strategy monitoring system for business analysts that continuously ingests SEC filings, investor-relations releases, and third-party news for a 24-company watchlist, then surfaces what is new and how credible it is. Architected a multi-source document pipeline that collects 15,000+ filings (~636M characters, FY1993–present) and ~113 news providers across 12 reliability tiers, using a resumable, rate-limit-compliant archive with automated quality auditing and time-ordered replay. Implemented a hierarchical Bayesian truth-discovery model that learns per-source credibility to arbitrate conflicting claims, exposed end-to-end through an MCP server with unified agent-trajectory tracing.",
      links:    { GitHub: "https://github.com/mcheung2-CMU/cmu-ini-fall-2026" },
    },
    {
      date:     "2026",
      name:     "Digital Forensics Investigation",
      authors:  "Supavit Pitaknarongphorn, Abhi Nagalla, Pallavi Srivastava",
      location: "CMU Cyber Forensics Capstone",
      desc:     "Conducted a digital forensic investigation to reconstruct a simulated data exfiltration incident by examining disk images, email communications, system logs, and network artifacts. Used Autopsy, The Sleuth Kit, PeStudio, and custom Python scripts to analyze digital evidence, investigate malware activity, and correlate findings across multiple devices and systems. Collaborated with a team to document forensic procedures, maintain chain of custody, and produce a comprehensive incident report identifying evidence relevant to the incident timeline and suspected data leak.",
      links:    { report: "assets/CMU_cyfir_report.pdf" },
    },
    {
      date:     "2026",
      name:     "Secure Skies, Inc. - Cyber Risk Modeling",
      authors:  "Arturo Bohuchot, Porter Geddes, Viknesh Pathmarajah, Supavit Pitaknarongphorn",
      location: "CMU Cyber Risk Modeling",
      desc:     "Conducted a comprehensive cyber risk assessment for Secure Skies, Inc., evaluating CMMC Level 2 compliance against NIST SP 800-171 requirements. Applied MITRE ATT&CK, STRIDE, and FAIR methodologies to identify vulnerabilities, model cyber risks, and estimate potential financial losses. Developed a prioritized 18-month remediation roadmap to strengthen security controls, reduce cyber risk, and improve compliance readiness.",
      links:    { report: "assets/CMU_CRM_final_report.pdf", ppt: "assets/CMU_CRM_final_ppt.pdf", html: "assets/CMU_CRM_final_dashboard.html" },
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
      authors:  "Supavit Pitaknarongphorn",
      location: "CMU Network-Based Forensics",
      desc:     "Authored a network forensics lab that stands up an NGINX server with TLS 1.3 and HTTP/2, captures the resulting encrypted traffic with tshark, and shows why HTTP/2 frames stay invisible inside TLS Application Data. Recovering the session keys through SSL key logging decrypts the capture, revealing multiplexing, HPACK header compression, and frame-level detail in both tshark and Wireshark. Closes by framing why encryption is forcing forensic method to evolve, and why real investigations rarely hold the keys to match it.",
      links:    { report: "assets/CMU_NBF_final_report.pdf" },
    },  
    {
      date:     "2025",
      name:     "Voice Deepfakes",
      authors:  "Jacqueline Duong, Alexander Edwards, Asia Khalid, Anika Lima, Supavit Pitaknarongphorn",
      location: "UCLA Augmented Reality & Virtual Reality Security",
      desc:     "Developed a prosody-based machine learning pipeline to detect AI-generated voice deepfakes by extracting acoustic features, including fundamental frequency (F0), jitter, shimmer, and harmonic-to-noise ratio (HNR). Evaluated synthetic audio generated by XTTS-v2 and Kokoro, alongside ASVspoof2021 samples, using prosodic analysis and a pretrained RawNet2 detector. Analyzed detection performance across real and synthetic speech samples under varying audio conditions, identifying challenges in detecting advanced voice deepfakes and opportunities for more robust detection methods.",
      links:    { report: "assets/UCLA_AR&VR_security_report.pdf" },
    }, 
    {
      date:     "2025",
      name:     "Sensei",
      authors:  "Danielle Dickerson, Supavit Pitaknarongphorn, Ethan Samadi, Tania Tan, Alice Yang",
      location: "UCLA Business Plan Development",
      desc:     "Co-developed a business plan and investor pitch for Sensei, a smart diaper with a reusable sensor and AI-driven app that detects moisture, temperature, color, and pH to give parents real-time infant health insights. Built a financial model projecting break-even by Month 18, a 3.38:1 LTV:CAC ratio, and $148M in 5-year cumulative revenue, supporting a $2M pre-seed raise at a $8M pre-money valuation. Designed the go-to-market strategy (influencer marketing, parenting forums, prenatal yoga events) and competitive analysis against Pampers Lumi, Opro9, and Pixie Scientific.",
      links:    { report: "assets/UCLA_business_plan_report.pdf", ppt: "assets/UCLA_business_plan_ppt.pdf" },
    }, 
    {
      date:     "2024",
      name:     "United Airlines Bug Bounty",
      authors:  "Supavit Pitaknarongphorn, Alex, Yang",
      location: "UCLA Computer System Security",
      desc:     "Co-authored a security audit of United Airlines' web and mobile properties as part of a Computer System Security final project, targeting the airline's customer portals because they aggregate passports, payment data, and travel documents. Identified reflected XSS on ir.united.com, where <img>, <iframe>, and <form> tags passed through unsanitized after the main domain returned403. Demonstrated an XS-Leak timing side channel that infers which pages a user has visited by measuring sub-5ms image cache hits, letting an attacker profile a victim's travel habits and banking relationships.",
      links:    { ppt: "assets/UCLA_computer_security_ppt.pdf" },
    },
    {
      date:     "2024",
      name:     "An Electrified Economy",
      authors:  "Sahil Gosain, Yash Kothari, Supavit Pitaknarongphorn, Pranav Varmaraja",
      location: "UCLA Engineering and Society",
      desc:     "Co-authored feasibility study on whether the U.S. can electrify its economy, assessed against the DOE's targets of 100% clean electricity by 2035 and net-zero emissions by 2050. Identified the binding constraints — aging grid infrastructure, centralized generation, EV range collapse in winter storms, and too few charging stations — alongside societal and supply-chain costs. Recommended grid modernization, renewable investment, energy storage, and equity-focused policy reform so the transition stays affordable.",
      links:    { report: "assets/UCLA_writing_2_paper_3.pdf" },
    },
    {
      date:     "2024",
      name:     "Postmortem of Uber Fatal Crash, 2018",
      authors:  "Supavit Pitaknarongphorn",
      location: "UCLA Engineering and Society",
      desc:     "Authored postmortem of the Tempe crash that killed Elaine Herzberg, the first known autonomous-vehicle fatality. Analyzed the failure through a deontological lens: Uber's RADAR detected Herzberg roughly six seconds out yet cycled through misclassifying her as unknown, vehicle, and bicycle, while emergency braking was deliberately disabled and the distracted safety driver had no attentiveness monitoring to catch the gap. Recommended design-level redundancies and fail-safes, driver-alertness systems, and stricter NHTSA oversight for unproven systems deployed in public space.",
      links:    { report: "assets/UCLA_writing_2_paper_2.pdf" },
    },
    {
      date:     "2024",
      name:     "Ethical Considerations for Government Surveillance of the Internet",
      authors:  "Supavit Pitaknarongphorn",
      location: "UCLA Engineering and Society",
      desc:     "Authored policy analysis of post-9/11 U.S. Internet surveillance, tracing how PRISM and XKEYSCORE let the NSA collect bulk data without individual court orders under FISC's closed-door review. Evaluated the technical substrate — metadata analysis without consent, cloud-scale storage, and ML triage of collected traffic — and its constitutional cost, framing mass monitoring as a chilling effect on free expression and civic engagement. Recommended three reforms: legislative review of the Patriot Act and FISA with mandatory probable cause, strengthened encryption standards, and an independent oversight body with authority to audit programs.",
      links:    { report: "assets/UCLA_writing_2_paper_1.pdf" },
    },
    {
      date:     "2024",
      name:     "Soft-Rigid Robotic Joints Controlled By Deep Reinforcement-Learning",
      authors:  "Chaidhat Chaimongkol, Supavit Pitaknarongphorn, Akshyae Singh, Siddhant Singh",
      location: "UCLA Tech Commercialization",
      desc:     "Co-authored a technology commercialization assessment of soft-rigid robotic joints controlled by deep reinforcement learning, a patent-pending invention licensed to UC Santa Cruz. Built the IP analysis around patent US20220281123A1, mapping claims across through-hole and flexible-membrane joint designs, SAC-based nonlinear control, and the manufacturing method, then screening roughly 1.3M USPTO hits down to three relevant prior arts from Dogtooth, NVIDIA, and AI Inc. Concluded the technology was not ready to commercialize — crowded market, no strong differentiator, competitive parity risk — and recommended redirecting toward surgical robotics, industrial automation, and domestic robots.",
      links:    { ppt: "assets/UCLA_tech_commercialization_ppt.pdf" },
    },
  ],

  news: [
    { 
      date: "2025.03", 
      badge: "Award", 
      text: "INI Fellowship", 
    },
    { 
      date: "2025.03", 
      badge: "New", 
      text: "Admitted to CMU!", 
    },
    { 
      date: "2025.03", 
      badge: "Award", 
      text: "Dean's Honors List", 
    },
    { 
      date: "2024.12", 
      badge: "Award", 
      text: "Dean's Honors List", 
    },
    { 
      date: "2024.08", 
      badge: "Cert", 
      text: "ISC2 Cybersecurity Certified", 
      links: { pdf: "assets/ISC2_Cybersecurity_Certification.pdf" } 
    },
    { 
      date: "2024.06", 
      badge: "Award", 
      text: "Dean's Honors List", 
    },
    { 
      date: "2023.03", 
      badge: "Award", 
      text: "Dean's Honors List", 
    },
    { 
      date: "2022.06", 
      badge: "Award", 
      text: "Dean's Honors List", 
    },
    { 
      date: "2022.03", 
      badge: "Award", 
      text: "Dean's Honors List", 
    },
    { 
      date: "2021.03", 
      badge: "New", 
      text: "Admitted to UCLA!", 
    },
    { 
      date: "2021.05", 
      badge: "Award", 
      text: "Top 20 RUsecure CTF Nationals", 
      links: {} 
    },
    { 
      date: "2019.03", 
      badge: "Award", 
      text: "2nd Place CyberPatriot Nationals Finals", 
      links: { link: "https://troynjrotc.org/infosec2018-2019" } 
    },
  ],
};
