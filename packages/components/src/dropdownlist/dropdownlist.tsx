import type { FC, HTMLAttributes } from 'react';

type DropdownListProps = {
  options?: Array<{ value: string; label: string }>;
  onChange?: (value: string) => void;
  defaultValue?: string;
  value?: string;
  name?: string;
};

/**
 * DropdownList component.
 *
 * @param {Array<{ value: string; label: string }>} options - Array of options for the dropdown.
 * @param {(value: string) => void} onChange - Callback function to handle change event.
 * @param {string} [defaultValue] - Default value for the dropdown.
 * @param {string} value - Current value of the dropdown.
 * @param {string} [name] - Name attribute for the dropdown.
 */
const DropdownList: FC<DropdownListProps & HTMLAttributes<HTMLSelectElement>> = ({
  options,
  onChange,
  defaultValue,
  value,
  name,
  ...props
}) => {
  return (
    <select
      name={name}
      className="gui-dropdownlist"
      value={value}
      defaultValue={defaultValue}
      onChange={e => onChange?.(e.target.value)}
      {...props}
    >
      {options?.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default DropdownList;
