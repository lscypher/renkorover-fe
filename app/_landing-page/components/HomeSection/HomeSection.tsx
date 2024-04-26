'use client';
import { memo } from 'react';
import classNames from 'classnames';

import Btn from '@/components/common/Btn';
import Container from '@/components/layout/Container';
import Txt from '@/components/common/Txt';
import { HEADING, SUBHEADING, BTN_TXT } from './constant';

import styles from './HomeSection.module.scss';
import { useCallback } from 'react';

const HomeSection = () => {
  const handleStartClick = useCallback(() => {
    console.log('Hello World');
  }, []);

  return (
    <Container
      component='section'
      className={classNames('section', styles.container)}
    >
      <Container component='article' className={styles.article}>
        <Txt component='h1' bold className={styles.heading}>
          {HEADING}
          <Txt cursive className={styles.cursiveFont}>
            Autopilot
          </Txt>
        </Txt>
        <Txt size='l' className={styles.subHeading}>
          {SUBHEADING}
        </Txt>
      </Container>
      <Container component='footer' className={styles.footer}>
        <Btn shape='round' onClick={handleStartClick}>
          <Txt size='m' bold color='dark'>
            {BTN_TXT}
          </Txt>
        </Btn>
      </Container>
    </Container>
  );
};

export default memo(HomeSection);
