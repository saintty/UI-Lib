import React, {
  useRef,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { keyHandlers } from "./_constants";

import { collectButtonElements } from "./_helpers";

import { Accordion } from "../Accordion/Accordion";

type Item = { id: string; title: string; content: ReactNode };

export type Props = {
  items: Item[];
  selection?: "single" | "multiple";
  defaultSelectedKeys?: string[];
  onSelectionChange: (keys: Set<string>) => void;
};

export const AccordionGroup = ({
  items,
  selection = "single",
  defaultSelectedKeys = [],
  onSelectionChange,
}: Props) => {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set<string>(defaultSelectedKeys)
  );

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  const focusItem = useCallback(
    (index: number) => buttonsRef.current[index]?.focus(),
    []
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = buttonsRef.current.findIndex(
      (el) => el === document.activeElement
    );

    if (index === -1) return;
    if (!keyHandlers.includes(event.key)) return;

    event.preventDefault();

    const length = buttonsRef.current.length;

    if (event.key === "Home") focusItem(0);
    else if (event.key === "End") focusItem(length - 1);
    else if (event.key === "ArrowDown") focusItem((index + 1) % length);
    else if (event.key === "ArrowUp") focusItem((index - 1 + length) % length);
  };

  const handleToggle = useCallback(
    (id: string) => {
      setSelectedKeys((prev) => {
        if (prev.has(id)) prev.delete(id);
        else {
          if (selection === "single") prev.clear();

          prev.add(id);
        }

        const newState = new Set(prev);

        onSelectionChange(newState);
        return newState;
      });
    },
    [onSelectionChange, selection]
  );

  useEffect(() => {
    if (!rootRef.current) return;

    buttonsRef.current = collectButtonElements(rootRef.current);
  }, [items]);

  return (
    <div
      role="presentation"
      ref={rootRef}
      aria-multiselectable={selection === "multiple" ? "true" : undefined}
      onKeyDown={handleKeyDown}
    >
      {items.map(({ content, title, id }) => (
        <Accordion
          title={title}
          key={title}
          isOpen={selectedKeys.has(id)}
          onToggle={() => handleToggle(id)}
        >
          {content}
        </Accordion>
      ))}
    </div>
  );
};
