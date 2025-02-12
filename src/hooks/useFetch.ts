import axios from "axios";
import { useState, useEffect } from "react";

type ReturningType<R> = {
  data: R | null;
  isLoading: boolean;
  errorMessage: string;
};

export const useFetch = <R>(url: string): ReturningType<R> => {
  const [data, setData] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);

      axios
        .get<R>(url)
        .then(({ data }) => {
          setData(data);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [url]);

  return { data, isLoading, errorMessage };
};
