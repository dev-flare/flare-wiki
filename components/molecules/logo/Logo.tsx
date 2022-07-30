import { ComponentProps } from '@/types';

import styles from './styles.module.scss';

interface LogoProps extends ComponentProps {
  logoText: string;
}

export default function Logo({ logoText, className = '' }: LogoProps) {
  return <h1 className={`${className} ${styles.logo}`}>{logoText}</h1>;
}
