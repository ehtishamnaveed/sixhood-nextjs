'use client';

import { useEffect, useState } from 'react';
import { contact } from '../content/site';

const format = new Intl.DateTimeFormat('en-CA', {
  timeZone: contact.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZoneName: 'short',
});

export default function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(format.format(new Date()));
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <time className="local-time" suppressHydrationWarning>
      {time || '--:--'}
    </time>
  );
}
