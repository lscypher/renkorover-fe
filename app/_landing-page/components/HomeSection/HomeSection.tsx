import Container from "@/components/layout/Container"

import styles from './HomeSection.module.scss'
type Props = {}

const HomeSection = (props: Props) => {
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

export default HomeSection