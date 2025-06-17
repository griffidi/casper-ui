import type { FC } from 'react';
import type { IconProps } from './icon-props.ts';

type CuiProps = {
  strokeWidth?: number;
} & IconProps;

const CuiIcon: FC<CuiProps> = ({ className, size = 24, strokeWidth = 3 }) => {
  return (
    <svg
      data-icon="cui-icon"
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
        <mask id="ipTGhost0">
          <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={strokeWidth}>
            <path d="m8 44l4-4l4 4l4-6l4 6l4-6l4 6l4-4l4 4V20c0-8.837-7.163-16-16-16S8 11.163 8 20z" />
            <path strokeLinecap="round" d="M19 20h2m10 0h2" />
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGhost0)" />
    </svg>
  );
};

export default CuiIcon;
