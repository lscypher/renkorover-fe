import Container from "@/components/layout/Container"

import styles from './FAQSection.module.scss'
type Props = {}

const FAQSection = (props: Props) => {
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

export default FAQSection;