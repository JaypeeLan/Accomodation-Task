import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const usePost = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .post(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  return { data, error, loaded };
};

export default usePost;