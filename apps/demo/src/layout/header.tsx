import List from '@cui/components/list/list.tsx';
import NavListItem from '@cui/components/list/nav-list-item.tsx';
import { makeStyles } from '@griffel/react';
import GhostIcon from '@/components/icons/ghost';
import Profile from '@/components/profile/profile.tsx';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
  },

  nav: {
    display: 'flex',
    alignItems: 'center',

    '& ul': {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '0.3rem',
    },

    '& li': {
      margin: 0,
      padding: 0,
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <List type="navigation">
        <NavListItem href="/" icon={<GhostIcon />} />
      </List>
      <div>
        <Profile />
      </div>
    </header>
  );
};

export default Header;
