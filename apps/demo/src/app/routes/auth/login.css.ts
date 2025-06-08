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
    margin: '0 auto',
    width: '300px',

    '> header': {
      fontSize: '3rem',
    },
  },

  input: {
    width: '100%',
  },

  actions: {
    '--gui-button-background-color': 'var(--gui-color-secondary)',

    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
} satisfies CssStyles;
