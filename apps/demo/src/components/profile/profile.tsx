import IconButton from '@cui/components/button/icon-button.tsx';
import List from '@cui/components/list/list.tsx';
import NavListItem from '@cui/components/list/nav-list-item.tsx';
import { makeStyles } from '@griffel/react';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useId } from 'react';
import styles from './profile.css.ts';

const useStyles = makeStyles(styles);

const Profile = () => {
  const classes = useStyles();
  const menu = useId();

  return (
    <>
      <IconButton icon={<Person2Icon width={16} height={16} />} popoverTarget={menu} />
      <menu id={menu} className={classes.popover} popover="auto">
        <List type="navigation">
          <NavListItem href="/profile" icon={<VerifiedUserIcon />} label="Profile" />
          <NavListItem href="/settings" icon={<SettingsIcon />} label="Settings" />
          <NavListItem href="/logout" icon={<LogoutIcon />} label="Logout" />
        </List>
      </menu>
    </>
  );
};

export default Profile;
