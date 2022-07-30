import type { ReactChild, ReactChildren } from 'react';

export interface ComponentProps {
  className?: string;
  children?: ReactChild | ReactChild[] | ReactChildren;
}
