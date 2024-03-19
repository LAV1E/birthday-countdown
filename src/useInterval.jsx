import React from "react";

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef(() => {});

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export default useInterval;