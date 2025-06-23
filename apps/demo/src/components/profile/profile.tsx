import IconButton from '@cui/components/button/icon-button.tsx';
import List from '@cui/components/list/list.tsx';
import NavListItem from '@cui/components/list/nav-list-item.tsx';
import { makeStyles } from '@griffel/react';
import { Person2Sharp } from '@mui/icons-material';
import { useId } from 'react';
import styles from './profile.css.ts';

const useStyles = makeStyles(styles);

const Profile = () => {
  const classes = useStyles();
  const menu = useId();

  return (
    <>
      <IconButton icon={<Person2Sharp />} popoverTarget={menu} />
      <menu id={menu} className={classes.menu} popover="auto">
        <List type="navigation">
          <NavListItem href="/profile" icon={<Person2Sharp />} label="Profile" />
          <NavListItem href="/settings" icon={<Person2Sharp />} label="Settings" />
          <NavListItem href="/logout" icon={<Person2Sharp />} label="Logout" />
        </List>
      </menu>
    </>
  );
};

export default Profile;
