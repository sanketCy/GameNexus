import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoints: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient

      .get<FetchResponse<T>>(endpoints, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { data, errors, isLoading };
};

export default useData;
