import { makeStyles } from '@griffel/react';
import type { FC, HTMLAttributes, ReactNode } from 'react';

const useStyles = makeStyles({
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'var(--cui-color-text)',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    '&:hover, &:hover svg': {
      color: 'var(--cui-color-primary)',
    },
  },

  disabled: {
    backgroundColor: 'var(--cui-color-disabled)',
    cursor: 'not-allowed',
  },

  label: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    color: 'var(--cui-color-text)',
    fontWeight: 'bold',
  },

  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    color: 'var(--cui-color-text)',
    marginRight: '0.5rem',
  },
});

type LinkButtonProps = {
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
  label?: string;
} & HTMLAttributes<HTMLAnchorElement>;

const LinkButton: FC<LinkButtonProps> = ({
  className,
  disabled,
  href = '#',
  icon,
  label,
  ...props
}) => {
  const classes = useStyles();

  return (
    <a className={`${classes.link} ${disabled ? classes.disabled : ''}`} href={href} {...props}>
      {icon && <span className={classes.icon}>{icon}</span>}
      {label && <span className={classes.label}>{label}</span>}
    </a>
  );
};

export default LinkButton;
