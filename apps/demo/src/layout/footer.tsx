import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  },

  rights: {
    fontSize: '0.875rem',
    color: '#666',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          <li>
            <a href="/privacy-policy" className="hover:underline">
              GitHub
            </a>
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
