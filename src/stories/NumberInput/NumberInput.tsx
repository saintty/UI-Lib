import { useIMask } from "react-imask";

import { useImaskSync } from "../__hooks/useImaskSync";

import { Input, Props as PInput } from "../Input/Input";

type Props = Omit<PInput, "value" | "defaultValue" | "onChange"> & {
  value?: number;
  defaultValue?: number;
  floatDigits?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

export const NumberInput = ({
  floatDigits = 0,
  defaultValue: defaultValueProp,
  value: valueProp,
  min,
  max,
  onChange,
  ...props
}: Props) => {
  const defaultValue = defaultValueProp ?? valueProp ?? "";

  const { ref, value, unmaskedValue, setValue } = useIMask<HTMLInputElement>(
    {
      mask: Number,
      scale: floatDigits,
      thousandsSeparator: " ",
      padFractionalZeros: true,
      normalizeZeros: true,
      radix: ".",
      mapToRadix: [".", ","],
      min,
      max,
    },
    {
      defaultValue: String(defaultValue),
      onAccept: (_, { unmaskedValue }) => onChange?.(Number(unmaskedValue)),
    }
  );

  useImaskSync(valueProp, unmaskedValue, setValue);

  return <Input {...props} value={value} inputMode="numeric" ref={ref} />;
};
