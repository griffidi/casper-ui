import { makeStyles } from '@griffel/react';
import type { HTMLAttributes, ReactNode } from 'react';

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

type MenuButtonProps = {
  disabled?: boolean;
  icon?: ReactNode;
} & HTMLAttributes<HTMLElement>;

const MenuButton: React.FC<MenuButtonProps> = ({ children, className, disabled, ...props }) => {
  const classes = useStyles();

  return (
    <button className={`${classes.button} ${className}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default MenuButton;
