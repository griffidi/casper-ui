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
    gap: '4rem',

    '& .cui-link-button': {
      fontSize: 'var(--cui-text-xl)',
      fontWeight: 'var(--cui-font-semibold)',
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <List align="horizontal" type="navigation">
          <NavListItem href="/" icon={<GhostIcon />} />
        </List>
        <List align="horizontal" type="navigation">
          <NavListItem href="/users" label="Users" />
          <NavListItem href="/customers" label="Customers" />
        </List>
      </div>
      <div>
        <Profile />
      </div>
    </header>
  );
};

export default Header;
