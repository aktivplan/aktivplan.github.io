
import impressumMD from './impressum.md?raw'
import privacyPolicyMD from './privacyPolicy.md?raw'
import aboutMD from './about.md?raw';
import about2MD from './about2.md?raw';
import backgroundMD from './background.md?raw';
import benefitsMD from './benefits.md?raw';
import nextStepsMD from './nextSteps.md?raw';
import projectsJS from './projects.js';
import evidenceMD from './evidence.md?raw';

const de = {
  menu: {
    about: "Über aktivplan",
    background: "Hintergrund",
    evidence: "Evidenz",
    benefits: "Mehrwert",
    nextSteps: "Nächste Schritte",
    contact: "Kontakt"
  },
  about: {
    slogan: "aktivplan: eine Brücke zwischen professioneller Unterstützung und Alltag schlagen.",
    keywords: "Planen. Bewegen. Verbesseren.",
    desc: aboutMD,
    desc2: about2MD,
    screenshots: [
      {
        img: "/about-images/1-screen.jpg",
        text: "Individueller Trainingsplan"
      },
      {
        img: "/about-images/2-screen.jpg",
        text: "Motivierende Nachrichten"
      },
      {
        img: "/about-images/3-screen.jpg",
        text: "Fortschritte im Laufe der Zeit"
      },
      {
        img: "/about-images/4-screen.jpg",
        text: "Unterstützende Trainingsvideos"
      }
    ]
  },
  background: { desc: backgroundMD, lead: 'Projektleitung', support: 'Unterstützt durch' },
  evidence: { desc: evidenceMD, projects: projectsJS, publications: "Publikation(en):" },
  benefits: { h1: "Mehrwert und wirtschaftlicher Nutzen", desc: benefitsMD },
  nextSteps: { h1: "Nächste Schritte", desc: nextStepsMD },
  contact: {
    heading: "Kontakt",
    description: "Wenn Sie Fragen oder Anmerkungen haben oder mehr Informationen über die Verwendung von aktivplan erhalten möchten, können Sie sich jederzeit gerne an uns wenden.",
    subheading: "Ludwig Boltzmann Institut für Digitale Gesundheit und Prävention",
    address: "Lindhofstr. 22, 5020 Salzburg, Österreich",
    phone: "Telefon",
    email: "E-Mail",
    github: "Finden Sie die quelloffen verfügbare Implementierung auf",
  },
  impressum: impressumMD,
  privacyPolicy: privacyPolicyMD,
  footer: {
    impressum: "Impressum",
    privacy: "Datenschutzerklärung"
  }
};

export default de;