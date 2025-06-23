import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes, ReactNode } from 'react';

const useStyles = makeStyles({
  button: {
    display: 'flex',
    alignItems: 'center',
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
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IconButtonProps> = ({
  className,
  type = 'button',
  disabled,
  icon,
  ...props
}) => {
  const classes = useStyles();

  return (
    <button className={`${classes.button} ${className}`} type={type} disabled={disabled} {...props}>
      <span className={classes.icon}>{icon}</span>
    </button>
  );
};

export default IconButton;
