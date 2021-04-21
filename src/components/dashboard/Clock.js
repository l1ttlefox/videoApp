import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeRefreshInterval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timeRefreshInterval);
  });

  return (
    <h1>{time.toLocaleTimeString()}</h1>
  );
};

export default Clock;
