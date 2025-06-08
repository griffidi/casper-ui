import { useQuery } from '@apollo/client/react/hooks';
import DropdownList from '@cui/components/dropdownlist/dropdownlist.tsx';
import type { FC, SelectHTMLAttributes } from 'react';
import { GetLocationStates } from '@/types/graphql.ts';

type LocationStateDropdownListProps = {
  onChange?: (value: string) => void;
  defaultValue?: string;
  value?: string;
  name?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const LocationStateDropdownList: FC<LocationStateDropdownListProps> = ({
  onChange,
  defaultValue,
  value = defaultValue,
  name,
  ...props
}) => {
  const {
    data: { states = [] } = {},
  } = useQuery(GetLocationStates);

  return (
    <DropdownList
      options={states?.map(({ id: value, name: label }) => ({
        value,
        label,
      }))}
      onChange={e => onChange?.(e as string)}
      defaultValue={defaultValue}
      value={value}
      name={name}
      {...props}
    />
  );
};

export default LocationStateDropdownList;
