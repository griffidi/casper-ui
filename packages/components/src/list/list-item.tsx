import type { HTMLAttributes, ReactNode } from 'react';

type ListItemProps = {
  disabled?: boolean;
  icon?: ReactNode;
  label?: string;
} & HTMLAttributes<HTMLLIElement>;

/**
 * ListItem is a component that represents an item in a list.
 * It can include an icon and a label, and can be disabled.
 *
 * @param {ListItemProps} props - The properties for the ListItem component.
 * @returns {JSX.Element} The rendered ListItem component.
 */
const ListItem = ({ disabled, icon, label, ...props }: ListItemProps) => {
  return (
    <li
      className={`cui-list-item ${disabled ? 'disabled' : ''}`}
      aria-disabled={disabled}
      {...props}
    >
      {icon && <span className="cui-list-item-icon">{icon}</span>}
      {label && <span className="cui-list-item-label">{label}</span>}
    </li>
  );
};

export default ListItem;
export type { ListItem };
