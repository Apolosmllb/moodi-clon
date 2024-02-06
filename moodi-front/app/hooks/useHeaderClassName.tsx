import { useEffect, useState } from "react";

export const useHeaderClassName = () => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    window.matchMedia("(max-width: 1105px)").matches
      ? setClassName("flex")
      : setClassName("hidden");
  }, [className]);

  return className;
};
