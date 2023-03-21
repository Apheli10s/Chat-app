import {  useEffect, useState } from "react";

export function MessageOfTheDay(){
    const [data, setData] = useState(null);
    const [shouldFetch, setShouldFetch ] = useState(true);

    function handleFetch(){
        setShouldFetch(true);
    }

    useEffect(() => {
        if(shouldFetch === true){
            fetch("/assets/data.json")
                .then(response => {
                    return response.json();
                })
                .then (json => {
                    setData(json);
                    setShouldFetch(false);
                });
        }
    }, [shouldFetch]);

    console.log(data);

    if (data === null){
        return <div>Loading message of they day ... </div>;
    }

    return (
        <>
            <button type="button" onClick={handleFetch}>Fetch Data</button>
            <div>{data.message}</div>
        </>
    );
}