import { useCallback, useState } from "react";
import { Decorator } from "@storybook/react";

const items = [
  { id: "1", title: "Apple", value: "apple" },
  { id: "2", title: "Banana", value: "banana" },
  { id: "3", title: "Cherry2", value: "cherry" },
  { id: "11", title: "Apple2", value: "apple" },
  { id: "22", title: "Banana2", value: "banana" },
  { id: "33", title: "Cherry3", value: "cherry" },
  { id: "111", title: "Apple3", value: "apple" },
  { id: "222", title: "Banana3", value: "banana" },
  { id: "333", title: "Cherry4", value: "cherry" },
];

export const AutocompleteDecorator: Decorator = (Story) => {
  const [options, setOptions] = useState(items);

  const getItems = useCallback((search: string) => {
    setOptions(() => items.filter((item) => item.title.includes(search)));
  }, []);

  return (
    <div>
      <Story
        args={{
          options,
          label: "Выбранные фрукты",
          getItems,
          getKey: (item: { id: string }) => item.id,
          getTitle: (item: { title: string }) => item.title,
        }}
      />
    </div>
  );
};
