import { useCallback, useState } from "react";

export const useToggle = (
  initialValue: boolean
): [boolean, (value?: boolean) => void] => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleToggle = useCallback(
    (nextValue?: boolean) => setIsOpen((prev) => nextValue ?? !prev),
    []
  );

  return [isOpen, handleToggle];
};
