import { useEffect, useRef, useState } from "react";
import { useApiRef } from "../../store/ApiRefContext";
import { objectIsEmpty } from "../helpers";

const useFetch = function (url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const cache = useRef({});
  const { apiRef, isApiRefLoading } = useApiRef();

  useEffect(() => {
    if (isApiRefLoading) {
      return () => {};
    }

    let mounted = true;
    const abortController = new AbortController();

    async function fetchData() {
      try {
        let data = cache.current[url] ?? {}; // First, try to get data from the cache
        setIsLoading(true);

        // If not found in the cache or skipCache, fetch from the url
        if (objectIsEmpty(data)) {
          const response = await fetch(url.replace('APIREF', apiRef), {
            signal: abortController.signal
          });

          if (!response.ok) {
            throw new Error(`Error ${response.status} ${response.statusText}: ${response.text()}`);
          }

          data = await response.json();
          cache.current[url] = data; // Store the last data in the cache
        }

        if (mounted) {
          setData(data);
        }
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      mounted = false;
      abortController.abort();
    };
  }, [url, isApiRefLoading, apiRef]);

  return {isLoading, data, error};
}

export default useFetch;
