import { useRef, useCallback } from "react";

export default function useInfiniteScroll(hasMorePage, setPage) {
  const observer = useRef();

  // 무한스크롤 IntersectionObserver 생성
  const ElementRef = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMorePage) {
          setPage((prev) => prev + 2);
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMorePage, setPage]
  );

  return ElementRef;
}
