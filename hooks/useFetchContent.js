/* useFetchContent(type) hook in the hooks directory encapsulates the logic for fetching content based on the type. Each content page (yoga/index.js, music/index.js, nutrition/index.js) uses these reusable elements to display its specific content, thus reducing code duplication.  */
import { useState, useEffect, useRef } from 'react';

const useFetchContent = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const abortCont = useRef(new AbortController());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: abortCont.current.signal });

        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }

        const newData = await res.json();
        setData(newData);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();

    // Cleanup: abort the fetch on component unmount
    return () => abortCont.current.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetchContent;
