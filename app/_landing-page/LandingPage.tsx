import FeatureSection from './components/FeatureSection';
import FormSection from './components/FormSection';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <FeatureSection />
      <FormSection />
    </>
  );
};

export default LandingPage;
