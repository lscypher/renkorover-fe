const BtnTypes = ['default', 'primary', 'dashed', 'link', 'text'] as const;
type BtnType = (typeof BtnTypes)[number];

const BtnShapes = ['default', 'circle', 'round'] as const;
export type BtnShape = (typeof BtnShapes)[number];

const BtnHTMLTypes = ['submit', 'button', 'reset'] as const;
export type BtnHTMLType = (typeof BtnHTMLTypes)[number];

export interface BaseBtnProps {
    type?: BtnType;
    icon?: React.ReactNode;
    component?: React.ElementType; 
    shape?: BtnShape,
    disabled?: boolean,
    className?: string,
    children?: React.ReactNode,
    danger?: boolean,
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