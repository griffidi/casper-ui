import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes } from 'react';

const useStyles = makeStyles({
  button: {
    padding: '0.5rem 1rem',
    borderRadius: 'var(--cui-radius-md)',
    border: '2px solid var(--cui-color-primary)',
    backgroundColor: 'transparent',
    color: 'var(--cui-color-primary)',
    fontWeight: 'var(--cui-font-weight-semibold)',
    cursor: 'pointer',

    '&:hover': {
      border: '2px solid var(--cui-color-primary-darker)',
      color: 'var(--cui-color-primary-darker)',

      '& > span': {
        transform: 'scale(1.5)',
        transition: 'transform 0.2s ease',
      },
    },
  },
});
type OutlineButtonProps = {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & HTMLAttributes<HTMLButtonElement>;

const OutlineButton: FC<OutlineButtonProps> = ({ children, disabled, type, ...props }) => {
  const classes = useStyles();

  return (
    <button className={`${classes.button} cui-button`} disabled={disabled} type={type} {...props}>
      <span className="cui-outlinebutton-children">{children}</span>
    </button>
  );
};

export default OutlineButton;
