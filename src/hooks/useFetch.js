import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 500) {
          setError("Server error. Please try again.");
        }else if (err.response.status === 400){
          setError("Bad request. Please check the link and try again.");
        }else if (err.response.status === 404){
          setError("Ooops! This page could not be found.");
        } setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
