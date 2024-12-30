import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.round(start));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default AnimatedCounter;
