import { useState, useEffect, useCallback } from "react";

export default function useFetchQuery(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuery = useCallback(async (url, options) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  },[]) 

  useEffect(() => {
    fetchQuery(url, options);
  }, [url, options, fetchQuery]);

  
  return [ fetchQuery, { data, loading, error }];
}
