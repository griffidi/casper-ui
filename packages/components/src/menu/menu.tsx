import { type FC, type HTMLAttributes, useId } from 'react';

type MenuProps = {
  // Define any props you want to pass to the Menu component
} & HTMLAttributes<HTMLElement>;

const Menu: FC<MenuProps> = ({ children }) => {
  const id = useId();

  return <div id={id}>{children}</div>;
};

export default Menu;
