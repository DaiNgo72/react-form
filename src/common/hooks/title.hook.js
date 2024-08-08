import { useEffect } from "react";

const updateTitle = (name) => {
  document.title = name;
};

export const useTitle = (name) => {
  useEffect(() => {
    updateTitle(name);
  }, [name]);
};
