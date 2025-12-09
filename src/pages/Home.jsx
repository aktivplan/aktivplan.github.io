import About from '../sections/About/About';
import Background from '../sections/Background/Background';
import Header from '../sections/Header/Header';
import Benefits from '../sections/Benefits/Benefits';
import NextSteps from '../sections/NextSteps/NextSteps';
import Evidence from '../sections/Evidence/Evidence';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Background />
      <Evidence />
      <Benefits />
      <NextSteps />
    </>
  );
}