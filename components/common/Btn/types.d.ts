export type BtnShape = 'default' | 'circle' | 'round';

export type BtnHTMLType = 'submit' | 'button' | 'reset';

export type BtnSize = 'small' | 'medium' | 'large';

export type BtnColorTypes =
  | 'primary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export interface BaseBtnProps {
  icon?: React.ReactNode;
  size?: BtnSize;
  component?: React.ElementType;
  color?: BtnColorTypes;
  shape?: BtnShape;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  danger?: boolean;
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type'
>;

export interface ButtonProps extends BaseBtnProps, MergedHTMLAttributes {
  href?: string;
  htmlType?: BtnHTMLType;
}
