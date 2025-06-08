import LinkButton from '@cui/components/button/link-button.tsx';
import { makeStyles } from '@griffel/react';
import GitHubIcon from '@/components/icons/github.tsx';
import LinkedInIcon from '@/components/icons/linkedin.tsx';
import config from '@/config.ts';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  rights: {
    fontSize: 'var(--gui-font-size-subtitle)',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <LinkButton href={config.github} icon={<GitHubIcon />} />
          </li>
          <li>
            <LinkButton href={config.linkedin} icon={<LinkedInIcon />} />
          </li>
        </ul>
      </nav>
      <span className={classes.rights}>
        &copy; {new Date().getFullYear()} GriffiDi. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
