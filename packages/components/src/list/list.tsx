import type { AriaRole, FC, HTMLAttributes } from 'react';

type ListProps = {
  type: AriaRole;
  align?: 'horizontal' | 'vertical';
} & HTMLAttributes<HTMLUListElement>;

const List: FC<ListProps> = ({ align = 'vertical', children, type = 'list', ...props }) => {
  return (
    <ul role={type} className={`cui-list ${align}`} {...props}>
      {children}
    </ul>
  );
};

export default List;
