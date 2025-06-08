import { makeStyles } from '@griffel/react';
import type { HTMLAttributes } from 'react';

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    width: 'fit-content',
    fontSize: '1rem',
    color: 'var(--gui-color-text)',
    backgroundColor: 'var(--gui-color-background)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    '&:hover': {
      backgroundColor: 'var(--gui-color-hover)',
    },

    '&:active': {
      backgroundColor: 'var(--gui-color-active)',
    },

    '&:disabled': {
      backgroundColor: 'var(--gui-color-disabled)',
      cursor: 'not-allowed',
    },
  },
});

type ListItemProps = {
  disabled?: boolean;
  label?: string;
} & HTMLAttributes<HTMLLIElement>;

const ListItem = ({ disabled, label, ...props }: ListItemProps) => {
  const classes = useStyles();

  return (
    <li className={classes.listItem} aria-disabled={disabled} {...props}>
      {label}
    </li>
  );
};

export default ListItem;
export type { ListItem };
