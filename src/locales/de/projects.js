const projects = [
  {
    date: "01/20 – 05/21",
    name: "Schließung ambulanter Herzrehabilitation und Heimtraining während COVID-19",
    tags: ["Mixed-Methods-Studie"],
    description:
      "Der COVID-19-Lockdown führte zu einer Unterbrechung der gruppenbasierten Herzrehabilitation für 27 Teilnehmer:innen. In der Folge nahmen Trainingskapazität, Motivation und Vertrauen in das eigenständige Heimtraining ab. Zwar blieben die meisten körperlich aktiv, vielen fiel es jedoch schwer, das zuvor erreichte Trainingsniveau aufrechtzuerhalten. Zudem wurden die fehlende Struktur, fachliche Betreuung und soziale Unterstützung der Gruppensitzungen deutlich vermisst. Die Ergebnisse verdeutlichen die zentrale Bedeutung angeleiteter Trainingsprogramme und weisen zugleich auf das Potenzial digitaler Lösungen hin, um ein strukturiertes und personalisiertes Training auch aus der Ferne zu ermöglichen.",
    publications: [
      {
        title: "Outpatient Cardiac Rehabilitation Closure and Home-Based Exercise Training During the First COVID-19 Lockdown in Austria: A Mixed-Methods Study",
        url: "https://doi.org/10.3389/fpsyg.2022.817912"
      }
    ]
  },
  {
    date: "06/20 – 01/21",
    name: "Design und Entwicklung des aktivplan-Prototyps",
    tags: ["Nutzerzentrierte Entwicklung"],
    description:
      "**aktiv**planwurde ursprünglich als digitale Anwendung konzipiert, um die Adhärenz zu verordneten körperlichen Aktivitäten im Rahmen der Herzrehabilitation zu fördern. Die Entwicklung erfolgte im Rahmen eines nutzerzentrierten Designprozesses. Die Anwendung ermöglicht es Rehabilitationsfachkräften und Patient:innen, gemeinsam personalisierte Aktivitätspläne zu erstellen, zu überwachen und zu reflektieren, realistische und sinnvolle Ziele zu definieren sowie den individuellen Fortschritt nachzuverfolgen. Dieser Prototyp bildete die Grundlage für weiterführende Forschung und Entwicklung.",
    publications: [
      {
        title: "The Development of a Digital Tool for Planning Physical Exercise Training During Cardiac Rehabilitation",
        url: "https://doi.org/10.3233/SHTI220286"
      }
    ]
  },
  {
    date: "09/20 – 05/22",
    name: "DSGVO-Toolkit für digitale Gesundheit",
    tags: ["Toolkit-Entwicklung", "Evaluation"],
    description:
      "Die Studie entwickelte ein DSGVO-Compliance-Toolkit für digitale Gesundheitsanwendungen, das den sicheren und rechtskonformen Umgang mit sensiblen Gesundheitsdaten unterstützt. Das Toolkit wurde auf **aktiv**plan angewendet und ermöglichte die systematische Integration von DSGVO-Anforderungen bereits in einer frühen Designphase. Dazu zählten unter anderem ein strukturiertes Einwilligungsmanagement, Maßnahmen zur Datenverschlüsselung, eine sichere Benutzer:innen-Authentifizierung sowie eine transparente und verständliche Visualisierung der erhobenen Gesundheitsdaten.",
    publications: [
      {
        title: "General Data Protection Regulation (GDPR) Toolkit for Digital Health",
        url: "https://doi.org/10.3233/SHTI220066"
      }
    ]
  },
  {
    date: "01/21 – 09/21",
    name: "Technologie als Brücke zwischen Fachkräften und Patient:innen",
    url: "https://eplus.uni-salzburg.at/obvusbhs/download/pdf/7315343?originalFilename=true",
    tags: ["Masterarbeit", "Feldstudie"],
    description:
      "Die Masterarbeit untersuchte, wie **aktiv**plan die gemeinsame Entscheidungsfindung in der Herzrehabilitation unterstützt. **aktiv**plan bot Struktur und Transparenz bei der Planung und Dokumentation von Aktivitäten, motivierte die Patient:innen und verband professionelle Anleitung mit dem täglichen Training. Die Studie zeigte jedoch, dass mehr integrierte Anleitung die kollaborative Zielsetzung und personalisierte Trainingsplanung weiter stärken könnte.",
    publications: [
      {
        title: "Investigating shared decision-making during the use of a digital health tool for physical activity planning in cardiac rehabilitation",
        url: "https://doi.org/10.3389/fdgth.2023.1324488"
      }
    ]
  },
  {
    date: "03/21 – 06/22",
    name: "miR4Heart-Studie",
    tags: ["Längsschnittstudie"],
    description:
      "In der Studie wurde untersucht, wie akute körperliche Belastung die Aktivität von miRNAs bei zuvor inaktiven gesunden Teilnehmer:innen beeinflusst. Dabei wurde **aktiv**plan genutzt, um die körperlichen Aktivitäten zu planen und zu dokumentieren. Die Ergebnisse zeigten, dass erhöhte körperliche Aktivität mehrere trainingsresponsible miRNAs in ein gesünderes, entzündungshemmendes Profil veränderte.",
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
    name: "Digitale & grüne Prävention und Rehabilitation",
    url: "https://dhp.lbg.ac.at/digigreen/",
    tags: ["Feldstudie"],
    description:
      "Das Digi:Green-Projekt untersuchte, wie die Kombination digitaler Tools und naturbasierter Therapien Prävention und Rehabilitation in den alpinen Regionen Salzburgs verbessern kann. **aktiv**plan wurde genutzt, um die Aktivitäten der Teilnehmer:innen während des Aufenthalts und nach der Rückkehr nach Hause zu planen und so gesundheitsfördernde Verhaltensweisen im Alltag aufrechtzuerhalten.",
    publications: []
  },
  {
    date: "02/22 – 06/25",
    name: "Smart PA",
    url: "https://dhp.lbg.ac.at/smart-pa/",
    tags: ["Doktoratsprojekt"],
    description:
      "Im Doktoratsprojekt Smart PA wurde **aktiv**plan genutzt, um die Effekte spezifischer Erinnerungen und Implementierungsintentionen zu untersuchen. Dieser Ansatz lieferte wertvolle Einblicke in Strategien zur Unterstützung der Nutzer:innen und zur Verbesserung der Einhaltung verschriebener Trainingspläne über die Zeit.",
    publications: []
  },
  {
    date: "09/22 – 09/23",
    name: "Intervention Mapping für eine digitale Gesundheits-App",
    tags: ["Intervention Mapping"],
    description:
      "Mittels Intervention Mapping wurde retrospektiv untersucht, wie die Funktionen von **aktiv**plan – Planungskalender, Trainingsvideos, Erinnerungen und Feedback von Gesundheitsfachkräften – mit Methoden zur Verhaltensänderung, persönlichen Determinanten und Leistungszielen verknüpft sind. Dabei entstand ein Logikmodell und ein azyklisches Diagramm zur Verhaltensänderung, das die hypothetischen Wirkmechanismen der Intervention darstellt.",
    publications: [{
      title: "Making it transparent: A worked example of articulating programme theory for a digital health application using Intervention Mapping",
      url: "https://doi.org/10.1177/20552076241260974"
    }]
  },
  {
    date: "04/23 – 02/24",
    name: "Soziale Aktivitäten online – Integration sozialer Elemente in einer digitalen Gesundheits-App zur Unterstützung eines herzgesunden Lebensstils",
    url: "https://dhp.lbg.ac.at/wp-content/uploads/sites/8/2024/09/Social-activities-online-integrating-social-elements-in-a-digital-health-app-to-support-a-heart-healthy-lifestyle.pdf",
    tags: ["Masterarbeit", "Explorative Studie"],
    description:
      "Diese Masterarbeit nutzte **aktiv**plan als Fallstudie, um soziale Funktionen in digitalen Gesundheitsanwendungen für Menschen mit Herz-Kreislauf-Erkrankungen zu explorieren und zu gestalten. Durch Interviews, Workshops und Prototypen-Evaluierung wurden Bedürfnisse nach Familienbeteiligung, Unterstützung durch Gleichgesinnte und Vernetzung in der Gemeinschaft identifiziert.",
    publications: []
  },
  {
    date: "09/23 – 08/24",
    name: "ACTIVE-CaRe Pilot",
    url: "https://dhp.lbg.ac.at/projects-and-studies/",
    tags: ["Klinische Pilotstudie"],
    description:
      "Die Pilotstudie wurde durchgeführt, um eine größere klinische Studie zur Medizinprodukt-Zertifizierung vorzubereiten. Erste Analysen zeigen, dass die 11 **aktiv**plan-Nutzer:innen zehn Wochen nach der Entlassung aus der Herzrehabilitation innerhalb eines einwöchigen Messzeitraums im Durchschnitt 18% mehr herzgesunde Bewegung erreichten als 16 Patient:innen, die **aktiv**plan nicht nutzten.",
    publications: [
      {
        title: "Feasibility of the aktivplan digital health intervention for regular physical activity following phase II rehabilitation: Protocol for a mixed-method randomized controlled pilot study (ACTIVE-CaRe Pilot)",
        url: "https://doi.org/10.2196/73704"
      }]
  },
  {
    date: "09/23 – 05/24",
    name: "Digitale Unterstützung für Shared Decision-Making bei Bewegungsempfehlungen",
    tags: ["Vergleichsstudie"],
    description:
      "Die Studie verglich bei 20 Herzrehabilitations-Patient:innen die Nutzung eines papierbasierten Plans mit **aktiv**plan. **aktiv**plan verbesserte die gemeinsame Entscheidungsfindung und unterstützte personalisierte Trainingsplanung. 16 von 20 Patient:innen bevorzugten **aktiv**plan gegenüber Papierplänen. Die Ergebnisse zeigen das Potenzial von **aktiv**plan zur Verbesserung der Trainingsadhärenz und Motivation.",
    publications: [{
      title: "Digitally supported shared decision-making for exercise prescription in the secondary prevention of cardiovascular disease",
      url: "https://doi.org/10.1093/eurjpc/zwaf236.362"
    }]
  },
  {
    date: "01/24 – 12/24",
    name: "Interaktives Toolkit zur Klassifizierung digitaler Gesundheitsanwendungen",
    tags: ["Toolkit-Entwicklung", "Evaluation"],
    description:
      "Im Rahmen dieses Projekts wurde ein interaktives, auf WHO-Richtlinien basierendes Toolkit zur Klassifizierung digitaler Gesundheitsinterventionen entwickelt. **aktiv**plan wurde genutzt, um das Toolkit zu evaluieren. Die Evaluation zeigte, wie **aktiv**plan Selbstüberwachung, personalisierte Aktivitätserfassung und die Kommunikation zwischen Patient:innen und Fachkräften unterstützt. Je nach Nutzung wurde es unter „Persönliches Gesundheits-Tracking“ oder „Gezielte Kommunikation“ eingeordnet.",
    publications: [{
      title: "Interactive Toolkit for Classifying Digital Health Interventions, Services, and Applications Based on the WHO Framework",
      url: "https://doi.org/10.1007/s10916-025-02172-5"
    }]
  },
  {
    date: "11/24 – 04/27",
    name: "KlimaFIT-Projekt",
    url: "https://dhp.lbg.ac.at/klimafit/",
    tags: ["Machbarkeitsstudie", "Laufend"],
    description:
      "**aktiv**plan spielt eine Schlüsselrolle im KlimaFIT-Projekt. Es wird genutzt, um herzgesunde körperliche Aktivität zu planen und zu fördern und so klimaangepasste Fitness, Hitzetoleranz und aktive Mobilität zu unterstützen.",
    publications: []
  },
  {
    date: "05/25 – 04/27",
    name: "Prehab2Rehab-Leuchtturmprojekt",
    url: "https://prehab2rehab.at/",
    tags: ["Machbarkeitsstudie", "Laufend"],
    description:
      "**aktiv**plan war ein zentraler Enabler für das von der FFG geförderte Leuchtturmprojekt. Ziel des Projekts ist es, eine integrierte, digital unterstützte und individuell ausgerichtete Versorgung zu gestalten, die sowohl Patient:innen als auch das Gesundheitssystem nachhaltig stärkt.",
    publications: []
  }
];

export default projects;
