import Image from 'next/image';

import Container from '@/components/layout/Container';
import Txt from '@/components/common/Txt';

import Partner1 from '/public/landing_page/partner1.svg';
import Partner2 from '/public/landing_page/partner2.svg';
import Partner3 from '/public/landing_page/partner3.svg';
import Partner4 from '/public/landing_page/partner4.svg';
import Partner5 from '/public/landing_page/partner5.svg';
import Partner6 from '/public/landing_page/partner6.svg';

import styles from './PartnerSection.module.scss';

const PARTNER_ICONS = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
];

const PartnerSection = () => {
  return (
    <Container className={styles.container}>
      <Container className={styles.left}>
        {PARTNER_ICONS.map((src, index) => (
          <Image src={src} alt={`${index}`} className={styles.partnerImage} />
        ))}
      </Container>
      <Container className={styles.right}>
        <Txt size='fourxl' bold>
          Trusted By
        </Txt>
      </Container>
    </Container>
  );
};

export default PartnerSection;
