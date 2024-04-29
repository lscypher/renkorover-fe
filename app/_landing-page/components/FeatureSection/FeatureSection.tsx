import classNames from 'classnames';

import Container from '@/components/layout/Container';
import Txt from '@/components/common/Txt';

import { TOP_HEADING, TOP_SUB_HEADING } from './constant';

import styles from './FeatureSection.module.scss';

const FeatureSection = () => {
  return (
    <Container className={classNames('section', styles.container)}>
      <Container className={styles.top}>
        <Txt color='dark' bold className={styles.topHeading}>
          {TOP_HEADING}
          <Txt color='dark' cursive className={styles.topCursive}>
            AI-Powered
          </Txt>
          Workspace
        </Txt>
        <Txt color='dark' size='l' className={styles.topSubHeading}>
          {TOP_SUB_HEADING}
        </Txt>
      </Container>
      <Container className={styles.bottom}>World</Container>
    </Container>
  );
};

export default FeatureSection;
