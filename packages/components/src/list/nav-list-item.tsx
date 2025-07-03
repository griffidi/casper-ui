import type { HTMLAttributes, ReactNode } from 'react';
import LinkButton from '../button/link-button.tsx';

type NavListItemProps = {
  disabled?: boolean;
  href?: string;
  label?: string;
  icon?: ReactNode;
} & HTMLAttributes<HTMLLIElement>;

const NavListItem = ({ disabled, href, icon, label, ...props }: NavListItemProps) => {
  return (
    <li className="cui-nav-list-item" aria-disabled={disabled} {...props}>
      <LinkButton href={href} icon={icon} label={label} disabled={disabled} />
    </li>
  );
};

export default NavListItem;
export type { NavListItem };
