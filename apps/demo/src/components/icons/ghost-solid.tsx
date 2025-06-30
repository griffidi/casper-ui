import type { FC } from 'react';
import type { IconProps } from './icon-props.ts';

type GhostSolidProps = {} & IconProps;

const GhostSolidIcon: FC<GhostSolidProps> = ({ className, size = 24 }) => {
  return (
    <svg
      data-icon="ghost-solid-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      fill="currentColor"
      width={size}
      height={size}
    >
      <title>Ghost UI</title>
      <defs>
        {/** biome-ignore lint/nursery/useUniqueElementIds: literal id is ok in svg mask */}
        <mask id="ipSGhost0">
          <g fill="none" strokeLinejoin="round" strokeWidth="4">
            <path
              fill="#fff"
              stroke="#fff"
              d="m8 44l4-4l4 4l4-6l4 6l4-6l4 6l4-4l4 4V20c0-8.837-7.163-16-16-16S8 11.163 8 20z"
            />
            <path stroke="#000" strokeLinecap="round" d="M19 20h2m10 0h2" />
          </g>
        </mask>
        {/** biome-ignore lint/nursery/useUniqueElementIds: literal id is ok in svg mask */}
        <linearGradient id="ghostSolidFillGradient" x1="0%" y1="0%" x2="65%" y2="65%">
          <stop offset="0%" stopColor="var(--cui-icon-ghost-solid-fill-start)" />
          <stop offset="100%" stopColor="var(--cui-icon-ghost-solid-fill-end)" />
        </linearGradient>
      </defs>
      <path fill="url(#ghostSolidFillGradient)" mask="url(#ipSGhost0)" d="M0 0h48v48H0z" />
    </svg>
  );
};

export default GhostSolidIcon;
