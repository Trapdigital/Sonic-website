import { useEffect, useState } from 'react';

export function usePlausibleStats() {
  const [stats, setStats] = useState<any>(null);
  useEffect(() => {
    fetch('https://plausible.io/api/stats/your_domain?period=30d', {
      headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
    })
      .then(res => res.json())
      .then(setStats);
  }, []);
  return stats;
}
