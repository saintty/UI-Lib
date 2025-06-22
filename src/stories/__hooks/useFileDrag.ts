import { useState, useCallback, DragEvent } from "react";

type UseFileDragHook = {
  accept?: string;
  maxFileSize?: number;
  onDrop: (file: File) => void;
};

const stopEvent = (event: DragEvent) => {
  event.preventDefault();
  event.stopPropagation();
};

export const useFileDrag = ({
  accept = "*",
  maxFileSize,
  onDrop,
}: UseFileDragHook) => {
  const [isDragging, setIsDragging] = useState(false);

  const isFileAccepted = useCallback(
    (file: File) => {
      const isMimeOk = accept === "*" || file.type.match(accept);
      const isSizeOk = !maxFileSize || file.size <= maxFileSize;

      return isMimeOk && isSizeOk;
    },
    [accept, maxFileSize]
  );

  const handleDragEnter = useCallback((event: DragEvent) => {
    stopEvent(event);
    setIsDragging(true);
  }, []);

  const handleDragOver = useCallback(stopEvent, []);

  const handleDragLeave = useCallback((event: DragEvent) => {
    stopEvent(event);
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent) => {
      stopEvent(event);
      setIsDragging(false);

      const file = event.dataTransfer?.files?.[0];
      if (!file) return;

      if (isFileAccepted(file)) onDrop(file);
    },
    [onDrop, isFileAccepted]
  );

  return {
    isDragging,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
