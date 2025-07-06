import IconButton from '@cui/components/button/icon-button.tsx';
import List from '@cui/components/list/list.tsx';
import NavListItem from '@cui/components/list/nav-list-item.tsx';
import { makeStyles } from '@griffel/react';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2Outlined';
import SettingsIcon from '@mui/icons-material/Settings';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useContext, useId } from 'react';
import { useNavigate } from 'react-router';
import { signout } from '@/auth/auth.ts';
import { AuthContext } from '@/auth/auth-context.tsx';
import styles from './profile.css.ts';

const useStyles = makeStyles(styles);

/**
 * Profile component renders a user profile menu with options to view the profile,
 * settings, and logout.
 */
const Profile = () => {
  const classes = useStyles();
  const menu = useId();
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handler for signing out the user
  // It will call the signOut function and navigate to the logout page on success.
  // If signOut fails, it will not navigate.
  const signOutHandler = async () => {
    const success = await signout();

    if (!success) return;

    return navigate('/logout');
  };

  return (
    <>
      <IconButton icon={<Person2Icon width={16} height={16} />} popoverTarget={menu} />
      <menu id={menu} className={classes.popover} popover="auto">
        <List type="navigation">
          <NavListItem href={`/users/${userId}`} icon={<VerifiedUserIcon />} label="Profile" />
          <NavListItem
            href={`/users/${userId}/settings`}
            icon={<SettingsIcon />}
            label="Settings"
          />
          <NavListItem href="#" icon={<LogoutIcon />} label="Logout" onClick={signOutHandler} />
        </List>
      </menu>
    </>
  );
};

export default Profile;
