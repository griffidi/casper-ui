import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes } from 'react';

const useStyles = makeStyles({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    '&:hover': {
      // backgroundColor: '#0056b3',
      backgroundColor: 'var(--cui-color-primary-darker)',
      color: 'var(--cui-color-primary-darker)',
      // WebkitBackgroundClip: 'text',
      // WebkitTextFillColor: 'transparent',
      // backgroundColor: 'var(--cui-color-gradient-primary)',
      // color: 'var(--cui-color-gradient-primary)',
    },

    '&:disabled': {
      backgroundColor: '#6c757d',
      cursor: 'not-allowed',
    },
  },
});

type ButtonProps = {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, disabled, type = 'button', ...props }) => {
  const classes = useStyles();

  return (
    <button type={type} className={classes.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
