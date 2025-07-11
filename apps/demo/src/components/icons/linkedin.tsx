import type { FC } from 'react';
import type { IconProps } from './icon-props.ts';

type LinkedInProps = {} & IconProps;

const LinkedInIcon: FC<LinkedInProps> = ({ className, size = 24 }) => {
  return (
    <svg
      data-icon="cui-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      className={className}
      fill="currentColor"
      width={size}
      height={size}
    >
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M11 0a1 1 0 0 1 .993.883L12 1v10a1 1 0 0 1-.883.993L11 12H1a1 1 0 0 1-.993-.883L0 11V1A1 1 0 0 1 .883.007L1 0zm0 1H1v10h10zM7.742 4.63c1.502 0 1.78.988 1.78 2.273L9.52 9.52H8.04L8.037 7c-.01-.51-.098-1.065-.769-1.065c-.723 0-.872.53-.888 1.109L6.378 9.52H4.897V4.75h1.422v.65h.02a1.56 1.56 0 0 1 1.403-.771zm-3.776.119V9.52H2.482V4.749zm-.741-2.372a.86.86 0 1 1 0 1.72a.86.86 0 0 1 0-1.72"
      />
    </svg>
  );
};

export default LinkedInIcon;
