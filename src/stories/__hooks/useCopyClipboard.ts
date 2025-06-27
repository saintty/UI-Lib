import { useCallback } from "react";

export const useCopyToClipboard = () =>
  useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  }, []);
