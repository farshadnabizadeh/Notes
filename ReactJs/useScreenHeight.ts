// make comments line by line
import { useState, useEffect } from "react";

const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    // Function to get the real viewport height
    const getRealViewportHeight = () => {
      // window.innerHeight is the most reliable for real viewport height
      return window.innerHeight;
    };

    // Update height function
    const updateHeight = () => {
      const currentHeight = getRealViewportHeight();
      setScreenHeight(currentHeight);
    };

    // Get initial height when hook is used
    updateHeight();

    // Add event listener for resize
    window.addEventListener("resize", updateHeight);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return screenHeight;
};

export default useScreenHeight;
