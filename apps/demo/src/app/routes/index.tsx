import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  homeContainer: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',

    '> span': {
      fontSize: '7rem',
      fontWeight: 700,
      transition: 'transform 1s ease-in-out',
    },
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <span className="brand-text-color">ghost UI</span>
    </div>
  );
}
