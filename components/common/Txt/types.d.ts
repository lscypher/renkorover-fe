import { ElementType, Ref } from 'react';

export type SizeVariant =
  | 'xs'
  | 's'
  | 'xm'
  | 'm'
  | 'l'
  | 'xl'
  | 'twoxl'
  | 'threexl'
  | 'fourxl';

export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'dark';

export interface TxtProps {
  size?: SizeVariant;
  color?: ColorVariant;
  bold?: boolean;
  disabled?: boolean;
  noWrap?: boolean;
  cursive?: boolean;
  component?: ElementType;
  forwardedRef?: Ref<any>;
}
