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
    tags: ["dbt", "Apache Spark", "Airflow", "Kafka", "ELT/ETL", "Data Vault 2.0", "Medallion Architecture", "Data Lineage"],
  },
  {
    category: "Cloud & Infrastructure",
    tags: ["AWS", "Azure", "GCP", "Snowflake", "Databricks", "Terraform", "Docker"],
  },
  {
    category: "Analytics & BI",
    tags: ["Power BI", "Tableau", "Looker", "SQL", "DAX", "Semantic Layer", "Revenue Analytics"],
  },
  {
    category: "AI & Machine Learning",
    tags: ["GenAI", "LLM Integration", "RAG", "Prompt Engineering", "NLP", "fast.ai", "PyTorch", "Hugging Face"],
  },
  {
    category: "Languages & Tools",
    tags: ["Python", "SQL", "Scala", "PySpark", "Git", "CI/CD", "REST APIs", "Jupyter"],
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
    role: "Analytics Engineer – Function Lead",
    period: "Jun 2023 – Present",
    location: "Sydney, AU",
    type: "Full-time",
    highlights: [
      "Lead the analytics engineering function, owning the modern data stack strategy across dbt, Snowflake, and Power BI.",
      "Architected and delivered a Revenue Leakage Detection platform for Order-to-Cash analytics, surfacing previously invisible revenue gaps.",
      "Drove BI modernisation by migrating legacy reporting to a governed semantic layer, improving data reliability and self-service adoption.",
      "Established pipeline architecture standards, coding conventions, and peer-review processes for the team.",
      "Partner directly with commercial, operations, and finance stakeholders to translate business requirements into data products.",
    ],
    tags: ["dbt", "Snowflake", "Power BI", "Python", "Azure", "Medallion Architecture"],
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
      "Built Gen-I, an NLP complaint classifier using fast.ai supervised deep learning, mapped to AFCA taxonomy with high precision/recall.",
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
    period: "2014 – 2016",
    location: "Mumbai, India",
    type: "Academic",
    highlights: [
      "Taught undergraduate courses in database management, algorithms, and programming.",
      "Developed curriculum materials and assessed student performance across multiple cohorts.",
      "Mentored final-year students on data-centric capstone projects.",
    ],
    tags: ["Teaching", "SQL", "Algorithms", "Database Management"],
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
    description:
      "Designed and built a production-grade GenAI pipeline enabling enterprises to assess ESG regulatory compliance gaps at scale. Leveraged Retrieval-Augmented Generation (RAG) with LLM semantic analysis to surface compliance risks across unstructured regulatory documents, replacing weeks of manual review with near-real-time insight.",
    highlights: [
      "RAG pipeline over regulatory corpora with LLM-powered semantic analysis",
      "Prompt engineering for structured compliance gap extraction",
      "Automated compliance scoring mapped to ESG reporting frameworks (GRI, SASB, TCFD)",
      "Reduced manual compliance review time by ~80%",
    ],
    tags: ["GenAI", "RAG", "LLM", "Python", "Prompt Engineering", "ESG"],
    accent: "#C27A5A",
  },
  {
    id: 2,
    title: "Gen-I",
    subtitle: "NLP Complaint Classifier",
    company: "Deloitte",
    role: "Lead Developer",
    description:
      "Led development of an NLP-powered complaint classification system for a major financial institution. Trained a fast.ai supervised deep learning model on historical complaint data, mapping outputs to the AFCA taxonomy for automated routing and regulatory reporting.",
    highlights: [
      "Supervised deep learning model using fast.ai / PyTorch ULMFiT",
      "Multi-class classification across AFCA complaint taxonomy",
      "High precision/recall with minimal labelled training data via transfer learning",
      "Automated downstream routing and regulatory report generation",
    ],
    tags: ["NLP", "fast.ai", "PyTorch", "Deep Learning", "Python", "AFCA"],
    accent: "#8C7B6E",
  },
  {
    id: 3,
    title: "Revenue Leakage Detection",
    subtitle: "Order-to-Cash Analytics Platform",
    company: "Pacific National",
    role: "Analytics Engineer – Function Lead",
    description:
      "Architected and delivered an end-to-end analytics platform to detect and quantify revenue leakage across the Order-to-Cash cycle. Integrated data from freight management, billing, and contracts systems into a unified dbt + Snowflake model, enabling commercial teams to act on previously invisible gaps.",
    highlights: [
      "End-to-end O2C data model in dbt (Data Vault 2.0 + mart layer)",
      "Automated anomaly detection for billing discrepancies and undercharges",
      "Executive Power BI dashboards with drill-through to transaction-level detail",
      "Identified and attributed significant recurring revenue leakage",
    ],
    tags: ["dbt", "Snowflake", "Power BI", "Python", "Azure", "Revenue Analytics"],
    accent: "#C27A5A",
  },
  {
    id: 4,
    title: "CBA Remediation Program",
    subtitle: "Regulatory Compliance Delivery",
    company: "Commonwealth Bank of Australia",
    role: "Senior Delivery Consultant (via Deloitte)",
    description:
      "Embedded as a senior delivery consultant within CBA's large-scale customer remediation program. Established QA frameworks, end-to-end data lineage tracking, and cross-functional governance processes to ensure regulatory compliance and audit readiness for affected customer populations.",
    highlights: [
      "Designed and implemented data quality and QA testing frameworks",
      "Built automated data lineage and traceability for regulatory audit trails",
      "Led cross-functional workstreams across engineering, compliance, and legal teams",
      "Delivered remediation milestones on time under regulatory deadline pressure",
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
    period: "2011 – 2015",
    location: "Mumbai, India",
    detail: "First Class Honours",
    highlights: [
      "First Class Honours.",
      "Core study in computer systems, algorithms, database engineering, and software development.",
      "Final year capstone project in data-driven system design.",
    ],
    tags: ["Mechanical Engineering", "Algorithms", "Database Systems", "Software Engineering"],
  },
];

export const leadership = [
  {
    title: "Analytics Engineering Function Lead",
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
    description: "Taught database systems and algorithms; developed curriculum and guided capstone projects.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
