import { useState } from "react";

export default function useFetchMutation(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  async function fetchData(options) {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        setError(responseJson.error);
      } else {
        setData(responseJson);
      }

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      return { data, loading, error };
    }
  }
  return [fetchData, { data, loading, error }];
}
