import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  spinner: {
    border: '16px solid var(--gui-color-primary)',
    borderTop: '16px solid var(--gui-color-light-gray)',
    borderRadius: '50%',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    animationDuration: '2s',
    animationName: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  },
});

type ProgressSpinnerProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  animationDuration?: string;
};

/**
 * ProgressSpinner component.
 *
 * @param {number} size - The size of the spinner (default: 120)
 */
const ProgressSpinner: React.FC<ProgressSpinnerProps> = ({
  size = 120,
  strokeWidth = 6,
  color = 'var(--gui-color-primary)',
  backgroundColor = 'transparent',
  animationDuration = '2.5s',
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.spinner}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${strokeWidth}px`,
        borderColor: color,
        borderTopColor: backgroundColor,
        animationDuration: animationDuration,
      }}
    ></div>
  );
};

export default ProgressSpinner;
