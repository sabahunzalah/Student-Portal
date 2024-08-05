import { useEffect, useState } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("xs");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setBreakpoint("xs");
      } else if (width >= 600 && width < 960) {
        setBreakpoint("sm");
      } else if (width >= 960 && width < 1280) {
        setBreakpoint("md");
      } else if (width >= 1280 && width < 1920) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    window.addEventListener("resize", updateBreakpoint);
    updateBreakpoint(); // Initial check

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}

export default useBreakpoint;
