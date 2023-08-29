import React from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const optionsRef = React.useRef(options);
  optionsRef.current = options;
  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getData() {
      try {
        setLoading(true);
        setData(null);
        setError(null);
        await fetch(url, {
          signal,
          ...optionsRef.current,
        })
          .then((data) => data.json())
          .then((json) => {
            if (!signal.aborted) setData(json);
          });
        setLoading(false);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(`${error}`);
      } finally {
        setLoading(false);
      }
    }
    getData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
