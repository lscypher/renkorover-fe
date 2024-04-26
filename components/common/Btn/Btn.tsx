import classNames from 'classnames';
import React from 'react';

import styles from './Btn.module.scss';

import { ButtonProps } from './types';

const Btn = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    children,
    className = '',
    color = 'primary',
    shape = 'deafult',
    size = 'small',
    component: Component = 'button',
    ...rest
  } = props;

  const classes = classNames(
    styles.btn,
    styles[color],
    styles[shape],
    styles[size],
    {
      [className]: className,
    },
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
});

Btn.displayName = 'Btn';

export default Btn;
