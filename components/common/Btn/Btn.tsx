import classNames from 'classnames';
import React from 'react';

import styles from './Btn.module.scss';

import { ButtonProps } from './types';

const Btn = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      component = 'button',
      type = 'deafult',
      shape = 'deafult',
      children,
      className = '',
      ...rest
    } = props;

    const classes = classNames(
        styles.btn,
        styles[type],
        styles[shape],
        {
          [className]: className
        }
    );

    return React.createElement(
      component,
      {
        ref,
        className: classes,
        ...rest,
      },
      children
    );
  }
);

Btn.displayName = 'Btn';

export default Btn;
