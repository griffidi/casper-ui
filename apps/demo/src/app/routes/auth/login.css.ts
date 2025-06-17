import type { CssStyles } from '@cui/components/types/css.ts';

export default {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateAreas: 'a b',
    height: '100%',
    justifyContent: 'flex-end',
    // '> div:first-child': {
    //   gridArea: 'a',
    //   alignSelf: 'center',
    // },

    // '> div:last-child': {
    //   gridArea: 'b',
    //   alignSelf: 'flex-end',
    // },
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.3rem',
    padding: '2rem',
    margin: '0 auto',
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
    color: 'var(--cui-color-primary)',
  },
} satisfies CssStyles;
