import type { CssStyles } from '@cui/components/types/css.ts';

export default {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateAreas: 'a b',
    gap: '7rem',
    height: '100%',
    justifyContent: 'flex-end',

    '> div:first-child': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },

    '> div:last-child': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.3rem',
    padding: '2rem',
    // margin: '0 auto',
    marginBottom: '130px',
    width: '300px',
    borderRadius: 'var(--cui-radius-2xl)',

    '> header': {
      fontSize: '3rem',
    },
  },

  input: {
    width: '100%',
  },

  actions: {
    '--cui-button-background-color': 'var(--cui-color-secondary)',

    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  title: {
    fontSize: '2rem',
    fontWeight: 'var(--cui-font-weight-bold)',
    color: 'var(--cui-color-primary)',
  },

  icon: {
    marginTop: '50px',

    '& #ghostSolidFillGradient': {
      '--cui-icon-ghost-solid-fill-start': 'var(--cui-color-primary-lighter)',
      '--cui-icon-ghost-solid-fill-end': 'var(--cui-color-primary-darker)',
    },
  },
} satisfies CssStyles;
