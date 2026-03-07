export const personal = {
  name: "Trishan Talukdar",
  title: "Data Engineering & Analytics Professional",
  tagline: "Turning data into decisions — from pipelines to insights.",
  location: "Sydney, Australia",
  email: "trishan.talukdar@gmail.com",
  linkedin: "https://www.linkedin.com/in/trishantalukdar/",
  bio: "I'm a data engineering and analytics professional with over 7 years of experience building scalable data platforms, modern data stacks, and AI-powered analytics solutions across three major cloud providers. Based in Sydney, I blend technical depth with strategic thinking — whether architecting ELT pipelines, leading cross-functional delivery teams, or building GenAI applications that turn compliance burdens into business intelligence.",
  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Cloud Platforms", value: "3" },
    { label: "Major Platforms Built", value: "2" },
    { label: "Industries", value: "5+" },
  ],
};

export const skills = [
  {
    category: "Data Engineering",
    tags: ["dbt", "Apache Spark", "Airflow", "ELT/ETL", "Medallion Architecture"],
  },
  {
    category: "Cloud & Infrastructure",
    tags: ["AWS", "Azure", "GCP", "Snowflake", "Databricks", "Docker"],
  },
  {
    category: "Analytics & BI",
    tags: ["Power BI", "Tableau", "Looker", "SQL", "DAX"],
  },
  {
    category: "AI & Machine Learning",
    tags: ["GenAI", "RAG", "Prompt Engineering", "NLP", "fast.ai", "PyTorch", "Hugging Face"],
  },
  {
    category: "Languages & Tools",
    tags: ["Python", "PySpark", "SQL", "Git", "CI/CD", "Jupyter"],
  },
  {
    category: "Leadership & Delivery",
    tags: ["Team Leadership", "Agile / Scrum", "Client Advisory", "QA Frameworks", "Stakeholder Management", "Technical Mentoring"],
  },
];

export const timeline = [
  {
    id: 1,
    company: "Pacific National",
    companyUrl: "https://www.pacificnational.com.au/",
    role: "Analytics Engineer",
    period: "Jun 2023 – Present",
    location: "Sydney, AU",
    type: "Full-time",
    highlights: [
      "Lead the analytics engineering function, owning the modern data stack strategy across dbt, Databricks, and Power BI.",
      "Architected and delivered a Revenue Leakage Detection platform for Order-to-Cash analytics, surfacing previously invisible revenue gaps.",
      "Drove BI modernisation by migrating legacy reporting to a governed semantic layer, improving data reliability and self-service adoption.",
      "Established pipeline architecture standards, coding conventions, and peer-review processes for the team.",
      "Partner directly with commercial, operations, and finance stakeholders to translate business requirements into data products.",
    ],
    tags: ["dbt", "Databricks", "Power BI", "Python", "Azure", "Medallion Architecture"],
  },
  {
    id: 2,
    company: "Deloitte",
    companyUrl: "https://www.deloitte.com/au/",
    role: "Senior Consultant, Data Engineering & Analytics",
    period: "Mar 2018 – Jun 2023",
    location: "Sydney, AU",
    type: "Consulting",
    highlights: [
      "Delivered enterprise data engineering and analytics engagements across financial services, energy, and public sector clients.",
      "Led development of the SustainNext™ GenAI ESG Compliance Platform — a production RAG pipeline using LLMs for semantic compliance gap analysis.",
      "Built Gen-1, an NLP complaint classifier using fast.ai supervised deep learning, mapped to AFCA taxonomy with high precision/recall.",
      "Served as Senior Delivery Consultant at CBA, establishing QA and data lineage frameworks for a large-scale regulatory remediation program.",
      "Provided technical advisory on data platform architecture, cloud migration, and analytics strategy for multiple enterprise clients.",
    ],
    tags: ["GenAI", "RAG", "NLP", "fast.ai", "AWS", "Azure", "Snowflake", "dbt"],
    interlude: { label: "Postgraduate Studies", period: "2016 – 2018" },
    subRoles: [
      {
        role: "Senior Delivery Consultant",
        client: "Commonwealth Bank of Australia (CBA)",
        period: "May 2021 – Nov 2021",
        description: "QA/lineage frameworks, regulatory compliance delivery, cross-functional leadership for large-scale remediation program.",
      },
    ],
  },
  {
    id: 3,
    company: "University of Mumbai",
    companyUrl: "https://mu.ac.in/",
    role: "Assistant Lecturer",
    period: "2015 – 2016",
    location: "Mumbai, India",
    type: "Academic",
    highlights: [
      "Taught undergraduate mechanical engineering courses including Heat & Mass Transfer, Mechanical Design, and Theory of Machines.",
      "Developed lecture materials, assessments, and lab exercises across multiple cohorts.",
      "Mentored final-year students on engineering capstone projects.",
    ],
    tags: ["Teaching", "Heat & Mass Transfer", "Mechanical Design", "Theory of Machines"],
    interlude: { label: "Undergraduate Studies", period: "2010 – 2014" },
  },
];

export const projects = [
  {
    id: 1,
    title: "SustainNext™",
    titleUrl: "https://www.deloitte.com/au/en/products/sustain-next-climate-reporting.html",
    subtitle: "GenAI ESG Compliance Platform",
    company: "Deloitte",
    role: "Senior Developer",
    trademarkNote: "SustainNext™ is a trademark of Deloitte.",
    description:
      "Built the core GenAI pipeline for Deloitte's ESG compliance product — automating regulatory gap analysis across unstructured documents using RAG and LLM semantic analysis.",
    highlights: [
      "~80% reduction in manual compliance review time",
      "RAG pipeline over regulatory corpora with LLM semantic gap analysis",
      "Compliance scoring mapped to GRI, SASB, and TCFD frameworks",
      "Prompt-engineered extraction templates for structured ESG output",
    ],
    tags: ["GenAI", "RAG", "LLM", "Python", "Prompt Engineering", "ESG"],
    accent: "#C27A5A",
  },
  {
    id: 2,
    title: "Gen-1",
    subtitle: "Text (Complaints) Classification",
    company: "Deloitte",
    role: "Lead Developer",
    description:
      "Built an NLP text classification system for a major financial institution to automatically categorise customer complaints for regulatory routing and reporting.",
    highlights: [
      "Multi-class classification across the full AFCA complaint taxonomy",
      "fast.ai / PyTorch ULMFiT with transfer learning on limited labelled data",
      "High precision/recall — minimal annotation required",
      "Automated downstream routing and regulatory report generation",
    ],
    tags: ["NLP", "Text Classification", "fast.ai", "PyTorch", "Python", "AFCA"],
    accent: "#8C7B6E",
  },
  {
    id: 3,
    title: "Revenue Leakage Detection",
    subtitle: "Order-to-Cash Analytics Platform",
    company: "Pacific National",
    role: "Analytics Engineer",
    description:
      "Architected an analytics platform to detect and quantify revenue leakage across Order-to-Cash — unifying billing, freight, and contract data to surface previously invisible gaps.",
    highlights: [
      "Significant recurring revenue leakage identified and attributed",
      "End-to-end O2C data model in dbt + Databricks",
      "Automated anomaly detection for billing discrepancies and undercharges",
      "Executive Power BI dashboards with drill-through to transaction level",
    ],
    tags: ["dbt", "Databricks", "Power BI", "Python", "Azure"],
    accent: "#C27A5A",
  },
  {
    id: 4,
    title: "CBA Remediation Program",
    subtitle: "Regulatory Compliance Delivery",
    company: "Commonwealth Bank of Australia",
    role: "Senior Delivery Consultant (via Deloitte)",
    description:
      "Embedded within CBA's large-scale customer remediation program, establishing QA and data lineage frameworks under tight regulatory deadlines.",
    highlights: [
      "Full audit traceability across affected customer populations",
      "QA and data quality testing frameworks built from the ground up",
      "End-to-end data lineage for regulatory audit trails",
      "Cross-functional delivery across engineering, compliance, and legal",
    ],
    tags: ["Data Lineage", "QA Frameworks", "Regulatory Compliance", "SQL", "Agile"],
    accent: "#8C7B6E",
  },
];

export const education = [
  {
    degree: "Master of Engineering and Engineering Management",
    institution: "University of Technology Sydney",
    institutionUrl: "https://www.uts.edu.au/",
    period: "2016 – 2018",
    location: "Sydney, AU",
    detail: "Major — Mechanical Design",
    highlights: [
      "Majored in Mechanical Design within a dual-discipline engineering and management programme.",
      "Developed cross-functional skills bridging technical engineering practice with organisational leadership and project delivery.",
      "Graduated in 2018, the same year as joining Deloitte — combining postgraduate study with the start of a professional consulting career.",
    ],
    tags: ["Engineering Management", "Mechanical Design", "Systems Thinking", "Project Management"],
  },
  {
    degree: "Bachelor of Engineering (Mechanical Engineering)",
    institution: "University of Mumbai",
    institutionUrl: "https://mu.ac.in/",
    period: "2010 – 2014",
    location: "Mumbai, India",
    detail: "First Class Honours",
    highlights: [
      "First Class Honours.",
      "Core study in thermodynamics, fluid mechanics, mechanical design, and theory and system of machines.",
    ],
    tags: ["Mechanical Engineering", "Thermodynamics", "Fluid Mechanics", "Mechanical Design"],
  },
];

export const leadership = [
  {
    title: "Analytics Engineering Lead",
    org: "Pacific National",
    description: "Leading the analytics engineering practice — team standards, hiring, mentoring, and technical strategy.",
  },
  {
    title: "Graduate Program Mentor",
    org: "Deloitte",
    description: "Mentored junior consultants and graduates across data engineering rotations at Deloitte.",
  },
  {
    title: "Assistant Lecturer",
    org: "University of Mumbai",
    description: "Taught Heat & Mass Transfer, Mechanical Design, and Theory of Machines; developed curriculum and guided capstone projects.",
  },
  {
    title: "Professional Mentor",
    org: "UTS Professional Mentoring Programme",
    description: "Mentored UTS students on career development, industry transitions, and professional growth in engineering and data.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
