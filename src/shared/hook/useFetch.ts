/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

interface Props<In, Out> {
  fetcher: (value: In) => Promise<Out>;
  dependeces?: Array<unknown>;
  input: In;
}

export function useFetch<In, Out>({
  fetcher,
  dependeces = [],
  input,
}: Props<In, Out>) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Out | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handlerFetch();
  }, dependeces);

  async function handlerFetch() {
    setLoading(() => true);
    if (error) setError(() => null);
    try {
      const response = await fetcher(input);
      setData(response);
    } catch (error) {
      if (error instanceof Error) {
        const { message } = error;
        setError(message);
      }
      setError("Erro desconhecido!");
    }
    setLoading(() => false);
  }

  return {
    loading,
    data,
    error,
    handlerFetch
  };
}
