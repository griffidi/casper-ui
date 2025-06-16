import type { CssStyles } from '@cui/components/types/css.ts';

export default {
  container: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.3rem',
    padding: '2rem',
    margin: '0 auto',
    width: '300px',
    backgroundColor: 'var(--cui-color-secondary)',
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
} satisfies CssStyles;
