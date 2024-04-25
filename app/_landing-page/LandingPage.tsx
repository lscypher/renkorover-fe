import FeatureSection from './components/FeatureSection'
import FormSection from './components/FormSection'
import HomeSection from './components/HomeSection'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
      <HomeSection />
      <FeatureSection />
      <FormSection />
    </>
  )
}

export default LandingPage