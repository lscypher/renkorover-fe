import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Txt.module.scss';

import { TxtProps } from './types';

type Props = TxtProps & HtmlHTMLAttributes<HTMLParagraphElement>;

const Txt: FunctionComponent<Props> = (props) => {
  const {
    children,
    size = 's',
    color = 'primary',
    noWrap = false,
    bold = false,
    cursive,
    className,
    component: Component = 'span',
    ...rest
  } = props;

  const classes = classNames(
    styles.txt,
    styles[size],
    styles[color],
    {
      [styles.bold]: bold,
      [styles.noWrap]: noWrap,
      [styles.cursive]: cursive,
    },
    className,
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

Txt.displayName = 'Txt';

export default Txt;
