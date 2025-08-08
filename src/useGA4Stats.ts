// Simple Google Analytics 4 API integration for React (client-side, public data only)
// This hook fetches pageview and user stats for the last 30 days using the GA4 Data API (requires public API key and property ID)
// For production, use a backend proxy to keep credentials secure
import { useEffect, useState } from 'react';

// Replace with your GA4 property ID (e.g., '123456789') and API key from Google Cloud Console
const GA4_PROPERTY_ID = '498366265';
const GA4_API_KEY = 'AIzaSyCqEi2DuJEX5QYyLFs1w8l2EJCoU06lbZE';

export function useGA4Stats() {
  const [stats, setStats] = useState<{ users: number; pageviews: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      setError(null);
      try {
        const url = `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY_ID}:runReport?key=${GA4_API_KEY}`;
        const body = {
          dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
          metrics: [
            { name: 'totalUsers' },
            { name: 'screenPageViews' }
          ]
        };
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error('Failed to fetch GA4 stats');
        const data = await res.json();
        const users = Number(data.rows?.[0]?.metricValues?.[0]?.value || 0);
        const pageviews = Number(data.rows?.[0]?.metricValues?.[1]?.value || 0);
        setStats({ users, pageviews });
      } catch (e: any) {
        setError(e.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return { stats, loading, error };
}
