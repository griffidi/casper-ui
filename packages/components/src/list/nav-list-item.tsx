import type { HTMLAttributes, ReactNode } from 'react';
import LinkButton from '../button/link-button.tsx';

type NavListItemProps = {
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
  label?: string;
} & HTMLAttributes<HTMLLIElement>;

/**
 * NavListItem is a component that represents an item in a navigation list.
 * It can be used to create links with optional icons and labels.
 *
 * @param {NavListItemProps} props - The properties for the NavListItem component.
 * @returns {JSX.Element} The rendered NavListItem component.
 */
const NavListItem = ({ disabled, href, icon, label, ...props }: NavListItemProps) => {
  return (
    <li className="cui-nav-list-item" aria-disabled={disabled} {...props}>
      <LinkButton href={href} icon={icon} label={label} disabled={disabled} />
    </li>
  );
};

export default NavListItem;
export type { NavListItem };
