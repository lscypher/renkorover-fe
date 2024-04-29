import classNames from 'classnames';
import Image from 'next/image';

import Container from '@/components/layout/Container';
import Txt from '@/components/common/Txt';

import { FEATURES, TOP_HEADING, TOP_SUB_HEADING } from './constant';

import styles from './FeatureSection.module.scss';

const FeatureSection = () => {
  return (
    <Container
      component='section'
      className={classNames('section', styles.container)}
    >
      <Container className={styles.top}>
        <Txt bold className={styles.topHeading}>
          {TOP_HEADING}
          <Txt cursive className={styles.topCursive}>
            AI-Powered
          </Txt>
          Workspace
        </Txt>
        <Txt size='l' className={styles.topSubHeading}>
          {TOP_SUB_HEADING}
        </Txt>
      </Container>
      <Container className={styles.bottom}>
        <Container className={styles.featuresContainer}>
          {FEATURES.map(({ heading, content, icon }, index) => {
            return (
              <Container className={styles.featureContainer} key={index}>
                <Container className={styles.featureIcon}>
                  <Image src={icon} alt={`${index}`} height={50} />
                </Container>
                <Txt size='l' className={styles.featureHeading}>
                  {heading}
                </Txt>
                <Txt size='m' className={styles.featureContent}>
                  {content}
                </Txt>
              </Container>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
};

export default FeatureSection;
