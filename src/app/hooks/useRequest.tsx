import { useState } from "react";
import { UseRequestProps } from "../interfaces/interfaces";

const useRequest = ({ url, method }: UseRequestProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sentRequest, setSentRequest] = useState<boolean>(false);

  const sendRequest = async (body: string, custom: string) => {
    setLoading(true);

    try {
      const res = await fetch(url || custom, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      setLoading(false);
      setSentRequest(true);

      setTimeout(() => {
        setSentRequest(false);
      }, 1000);

      return data;
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return { loading, sentRequest, sendRequest };
};

export default useRequest;
