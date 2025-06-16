import type { CssStyles } from '@cui/components/types/css.ts';

export default {
  container: {
    display: 'grid',
    placeItems: 'center',
    height: '100%',
    width: '100%',
  },

  fill: {
    position: 'absolute',
    inset: '0',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 'var(--cui-radius-2xl)',
  },
} satisfies CssStyles;
