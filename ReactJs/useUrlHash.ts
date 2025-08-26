import { useEffect, useState } from "react";

const DEFAULT_HASH = "#home";

export function useUrlHash() {
  const [hash, setHash] = useState(DEFAULT_HASH);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || DEFAULT_HASH);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Run once on mount

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
}
