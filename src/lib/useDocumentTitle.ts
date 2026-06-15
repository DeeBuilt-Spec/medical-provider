import { useEffect } from "react";

/*
 * Sets document.title while a route component is mounted, restoring the previous
 * title on unmount. Replaces TanStack Router's per-route `head.meta` title — with
 * react-router we just set the title imperatively from each page component.
 */
export function useDocumentTitle(title: string): void {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
