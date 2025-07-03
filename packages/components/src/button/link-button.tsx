import type { FC, HTMLAttributes, ReactNode } from 'react';

type LinkButtonProps = {
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
  label?: string;
} & HTMLAttributes<HTMLAnchorElement>;

const LinkButton: FC<LinkButtonProps> = ({
  className,
  disabled,
  href = '#',
  icon,
  label,
  ...props
}) => {
  return (
    <a
      className={`cui-button cui-link-button ${disabled ? 'cui-link-button-disabled' : ''}`}
      href={href}
      {...props}
    >
      {icon && <span className="cui-link-button-icon">{icon}</span>}
      {label && <span className="cui-link-button-label">{label}</span>}
    </a>
  );
};

export default LinkButton;
