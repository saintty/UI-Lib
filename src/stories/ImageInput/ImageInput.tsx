import React, {
  useState,
  useRef,
  useCallback,
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
  useId,
} from "react";
import { default as NextImage } from "next/image";
import cx from "classnames";

import { useControlled } from "../__hooks/useControlled";

import { getDimensions } from "./_helpers";

import s from "./ImageInput.module.scss";

type Props = {
  label: string;
  value?: string;
  error?: string;
  maxFileSize?: number;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const ImageInput = ({
  label,
  error,
  maxFileSize,
  defaultValue = "",
  value: valueProp,
  onChange,
}: Props) => {
  const errorId = useId();

  const [imageSrc, setImageSrc] = useControlled(valueProp, defaultValue);
  const [originalDimensions, setOriginalDimensions] = useState({
    width: 0,
    height: 0,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const [width, height] = getDimensions(
    originalDimensions.width,
    originalDimensions.height
  );

  const handleChange = useCallback(
    (value: string) => {
      setImageSrc(value);
      onChange?.(value);
    },
    [onChange, setImageSrc]
  );

  const handleClick = useCallback(() => inputRef.current?.click(), []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file || (maxFileSize && file.size > maxFileSize))
        return handleChange("");

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (onLoadEvent) => {
        const result = onLoadEvent.target?.result;

        if (typeof result !== "string") return;

        const img = new Image();
        img.src = result;
        img.onload = () => {
          setOriginalDimensions({ width: img.width, height: img.height });
          handleChange(result);
        };
      };
    },
    [handleChange, maxFileSize]
  );

  const handleRemove = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();
      setImageSrc("");
      setOriginalDimensions({ width: 0, height: 0 });
    },
    [setImageSrc]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <div className={s.root} style={{ width }}>
      <input
        type="file"
        accept="image/*"
        className={s.input}
        ref={inputRef}
        onChange={handleInputChange}
      />
      <div
        tabIndex={0}
        role="button"
        className={cx(s.area, { [s.selected]: imageSrc, [s.invalid]: !!error })}
        style={{ width, height }}
        aria-describedby={error ? errorId : undefined}
        aria-label={
          imageSrc ? "Изображение выбрано, нажмите чтобы изменить" : label
        }
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {imageSrc ? (
          <>
            <NextImage
              width={100}
              height={100}
              src={imageSrc}
              alt="Выбранное изображение"
              className={s.image}
            />
            <button
              aria-label="Удалить изображение"
              type="button"
              className={s.remove}
              onClick={handleRemove}
            >
              ×
            </button>
          </>
        ) : (
          <span className={s.placeholder}>{label}</span>
        )}
      </div>
      {error && (
        <div
          id={errorId}
          className={s.error}
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}
    </div>
  );
};
