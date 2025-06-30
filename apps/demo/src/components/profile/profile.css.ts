import type { CssStyles } from '@cui/components/types/css.ts';

export default {
  popover: {
    contentVisibility: 'hidden',
    visibility: 'hidden',
    display: 'flex',
    transform: 'translateY(-10px)',
    willChange: 'transform',
    transition: 'transform 500ms ease-in-out, visibility 0ms linear 500ms',
    zIndex: 900,

    '&:popover-open': {
      contentVisibility: 'visible',
      visibility: 'visible',
      transition: 'transform 200ms ease-in-out, visibility 0ms linear 0ms',
    },
  },
} as CssStyles;
