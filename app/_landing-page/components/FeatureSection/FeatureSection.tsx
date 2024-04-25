import Container from "@/components/layout/Container"

import styles from './FeatureSection.module.scss'
type Props = {}

const FeatureSection = (props: Props) => {
  return (
    <Container className='section'>
      <Container className={styles.left}>
        Hello
      </Container>
      <Container className={styles.right}>
        World
      </Container>
    </Container>
  )
}

export default FeatureSection;