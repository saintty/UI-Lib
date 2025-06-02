import { useIMask } from "react-imask";

import { useImaskSync } from "../__hooks/useImaskSync";

import { Input, Props as PInput } from "../Input/Input";

type Props = PInput;

export const PhoneInput = ({
  defaultValue: defaultValueProp,
  value: valueProp,
  onChange,
  ...props
}: Props) => {
  const defaultValue = defaultValueProp ?? valueProp ?? "";

  const { ref, value, unmaskedValue, setValue } = useIMask<HTMLInputElement>(
    { mask: "+{7} (000) 000-00-00" },
    {
      defaultValue: String(defaultValue),
      onAccept: (_, { unmaskedValue }) => onChange?.(unmaskedValue),
    }
  );

  useImaskSync(valueProp, unmaskedValue, setValue);

  return <Input {...props} value={value} inputMode="numeric" ref={ref} />;
};
