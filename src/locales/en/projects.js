const projects = [
  {
    date: "01/20 – 05/21",
    name: "Outpatient Cardiac Rehabilitation Closure and Home-Based Exercise Training in COVID-19",
    tags: ["Mixed-Methods Study"],
    description:
      "The COVID-19 lockdown disrupted group-based cardiac rehabilitation for 27 participants, reducing exercise capacity, motivation, and confidence during home training. Most stayed active, but many struggled to maintain previous levels and missed the structure, supervision, and social support of group sessions. The findings highlight the importance of guided exercise and the potential of a digital tool to support structured, personalized remote training.",
    publications: [
      {
        title: "Outpatient Cardiac Rehabilitation Closure and Home-Based Exercise Training During the First COVID-19 Lockdown in Austria: A Mixed-Methods Study",
        url: "https://doi.org/10.3389/fpsyg.2022.817912"
      }
    ]
  },
  {
    date: "06/20 – 01/21",
    name: "Design and Development of the aktivplan Prototype",
    tags: ["User-Centered Development"],
    description:
      "**aktiv**plan was originally developed as a digital tool to support adherence to prescribed physical exercise during cardiac rehabilitation. It was created through a user-centered design process and enables rehabilitation professionals and patients to collaboratively create, monitor, and review personalized activity plans, set meaningful goals, and track progress. This prototype laid the foundation for further research and development.",
    publications: [
      {
        title: "The Development of a Digital Tool for Planning Physical Exercise Training During Cardiac Rehabilitation",
        url: "https://doi.org/10.3233/SHTI220286"
      }
    ]
  },
  {
    date: "09/20 – 05/22",
    name: "General Data Protection Regulation (GDPR) Toolkit for Digital Health",
    tags: ["Toolkit Development", "Evaluation"],
    description:
      "The study developed a GDPR compliance toolkit for digital health applications to ensure the secure handling of sensitive health data. The toolkit was applied to **aktiv**plan, enabling the integration of GDPR requirements from the early design stage, including consent management, data encryption, user authentication, and clear visualization of collected health data.",
    publications: [
      {
        title: "General Data Protection Regulation (GDPR) Toolkit for Digital Health",
        url: "https://doi.org/10.3233/SHTI220066"
      }
    ]
  },
  {
    date: "01/21 – 09/21",
    name: "Technology as bridge between health professionals and patients",
    url: "https://eplus.uni-salzburg.at/obvusbhs/download/pdf/7315343?originalFilename=true",
    tags: ["Master Thesis", "Field Study"],
    description:
      "The master thesis examined how **aktiv**plan supports shared decision-making in cardiac rehabilitation. **aktiv**plan offered structure and transparency for planning and tracking activity, motivating patients and connecting clinic guidance with everyday exercise. However, the study showed that adding more built-in guidance could further strengthen collaborative goal-setting and personalized activity planning.",
    publications: [
      {
        title: "Investigating shared decision-making during the use of a digital health tool for physical activity planning in cardiac rehabilitation",
        url: "https://doi.org/10.3389/fdgth.2023.1324488"
      }
    ]
  },
  {
    date: "03/21 – 06/22",
    name: "miR4Heart Study",
    tags: ["Longitudinal Study"],
    description:
      "**aktiv**plan was used to plan and document physical activities in a study investigating how acute exercise affects miRNA expression in previously inactive healthy participants. The results showed that increased physical activity altered several exercise-responsive miRNAs toward a healthier, anti-inflammatory profile.",
    publications: [
      {
        title: "Response of miRNA expression to acute exercise changes significantly after four months of exercise training",
        url: "https://pure.pmu.ac.at/en/publications/response-of-mirna-expression-to-acute-exercise-changes-significan/"
      },
      {
        title: "Effects of structured exercise training on miRNA expression in previously sedentary individuals",
        url: "https://doi.org/10.1371/journal.pone.0314281"
      }
    ]
  },
  {
    date: "01/22 – 06/25",
    name: " Digital & Green Prevention and Rehabilitation",
    url: "https://dhp.lbg.ac.at/digigreen/?lang=en",
    tags: ["Field Study"],
    description:
      "The Digi:Green project investigated how combining digital tools and nature-based therapies could enhance prevention and rehabilitation in Salzburg’s alpine regions. **aktiv**plan was used to plan participants’ activities during their stay and after returning home, helping sustain health-promoting behaviors in everyday life.",
    publications: []
  },
  {
    date: "02/22 – 06/25",
    name: "Smart PA",
    url: "https://dhp.lbg.ac.at/smart-pa/?lang=en",
    tags: ["PhD Project"],
    description:
      "In the PhD project Smart PA, **aktiv**plan was used to examine the effects of specific reminders and implementation intentions. This approach provided valuable insights into strategies for supporting users and improving adherence to prescribed exercise plans over time.",
    publications: []
  },
  {
    date: "09/22 – 09/23",
    name: "Intervention Mapping for a Digital Health App",
    tags: ["Intervention Mapping"],
    description:
      "Using Intervention Mapping retrospectively, the study linked **aktiv**plan’s features—planning calendar, exercise videos, reminders, and health care professional feedback—to behavior change methods, personal determinants, and performance objectives, creating a logic model and acyclic behavior change diagram illustrating the intervention’s hypothesized mechanisms of action.",
    publications: [{
      title: "Making it transparent: A worked example of articulating programme theory for a digital health application using Intervention Mapping",
      url: "https://doi.org/10.1177/20552076241260974"
    }]
  },
  {
    date: "04/23 – 02/24",
    name: "Social activities online – integrating social elements in a digital health app to support a heart-healthy lifestyle",
    url: "https://dhp.lbg.ac.at/wp-content/uploads/sites/8/2024/09/Social-activities-online-integrating-social-elements-in-a-digital-health-app-to-support-a-heart-healthy-lifestyle.pdf",
    tags: ["Master Thesis", "Exploratory Study"],
    description:
      "This master’s thesis used **aktiv**plan as a case study to explore and design social features in digital health applications for individuals with cardiovascular disease. Through interviews, workshops, and prototype evaluation, the study identified needs for family involvement, peer support, and community connection.",
    publications: []
  },
  {
    date: "09/23 – 08/24",
    name: "ACTIVE-CaRe Pilot",
    url: "https://dhp.lbg.ac.at/projects-and-studies/?lang=en",
    tags: ["Clinical Pilot Study"],
    description:
      "The pilot study was conducted to prepare for a larger clinical trial aimed at medical device certification. Initial analyses reveal that, ten weeks after discharge from cardiac rehabilitation, 11 patients using **aktiv**plan achieved an average of 77 more heart-healthy exercise minutes per week than 16 patients not using **aktiv**plan.",
    publications: [
      {
        title: "Feasibility of the aktivplan digital health intervention for regular physical activity following phase II rehabilitation: Protocol for a mixed-method randomized controlled pilot study (ACTIVE-CaRe Pilot)",
        url: "https://doi.org/10.2196/73704"
      }]
  },
  {
    date: "09/23 – 05/24",
    name: "Digital Support for Shared Decision-Making in Exercise Prescription",
    tags: ["Comparative Study"],
    description:
      "This study compared a traditional paper-based plan with **aktiv**plan in 20 cardiac rehabilitation patients. **aktiv**plan enhanced shared decision-making and supported personalized exercise planning. It was preferred by 16 of 20 patients over paper-based plans. These results highlight its potential to improve exercise adherence and motivation.",
    publications: [{
      title: "Digitally supported shared decision-making for exercise prescription in the secondary prevention of cardiovascular disease",
      url: "https://doi.org/10.1093/eurjpc/zwaf236.362"
    }]
  },
  {
    date: "01/24 – 12/24",
    name: "Interactive Toolkit for Classifying Digital Health Applications",
    tags: ["Toolkit Development", "Evaluation"],
    description:
      "Within this project, an interactive WHO-based toolkit was developed to classify digital health interventions. **aktiv**plan was used to evaluate the toolkit. The evaluation demonstrated how **aktiv**plan supports self-monitoring, personalized activity tracking, and patient-clinician communication. Depending on its application, it was classified under \"Personal Health Tracking\" or \"Targeted Communication.\"",
    publications: [{
      title: "Interactive Toolkit for Classifying Digital Health Interventions, Services, and Applications Based on the WHO Framework",
      url: "https://doi.org/10.1007/s10916-025-02172-5"
    }]
  },
  {
    date: "11/24 – 04/27",
    name: "KlimaFIT Project",
    url: "https://dhp.lbg.ac.at/klimafit/?lang=en",
    tags: ["Feasibility Study", "Ongoing"],
    description:
      "**aktiv**plan plays a key role in the KlimaFIT project, where it is used to plan and promote heart-healthy physical activity, supporting climate-adapted fitness, heat resilience, and active mobility.",
    publications: []
  },
  {
    date: "05/25 – 04/27",
    name: "Prehab2Rehab Flagship Project",
    url: "https://prehab2rehab.at/",
    tags: ["Feasibility Study", "Ongoing"],
    description:
      "**aktiv**plan was a key enabler of the FFG-funded flagship project. The goal of the project is to provide integrated, digitally supported, and individually tailored care that sustainably strengthens both patients and the healthcare system.",
    publications: []
  }
];

export default projects;
