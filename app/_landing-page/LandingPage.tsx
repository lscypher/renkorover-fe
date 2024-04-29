import FeatureSection from './components/FeatureSection';
import FormSection from './components/FormSection';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PartnerSection from './components/PartnerSection';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <FeatureSection />
      <PartnerSection />
    </>
  );
};

export default LandingPage;
