import { useCallback, useId } from "react";

import { useControlled } from "../__hooks/useControlled";

import { Radio } from "../Radio/Radio";

import s from "./RadioGroup.module.scss";

type RadioItem = {
  value: string;
  title: string;
};

type Props = {
  label?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  radios: RadioItem[];
  onChange?: (value: string) => void;
};

export const RadioGroup = ({
  label,
  name,
  value: valueProp,
  defaultValue,
  radios,
  isDisabled,
  onChange,
}: Props) => {
  const labelId = useId();

  const [isControlled, active, setActive] = useControlled(
    valueProp,
    defaultValue
  );

  const handleChange = useCallback(
    (value: string) => {
      if (value === active) return;

      onChange?.(value);
      if (!isControlled) setActive(value);
    },
    [active, onChange, isControlled, setActive]
  );

  return (
    <div
      role="radiogroup"
      aria-disabled={isDisabled || undefined}
      aria-labelledby={label ? labelId : undefined}
      className={s.root}
    >
      {label && <div id={labelId}>{label}</div>}

      <div className={s.radios}>
        {radios.map(({ title, value }) => (
          <Radio
            id={value}
            key={value}
            name={name}
            value={value}
            defaultChecked={value === defaultValue}
            isChecked={value === active}
            isDisabled={isDisabled}
            onChange={isDisabled ? undefined : handleChange}
          >
            {title}
          </Radio>
        ))}
      </div>
    </div>
  );
};
