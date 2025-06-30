import type { FC, HTMLAttributes } from 'react';

type MenuPopoverProps = {
  menuId: string;
} & HTMLAttributes<HTMLElement>;

const MenuPopover: FC<MenuPopoverProps> = ({ children, menuId }) => {
  return (
    <menu id={menuId} popover="auto">
      {children}
    </menu>
  );
};

export default MenuPopover;
