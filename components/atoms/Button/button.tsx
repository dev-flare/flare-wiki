import { ComponentProps } from '@/types';

import styles from './styles.module.scss';

interface ButtonProps extends ComponentProps {
  text: string;
}

export default function Button({ text, className = '' }: ButtonProps) {
  return (
    <button
      type="button"
      className={[className, styles.defaultButton].join(' ')}
    >
      {text}
    </button>
  );
}
