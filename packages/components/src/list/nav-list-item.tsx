import { makeStyles } from '@griffel/react';
import type { HTMLAttributes, ReactNode } from 'react';
import LinkButton from '../button/link-button.tsx';

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    width: 'fit-content',
    fontSize: '1rem',
    color: 'var(--cui-color-text)',
    backgroundColor: 'var(--cui-color-background)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    '&:hover': {
      backgroundColor: 'var(--cui-color-hover)',
    },

    '&:active': {
      backgroundColor: 'var(--cui-color-active)',
    },

    '&:disabled': {
      backgroundColor: 'var(--cui-color-disabled)',
      cursor: 'not-allowed',
    },
  },
});

type NavListItemProps = {
  disabled?: boolean;
  href?: string;
  label?: string;
  icon?: ReactNode;
} & HTMLAttributes<HTMLLIElement>;

const NavListItem = ({ disabled, href, icon, label, ...props }: NavListItemProps) => {
  const classes = useStyles();

  return (
    <li className={classes.listItem} aria-disabled={disabled} {...props}>
      <LinkButton href={href} icon={icon} label={label} disabled={disabled} />
    </li>
  );
};

export default NavListItem;
export type { NavListItem };
