import { useCallback, useEffect } from "react";

const useScrollToTop = (mouseBehavior: "auto" | "smooth" = "smooth") => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: mouseBehavior });
  }, [mouseBehavior]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e) {
      e.preventDefault();
    }
    scrollToTop();
  };

  return { handleClick };
};

export default useScrollToTop;
