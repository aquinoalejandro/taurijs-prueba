import { useState, useEffect } from "react";

export async function useFetch(url, method = "GET") {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                if (method === "GET") {
                    const response = await fetch(url, {
                        method: method,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await response.json();
                    setData(data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error al realizar la petición", error);
            }
        }
        fetchData();
    }, [url]);

    return { data, loading };
}