import { ComponentProps } from '@/types';

import { Button } from '@/components/atoms/Button';
import { Logo } from '@components/molecules/logo';

import { HomeTexts } from './constants';
import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomePageLayoutProps extends ComponentProps {
  // TODO
}

/**
 * @todo p 태그 atom으로 분리
 */
export default function HomePageLayout() {
  return (
    <main className={styles.main}>
      <Logo logoText={HomeTexts.logo} className={styles.logo} />

      <section className={styles.description}>
        <p>{HomeTexts.description}</p>
        <Button text={HomeTexts.button} className={styles.enterButton}></Button>
      </section>
    </main>
  );
}
