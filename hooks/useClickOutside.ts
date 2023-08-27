import { EffectCallback, useEffect } from "react";

export const useClickOutside = (ref: any, callback: Function): void => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect((): ReturnType<EffectCallback> => {
    document.addEventListener("click", handleClick);

    return (): void => {
      document.removeEventListener("click", handleClick);
    };
  });
};
