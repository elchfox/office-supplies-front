import { useEffect, useState } from "react";
import fetchAPI, { UseFetch } from "../utils/fetchData";

type FetchState<T> = {
  data: T | any;
  loading: boolean;
  error: Error | null;
};

type UseFetchMore = {
  initialData: any;
} & UseFetch;

const useFetch = <T>(url: string, props?: UseFetchMore): FetchState<T> => {
  const [data, setData] = useState<T | null>(props?.initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchAPI(url, props);
        
        setData(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, props?.method, props?.body]);

  return { data, loading, error };
};

export default useFetch;
