import { useState, useEffect, useCallback, useContext } from "react";
import { GlobalContextState } from "../context/globalContext";

export default function useFetchQuery(url, options) {
  const token  = useContext(GlobalContextState).token;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuery = useCallback(async (url, options) => {
    // const token = JSON.parse(localStorage?.getItem("teams-app-data"))?.token;


    const fetchOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        ...options,
      }
    

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url, fetchOptions);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  },[token]) 

  useEffect(() => {
    fetchQuery(url, options);
  }, [url, options, fetchQuery]);

  
  return [ fetchQuery, { data, loading, error }];
}
