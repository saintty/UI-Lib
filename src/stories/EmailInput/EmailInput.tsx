import { useIMask } from "react-imask";

import { useImaskSync } from "../__hooks/useImaskSync";

import { Input, Props as PInput } from "../Input/Input";

type Props = PInput;

export const EmailInput = ({
  defaultValue: defaultValueProp,
  value: valueProp,
  onChange,
  ...props
}: Props) => {
  const defaultValue = defaultValueProp ?? valueProp ?? "";

  const { ref, value, unmaskedValue, setValue } = useIMask<HTMLInputElement>(
    {},
    {
      defaultValue: String(defaultValue),
      onAccept: onChange,
    }
  );

  useImaskSync(valueProp, unmaskedValue, setValue);

  return (
    <Input {...props} value={value} inputMode="email" type="email" ref={ref} />
  );
};
