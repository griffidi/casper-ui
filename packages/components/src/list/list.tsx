import { makeStyles } from '@griffel/react';
import type { AriaRole, FC, HTMLAttributes } from 'react';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
});

type ListProps = {
  type: AriaRole;
} & HTMLAttributes<HTMLUListElement>;

const List: FC<ListProps> = ({ children, type = 'list', ...props }) => {
  const classes = useStyles();

  return (
    <ul role={type} className={classes.list} {...props}>
      {children}
    </ul>
  );
};

export default List;
