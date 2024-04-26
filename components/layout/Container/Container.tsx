import classNames from 'classnames';

import styles from './Container.module.scss';

import { ContainerProps } from './types'; // Importing types from .d.ts file

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  component: Component = 'div',
}) => {
  const classes = classNames(styles.container, {
    [className]: className,
  });

  return <Component className={classes}>{children}</Component>;
};

Container.displayName = 'Container';

export default Container;
