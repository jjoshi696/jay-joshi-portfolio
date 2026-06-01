// =============================================================================
// SITE CONTENT & CONFIGURATION
// -----------------------------------------------------------------------------
// All editable content lives here so non-engineers can update copy without
// touching components. Replace the placeholder values flagged with [REPLACE]
// (email + LinkedIn URL) with the real values before deploying.
// =============================================================================

export const site = {
  name: 'Jay Joshi "JJ"',
  shortName: "Jay Joshi",
  primaryTitle:
    "Engineering Leader – AI Platforms, AI Automation & Digital Transformation",
  subtitle:
    "VP, Global Engineering & Managed Services | Cybersecurity Automation | Managed XDR | AI-Driven SecOps",
  // [REPLACE] - update the email below before deploying
  email: "jjoshi.tech@yahoo.com",
  // [REPLACE] - update the LinkedIn URL below before deploying
  linkedin: "https://www.linkedin.com/in/jj-cyberenthusiast/",
  location: "San Diego, USA",
  resumeFile: "/Jay-Joshi-Resume.pdf",
  seo: {
    title:
      'Jay Joshi "JJ" | Engineering Leader – AI Platforms, AI Automation & Digital Transformation',
    description:
      'Executive technology portfolio for Jay Joshi "JJ", VP Global Engineering & Managed Services, specializing in AI-driven cybersecurity automation, Managed XDR, SOC transformation, SIEM, XDR, EDR, and digital transformation.',
    keywords: [
      "Jay Joshi",
      "JJ Joshi",
      "AI Automation",
      "Cybersecurity",
      "Managed XDR",
      "SOC Automation",
      "SIEM",
      "XDR",
      "EDR",
      "Engineering Leader",
      "Digital Transformation",
      "Proficio",
    ],
    ogImage: "/og-image.png",
  },
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroPanels = [
  "AI Automation",
  "SOC / SIEM / XDR",
  "RAG Workflows",
  "Managed Services",
  "Global Engineering",
  "Digital Transformation",
] as const;

export const executiveSummary = [
  "Engineering and cybersecurity leader with deep experience building AI-driven platforms, automation programs, and scalable global security operations. Skilled in leading high-performing engineering teams, designing intelligent automation across SOC, SIEM, XDR, and EDR environments, and translating complex technical challenges into measurable business outcomes.",
  "Experienced in client-facing solution engineering, executive communication, pre-sales support, managed services strategy, and digital transformation. Hands-on in developing RAG-based AI workflows, decision-driven response systems, and automation frameworks that improve operational efficiency, reduce manual effort, and strengthen customer security outcomes.",
] as const;

export const impactMetrics = [
  {
    metric: "60–70%",
    label: "Manual Effort Reduction",
    description:
      "Driven through AI-assisted automation, workflow optimization, and intelligent response processes.",
  },
  {
    metric: "Managed EDR & XDR",
    label: "Service Offering Founder",
    description:
      "Founded and advanced Managed EDR and XDR service capabilities for the current company, including Cisco XDR and Palo Alto Cortex XDR service offerings.",
  },
  {
    metric: "Multi-Million $",
    label: "Deal Support",
    description:
      "Supported global sales initiatives, executive workshops, and customer transformation programs.",
  },
  {
    metric: "Global Teams",
    label: "Engineering Leadership",
    description:
      "Built, led, and scaled technical teams supporting global managed services delivery.",
  },
] as const;

export const expertiseCards = [
  {
    title: "AI-Driven Security Automation",
    description:
      "Designing RAG-based workflows, intelligent enrichment, detection support, response automation, and AI-assisted SOC operations.",
    icon: "spark",
  },
  {
    title: "Managed XDR & SecOps Transformation",
    description:
      "Building and scaling Managed XDR capabilities across Cisco XDR, Palo Alto Cortex XDR, SIEM, EDR, and SOAR ecosystems.",
    icon: "shield",
  },
  {
    title: "Global Engineering Leadership",
    description:
      "Leading distributed technical teams, managers, and engineering programs supporting global customer operations and service delivery.",
    icon: "globe",
  },
  {
    title: "Solution Engineering & Pre-Sales",
    description:
      "Partnering with executives, sales leadership, and customers to translate complex technical solutions into ROI-driven business outcomes.",
    icon: "handshake",
  },
  {
    title: "Cybersecurity Infrastructure",
    description:
      "Strong background across NGFW, EDR, SIEM, SOAR, cloud security, threat detection, incident response, and managed security services.",
    icon: "stack",
  },
  {
    title: "Digital Transformation",
    description:
      "Helping organizations modernize cybersecurity operations through automation, scalable processes, and technology-driven service models.",
    icon: "trend",
  },
] as const;

export const leadershipAreas = [
  "AI Platforms & RAG Workflows",
  "Agentic Automation",
  "SOC Modernization",
  "SIEM / XDR / EDR Transformation",
  "Managed XDR Service Creation",
  "Cybersecurity Automation",
  "Executive & Client Workshops",
  "Global Managed Services Delivery",
  "ROI-Driven Technical Strategy",
  "Team Building & Operational Scale",
] as const;

export type ExperienceRole = {
  company: string;
  location: string;
  role: string;
  dates: string;
  featured?: boolean;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceRole[] = [
  {
    company: "Proficio",
    location: "San Diego, USA",
    role: "VP, Global Engineering & Managed Services",
    dates: "Sept 2024 – Present",
    featured: true,
    summary:
      "Leading global engineering and managed services initiatives focused on AI-driven cybersecurity automation, SOC transformation, Managed XDR, SIEM, XDR, EDR, and digital transformation. Responsible for building scalable service capabilities, driving automation across global operations, supporting enterprise client engagements, and translating complex technical solutions into measurable business outcomes.",
    highlights: [
      "Leading AI-driven automation across SOC, SIEM, XDR, and EDR platforms.",
      "Built RAG-based AI workflows for enrichment, detection, and response.",
      "Driving 60–70% reduction in manual effort through automation.",
      "Founded Proficio's Managed XDR service offering for Cisco XDR and Palo Alto Cortex XDR.",
      "Conducting client discovery and transformation workshops.",
      "Translating technical solutions into ROI-driven business outcomes.",
      "Supporting multi-million-dollar deals and global sales initiatives.",
      "Strengthened customer security postures by designing environments using existing tools and next-generation solutions.",
      "Supported global customers managing complex cybersecurity infrastructure.",
      "Established and scaled technical teams to support global staffing, delivery, and managed services needs.",
      "Supported Cyber Exposure Monitoring and ProBAS initiatives along with other managed services programs.",
    ],
    tags: [
      "AI Automation",
      "RAG",
      "Managed XDR",
      "Cisco XDR",
      "Cortex XDR",
      "SOC",
      "SIEM",
      "EDR",
      "Global Engineering",
      "Executive Leadership",
      "Pre-Sales",
      "Digital Transformation",
    ],
  },
  {
    company: "Proficio",
    location: "San Diego, USA",
    role: "Global Director, Managed Infrastructure Services",
    dates: "Jan 2023 – Sept 2024",
    featured: true,
    summary:
      "Led global solution engineering, managed infrastructure services, and automation initiatives across customer environments. Partnered with executives, board members, sales leadership, and technical teams to deliver secure infrastructure services, advance automation capabilities, and support enterprise transformation programs.",
    highlights: [
      "Led global solution engineering and automation initiatives.",
      "Enabled AI-assisted workflows and SOAR-driven operations.",
      "Partnered with executives and sales teams on multi-million-dollar opportunities.",
      "Helped customers manage infrastructure, improve cybersecurity posture, and architect secure environments.",
      "Promoted Managed EDR and Next-Generation Firewall services across global customer accounts.",
      "Managed global teams supporting customer operations, delivery, and technical escalations.",
      "Worked with global sales leadership, executives, and board members to support customer growth and service strategy.",
      "Helped close opportunities valued at over a couple of million dollars.",
    ],
    tags: [
      "Managed Services",
      "SOAR",
      "EDR",
      "NGFW",
      "Global Delivery",
      "Solution Engineering",
      "Technical Sales",
      "Executive Engagement",
      "Automation",
    ],
  },
  {
    company: "Proficio",
    location: "San Diego, USA",
    role: "Global Manager, Managed Infrastructure Services",
    dates: "Jan 2022 – Jan 2023",
    summary:
      "Managed global infrastructure engineering teams responsible for supporting customer cybersecurity infrastructure, managed services delivery, and operational excellence. Focused on strengthening client security posture, improving service delivery, and supporting technical growth across the organization.",
    highlights: [
      "Managed global MIS team operations and customer delivery.",
      "Supported customers across firewall, EDR, SIEM, and managed infrastructure environments.",
      "Helped improve service quality, escalation handling, and operational consistency.",
      "Supported sales and technical teams with solution design and customer-facing expertise.",
      "Guided engineers working on complex customer environments and managed service operations.",
    ],
    tags: [
      "Team Leadership",
      "Managed Infrastructure",
      "Customer Success",
      "Firewalls",
      "EDR",
      "Service Delivery",
      "Operations",
    ],
  },
  {
    company: "Proficio",
    location: "San Diego, USA",
    role: "Global Lead, Managed Infrastructure Services",
    dates: "Oct 2020 – Jan 2022",
    summary:
      "Led technical delivery and customer support initiatives across managed infrastructure services. Helped guide engineers, improve customer outcomes, and support complex firewall, EDR, and security infrastructure environments.",
    highlights: [
      "Led technical execution for managed infrastructure services.",
      "Supported customer environments involving firewalls, endpoint security, and security operations platforms.",
      "Helped troubleshoot complex technical and operational challenges.",
      "Contributed to process improvements and service delivery maturity.",
      "Supported global customer infrastructure operations and escalations.",
    ],
    tags: [
      "Technical Leadership",
      "Managed Services",
      "Firewalls",
      "EDR",
      "Customer Operations",
      "Escalations",
    ],
  },
  {
    company: "Proficio",
    location: "San Diego, USA",
    role: "Security Engineer III",
    dates: "Dec 2019 – Oct 2020",
    summary:
      "Served as a senior security engineer supporting customer cybersecurity infrastructure, managed security tools, and operational support activities. Focused on improving customer security posture and resolving advanced technical issues.",
    highlights: [
      "Supported firewall, EDR, and managed security infrastructure.",
      "Worked with endpoint security tools including Carbon Black and Trend Micro.",
      "Assisted customers with security operations, troubleshooting, and infrastructure improvements.",
      "Contributed to technical escalation handling and customer success.",
      "Supported operational improvements across managed infrastructure services.",
    ],
    tags: [
      "Security Engineering",
      "EDR",
      "Carbon Black",
      "Trend Micro",
      "Firewalls",
      "Troubleshooting",
      "Customer Support",
    ],
  },
  {
    company: "Proficio",
    location: "San Diego, USA",
    role: "Security Engineer I–II",
    dates: "July 2017 – Dec 2019",
    summary:
      "Started at Proficio as a Security Engineer, supporting managed infrastructure and cybersecurity services for global customers. Built hands-on experience across firewalls, EDR platforms, customer support, troubleshooting, and secure infrastructure operations.",
    highlights: [
      "Supported customer firewall and EDR environments.",
      "Assisted with Carbon Black, Trend Micro, and related managed security tools.",
      "Helped customers improve security posture and operational reliability.",
      "Built foundational experience in managed security services and customer-facing security engineering.",
      "Supported remote troubleshooting, service delivery, and customer operations.",
    ],
    tags: [
      "Security Engineering",
      "Firewalls",
      "EDR",
      "Managed Security",
      "Customer Support",
      "Cybersecurity Operations",
    ],
  },
  {
    company: "Cisco Systems",
    location: "San Jose, USA",
    role: "Security Engineer",
    dates: "April 2016 – April 2017",
    summary:
      "Worked on cybersecurity testing, traffic behavior analysis, firewall configuration parsing, penetration testing, malware behavior analysis, and security incident analysis.",
    highlights: [
      "Tested and analyzed device traffic behavior using Spirent and IXIA BreakingPoint.",
      "Developed processes for parsing corporate firewall settings into multiple file formats.",
      "Performed host, network, and web application penetration testing.",
      "Analyzed malware behavior and security incidents.",
      "Supported security testing, validation, and technical analysis initiatives.",
    ],
    tags: [
      "Cisco",
      "Security Testing",
      "Penetration Testing",
      "Malware Analysis",
      "Firewall Parsing",
      "Spirent",
      "IXIA BreakingPoint",
    ],
  },
  {
    company: "Adxor Technologies Ltd",
    location: "Mumbai, India",
    role: "Network Engineer",
    dates: "March 2012 – Nov 2014",
    summary:
      "Supported network engineering, infrastructure deployment, troubleshooting, and security operations across routers, switches, firewalls, load balancers, VPNs, and QoS environments.",
    highlights: [
      "Configured and installed routers, switches, firewalls, load balancers, VPNs, and QoS technologies.",
      "Monitored network performance, availability, and reliability.",
      "Provided Level 2/3 support for local and wide-area network issues.",
      "Supported network security through access monitoring, policy implementation, and firmware upgrades.",
      "Performed remote troubleshooting and fault isolation during network installations.",
      "Helped maintain reliable and secure network infrastructure.",
    ],
    tags: [
      "Network Engineering",
      "Routers",
      "Switches",
      "Firewalls",
      "Load Balancers",
      "VPN",
      "QoS",
      "L2/L3 Support",
    ],
  },
];

export const techStack = [
  {
    category: "AI & Automation",
    items: [
      "AI Platforms",
      "RAG Models",
      "Agentic Automation",
      "Intelligent Automation",
      "AI Strategy",
      "Decision-Driven Response Systems",
    ],
  },
  {
    category: "Security Operations",
    items: [
      "SOC Operations",
      "Threat Detection & Response",
      "Incident Response",
      "Threat Intelligence",
      "Cybersecurity Operations",
    ],
  },
  {
    category: "SIEM",
    items: ["Microsoft Sentinel", "Splunk", "QRadar", "Elastic"],
  },
  {
    category: "XDR",
    items: [
      "Cisco XDR",
      "Palo Alto Cortex XDR",
      "CrowdStrike",
      "SentinelOne",
      "Trend Micro",
      "Microsoft XDR",
    ],
  },
  {
    category: "EDR",
    items: [
      "CrowdStrike",
      "SentinelOne",
      "Microsoft Defender",
      "Carbon Black",
      "Trend Micro",
      "Sophos",
      "Cisco Secure Endpoint",
      "FortiEDR",
    ],
  },
  {
    category: "SOAR",
    items: ["FortiSOAR", "Tines", "Cortex XSOAR", "Logic Apps"],
  },
  {
    category: "Cloud & Network Security",
    items: [
      "Azure",
      "AWS",
      "Palo Alto",
      "Cisco",
      "Check Point",
      "Fortinet",
      "NGFW",
      "Network Security",
    ],
  },
  {
    category: "Business & Leadership",
    items: [
      "Digital Transformation",
      "Solution Engineering",
      "Pre-Sales",
      "Technical Sales",
      "Executive Communication",
      "Global Team Leadership",
      "Managed Services Strategy",
    ],
  },
  {
    category: "Specialties",
    items: [
      "Security Operations Transformation",
      "Threat Detection Engineering",
      "Continuous Threat Exposure Management (CTEM)",
      "Security Strategy",
      "Risk Management",
      "IT Governance",
      "Leadership Development",
      "Vendor Management",
      "Solution Consulting",
    ],
  },
] as const;

export const education = [
  {
    title: "PhD in Cybersecurity",
    status: "On Hold",
  },
  {
    title: "Masters in Cybersecurity",
  },
  {
    title: "Masters in Computer Science",
  },
  {
    title: "Bachelors in Computer Engineering",
  },
  {
    title: "Associate Degree in Computer Engineering",
  },
] as const;
