import React from "react";
import usePost from "../hooks/usePost";

const Post = () => {
  const { data, error, loaded } = usePost(
    "http://mockaccommodation.tranzgate.com.ng/api/rooms",
    {
      hallId: "mariere",
      roomNo: "204",
      matricNo: "000000001",
    }
  );
  const stringifiedData = useMemo(() => {
    return JSON.stringify(data || {});
  }, [data]);

  if (loaded) {
    return error ? <span>Error: {error}</span> : <p>{stringifiedData}</p>;
  }
  return <span>Loading...</span>;
};

export default Post;
