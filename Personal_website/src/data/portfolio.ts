export const portfolio = {
  person: {
    name: "Ramesh Khatri",
    headline: "Principal Software QA Engineer",
    location: "Lalitpur, Nepal",
    email: "ramesh.khatri1047@gmail.com",
    phone: "+977-9841404157",
    linkedin: "https://www.linkedin.com/in/ramesh-khatri-118062132",
    github: "https://github.com/ramesh-khatri",
    summary:
      "QA leader with 8+ years of experience across automation, manual testing, API validation, regression strategy, accessibility, and release-focused collaboration.",
    heroIntro:
      "I build maintainable quality systems that help teams release with confidence.",
    about:
      "My work spans test strategy, reusable automation frameworks, sprint-level quality ownership, and hands-on verification across web, mobile, and APIs. I focus on practical automation, dependable regression coverage, and the kind of QA process that helps teams move faster without lowering standards.",
  },
  highlights: [
    { value: "8+ years", label: "software QA experience" },
    { value: "Lead level", label: "mentoring, strategy, and delivery ownership" },
  ],
  experience: [
    {
      company: "Deerhold Ltd.",
      location: "Sifal, Kathmandu",
      roles: [
        {
          title: "Principal Software QA Engineer",
          period: "Jan 2025 - Present",
          points: [
            "Lead and mentor QA engineers across strategy, process, and day-to-day delivery.",
            "Contribute reusable UI and API automation framework improvements across projects.",
            "Drive in-sprint automation to support faster and higher-quality releases.",
            "Used Azure DevOps for automated test execution and smoother CI/CD validation workflows.",
          ],
        },
        {
          title: "Senior Software QA Engineer",
          period: "Aug 2022 - Dec 2024",
          points: [
            "Built and maintained automation frameworks for UI and API testing.",
            "Worked with cross-functional teams on test strategy, acceptance criteria, and sprint scope.",
            "Supported junior QA engineers through technical guidance and knowledge sharing.",
            "Executed regression testing that surfaced release-blocking defects early.",
          ],
        },
        {
          title: "Software QA Engineer",
          period: "Dec 2021 - Aug 2022",
          points: [
            "Developed and executed manual and automated UI tests with Selenium, Java, and Cucumber.",
            "Handled in-sprint ticket testing and automated regression execution.",
            "Partnered with developers and product owners to close test-coverage gaps.",
          ],
        },
      ],
    },
    {
      company: "Seva Development",
      location: "Sanepa, Lalitpur",
      roles: [
        {
          title: "Software Engineer - QA",
          period: "Dec 2020 - Dec 2021",
          points: [
            "Built and maintained UI automation with Taiko and Gauge.",
            "Created API automation coverage with Axios for backend integrations.",
            "Tested mobile-app sprint work and regression cycles for timely releases.",
            "Performed accessibility testing to improve usability and standards compliance.",
          ],
        },
      ],
    },
    {
      company: "Aayulogic Pvt. Ltd.",
      location: "New Baneshwor, Kathmandu",
      roles: [
        {
          title: "Business Quality Analyst",
          period: "Aug 2019 - Dec 2020",
          points: [
            "Worked with stakeholders to clarify requirements and define testable acceptance criteria.",
            "Translated business needs into user stories for backlog grooming, planning, and review cycles.",
            "Validated product behavior through manual and automated testing.",
          ],
        },
        {
          title: "Jr. QA/QC Engineer",
          period: "Aug 2018 - Aug 2019",
          points: [
            "Supported manual and automated coverage for functional, regression, and performance testing.",
            "Wrote detailed test cases from business requirements and product specifications.",
            "Performed security-focused validation to uncover vulnerabilities and risk areas.",
          ],
        },
        {
          title: "QA Intern/Trainee",
          period: "Feb 2018 - Aug 2018",
          points: [
            "Assisted with functional and regression test execution.",
            "Learned automation techniques under senior QA guidance.",
            "Worked within Agile sprint ceremonies and delivery routines.",
          ],
        },
      ],
    },
  ],
  skillGroups: [
    {
      title: "Automation",
      items: ["Selenium", "Cypress", "Playwright", "Cucumber", "Behave", "Rest Assured", "Taiko", "Gauge"],
    },
    {
      title: "Languages",
      items: ["Java", "JavaScript", "TypeScript", "Python", "Kotlin"],
    },
    {
      title: "Testing & Quality",
      items: ["Postman", "Burp Suite", "Apache JMeter", "SQL", "VoiceOver"],
    },
    {
      title: "Workflow",
      items: ["Git", "Jira", "Confluence", "Azure DevOps"],
    },
  ],
  projects: [
    {
      name: "Merojob.com",
      description: "Nepal's most popular job portal.",
    },
    {
      name: "Rojgari.com",
      description: "Job portal focused on blue-collar job seekers.",
    },
    {
      name: "RealHR Soft",
      description: "HR intelligence and workforce technology platform.",
    },
    {
      name: "CRM",
      description: "Client relationship management software.",
    },
    {
      name: "Deem",
      description: "Advanced travel management platform.",
    },
    {
      name: "Higi",
      description: "Consumer health engagement company.",
    },
  ],
  achievements: [
    "Led QA engineers while staying hands-on with tooling, execution, and framework design.",
    "Built reusable automation coverage for both UI and API testing workflows.",
    "Applied accessibility, security, regression, and API testing in production delivery environments.",
  ],
  education: [
    {
      institution: "Patan Multiple Campus",
      location: "Patan Dhoka, Lalitpur",
      degree: "Master's Degree in Information Technology",
      period: "2025 - Present",
    },
    {
      institution: "Kantipur Engineering College",
      location: "Dhapakhel, Lalitpur",
      degree: "Bachelor's Degree in Computer Engineering",
      period: "2013 - 2017",
    },
  ],
  siteStructure: [
    "Hero",
    "About",
    "Experience",
    "Skills",
    "Achievements & Projects",
    "Education",
    "Contact",
  ],
} as const;

export type PortfolioData = typeof portfolio;
