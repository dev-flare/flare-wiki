import { ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button type="button" className={styles.defaultButton}>
      {children}
    </button>
  );
}
