
import impressumMD from './impressum.md?raw'
import privacyPolicyMD from './privacyPolicy.md?raw'
import aboutMD from './about.md?raw';
import about2MD from './about2.md?raw';
import backgroundMD from './background.md?raw';
import benefitsMD from './benefits.md?raw';
import nextStepsMD from './nextSteps.md?raw';
import projectsJS from './projects.js';
import evidenceMD from './evidence.md?raw';

const en = {
  menu: {
    about: "About aktivplan",
    background: "Background",
    evidence: "Evidence",
    benefits: "Benefits",
    nextSteps: "Next Steps",
    contact: "Contact"
  },
  about: {
    slogan: "aktivplan: towards bridging professional guidance and everyday life.",
    keywords: "Plan. Move. Improve.",
    desc: aboutMD,
    desc2: about2MD,
    screenshots: [
      {
        img: "/about-images/1-screen.jpg",
        text: "Individual training plan"
      },
      {
        img: "/about-images/2-screen.jpg",
        text: "Motivational messages"
      },
      {
        img: "/about-images/3-screen.jpg",
        text: "Progress over time"
      },
      {
        img: "/about-images/4-screen.jpg",
        text: "Supportive training videos"
      }
    ]
  },
  background: backgroundMD,
  evidence: { desc: evidenceMD, projects: projectsJS, publications: "Publication(s):" },
  benefits: { h1: "Benefits and Economic Value", desc: benefitsMD },
  nextSteps: { h1: "Next Steps", desc: nextStepsMD },
  contact: {
    heading: "Contact",
    description: "If you have any questions or comments, or would like to receive more information about **aktiv**plan, please feel free to contact us at any time.",
    subheading: "Ludwig Boltzmann Institute for Digital Health and Prevention",
    address: "Lindhofstr. 22, 5020 Salzburg, Austria",
    phone: "Phone",
    email: "Email",
  },
  impressum: impressumMD,
  privacyPolicy: privacyPolicyMD,
  footer: {
    impressum: "Impressum",
    privacy: "Privacy Policy"
  }
};

export default en;