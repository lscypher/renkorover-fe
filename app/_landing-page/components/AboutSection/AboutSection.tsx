import Image from 'next/image';
import Container from '@/components/layout/Container';
import Btn from '@/components/common/Btn';

import classNames from 'classnames';

import styles from './AboutSection.module.scss';
import Txt from '@/components/common/Txt';

import { RIGHT_SECTION_HEADING, RIGHT_SECTION_CONTENT } from './constant';
type Props = {};

const AboutSection = (props: Props) => {
  return (
    <Container
      component='section'
      className={classNames('section', styles.container)}
    >
      <Container className={styles.left}>
        <Image
          fill
          src='/landing_page/aboutAppMockup.svg'
          alt='phoneMockup'
        ></Image>
      </Container>
      <Container className={styles.right}>
        <Container className={styles.rightArticle}>
          <Txt cursive className={styles.rightHeading}>
            {RIGHT_SECTION_HEADING}
          </Txt>
          <Txt size='l'>{RIGHT_SECTION_CONTENT}</Txt>
        </Container>
        <Btn shape='round' color='secondary' className={styles.rightBtn}>
          See How{' '}
        </Btn>
      </Container>
    </Container>
  );
};

export default AboutSection;
