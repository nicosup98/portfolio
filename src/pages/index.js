import Acomplishments from "../components/Acomplishments/Acomplishments";
import { BackgroundAnimation } from "../components/Animation/BackgrounAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { BackgrounAnimationLayout } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <BackgrounAnimationLayout>
          <BackgroundAnimation />
          <Hero />
        </BackgrounAnimationLayout>
      </Section>
      <Acomplishments />
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
