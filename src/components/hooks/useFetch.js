import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [postData, setPostData] = useState(null);

  const addNewData = (recipe) => {
    setPostData({
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe)
    })
  }; 

  useEffect(() => {
    const fetchData = async (fetchConfig) => {
      setIsPanding(true);
      try {
        const req = await fetch(url, {...fetchConfig});
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setError(null);
        setIsPanding(false);
      } catch (err) {
        setError(err.message);
        setIsPanding(false);
      }
    };
    if(method === "GET"){
      fetchData();
    }
    if (method === "POST" && postData) {
      fetchData(postData);
    }
  }, [url, method, postData]);
  return { data, error, isPanding, addNewData };
};

export default useFetch
