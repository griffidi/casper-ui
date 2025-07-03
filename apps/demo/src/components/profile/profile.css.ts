import type { CssStyles } from '@cui/components/types/css.ts';

export default {
  popover: {
    '--_inset-block-start': 'calc(var(--app-header-height) / 2)',

    contentVisibility: 'hidden',
    visibility: 'hidden',
    display: 'flex',
    inset: '2px 20px auto auto',
    backgroundColor: 'var(--cui-color-background-level-2)',
    border: '1px solid var(--cui-color-border)',
    borderRadius: 'var(--cui-radius-lg)',
    boxShadow: 'var(--cui-shadow-lg)',
    padding: 0,
    transform: 'translateY(var(--_inset-block-start))',
    willChange: 'transform',
    transition: 'transform 500ms ease-in-out, visibility 0ms linear 500ms',
    zIndex: 900,

    '&:popover-open': {
      '--_inset-block-start': 'calc(var(--app-header-height) - 0.8rem)',

      contentVisibility: 'visible',
      visibility: 'visible',
      transition: 'transform 200ms ease-in-out, visibility 0ms linear 0ms',
    },
  },
} as CssStyles;
