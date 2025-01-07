'use client';

import { useEffect, useState } from 'react';

interface HostData {
  host: string;
  channel: string;
}

export default function Page() {
  const [data, setData] = useState<HostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchHostData() {
      const res = await fetch('/api/get-channel');
      const result = await res.json().then((data) => {
        setLoading(false);
        return data;
      });
      setData(result);
    }

    fetchHostData();
  }, []);

  if (loading) return <div className='flex justify-center mt-52'>Loading...
  </div>;

  return (
    <div className='flex justify-center mt-52'>
      <div className='flex flex-col'>
      <h1>Bienvenido</h1>
      <p>Dominio detectado: {data?.host}</p>
      <p>Channel: {data?.channel}</p>
      </div>
    </div>
  );
}