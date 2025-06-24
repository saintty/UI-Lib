import { IMask, useIMask } from "react-imask";

import { useImaskSync } from "../__hooks/useImaskSync";

import { Input, Props as PInput } from "../Input/Input";

type Props = PInput & {
  format?: "12" | "24";
};

export const TimeInput = ({
  defaultValue: defaultValueProp,
  value: valueProp,
  onChange,
  format = "24",
  ...props
}: Props) => {
  const defaultValue = defaultValueProp ?? valueProp ?? "";

  const is12Hour = format === "12";

  const { ref, value, unmaskedValue, setValue } = useIMask<HTMLInputElement>(
    {
      mask: is12Hour ? "HH:MM AM" : "HH:MM",
      lazy: false,
      autofix: true,
      overwrite: true,
      blocks: {
        HH: {
          mask: IMask.MaskedRange,
          from: 0,
          to: is12Hour ? 12 : 23,
          maxLength: 2,
        },
        MM: {
          mask: IMask.MaskedRange,
          from: 0,
          to: 59,
          maxLength: 2,
        },
      },
    },
    {
      defaultValue: String(defaultValue),
      onAccept: (_, { unmaskedValue }) => onChange?.(unmaskedValue),
    }
  );

  useImaskSync(valueProp, unmaskedValue, setValue);

  return (
    <Input
      {...props}
      isDirectValue
      value={value}
      inputMode="numeric"
      ref={ref}
    />
  );
};
