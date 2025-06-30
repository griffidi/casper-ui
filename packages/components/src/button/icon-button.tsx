import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes, ReactNode } from 'react';

const useStyles = makeStyles({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    padding: '16px',
  },

  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.5rem',
    height: '1.5rem',
    fontSize: '1.25rem',
    color: 'var(--cui-color-text)',
  },
});

type IconButtonProps = {
  icon: ReactNode;
  disabled?: boolean;
  strokeWidth?: number;
  type?: 'button' | 'submit' | 'reset';
} & HTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IconButtonProps> = ({
  className,
  icon,
  disabled,
  strokeWidth = 0,
  type = 'button',
  ...props
}) => {
  const classes = useStyles();
  const border = strokeWidth > 0 ? `${strokeWidth}px solid var(--cui-color-text)` : 'none';

  return (
    <button
      className={`${classes.button} ${className}`}
      type={type}
      disabled={disabled}
      style={{ border }}
      {...props}
    >
      <span className={classes.icon}>{icon}</span>
    </button>
  );
};

export default IconButton;
