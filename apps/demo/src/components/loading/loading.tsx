import ProgressSpinner from '@cui/components/progress-spinner/progress-spinner.tsx';
import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes } from 'react';
import styles from './loading.css.ts';

const useStyles = makeStyles(styles);

const Loading: FC<HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} {...props}>
      <ProgressSpinner />
    </div>
  );
};

export default Loading;
