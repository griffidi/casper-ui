import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  progress: {
    width: '100%',
    height: '4px',
    backgroundColor: 'var(--color-slate-200)',
    borderRadius: '2px',
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    backgroundColor: 'var(--color-slate-800)',
    transition: 'width 0.3s ease-in-out',
  },

  progressLabel: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '12px',
    color: 'var(--color-slate-800)',
  },

  progressContainer: {
    position: 'relative',
    width: '100%',
    height: '4px',
  },
});

type ProgressBarProps = {
  progress: number;
};

/**
 * ProgressBar component.
 *
 * @param {number} progress - The progress percentage (0-100)
 * @returns {JSX.Element}
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const classes = useStyles();

  return (
    <div className={classes.progressContainer}>
      <div className={classes.progress}>
        <div className={classes.progressBar} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={classes.progressLabel}>{progress}%</div>
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
