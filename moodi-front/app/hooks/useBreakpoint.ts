import { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const checkBreakpoint = () => {
      if (window.matchMedia("(max-width: 600px)").matches) {
        setBreakpoint("xs");
      } else if (window.matchMedia("(max-width: 960px)").matches) {
        setBreakpoint("sm");
      } else if (window.matchMedia("(max-width: 1280px)").matches) {
        setBreakpoint("md");
      } else if (window.matchMedia("(max-width: 1920px)").matches) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, []);

  return breakpoint;
};
