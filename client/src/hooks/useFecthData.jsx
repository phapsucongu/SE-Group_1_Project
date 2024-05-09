import React from 'react'
import { useState, useEffect } from 'react'


const useFecthData = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                headers: {Authourization: `Bearer ${token}`}
        })
                const result = await response.json();
            if(!response.ok) {
                throw new Error(result.message);
            }

            setData(result);
            setLoading(false);

            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    },[url])

  return {
    data, 
    loading, 
    error,
  }
}

export default useFecthData