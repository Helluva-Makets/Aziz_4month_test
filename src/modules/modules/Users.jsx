import React, {useEffect, useState} from "react";
import axios from "axios";


export default function Users () {
    const [getItem, setGetItem] = useState([])

    useEffect(() => {
        const responce = async () => {
            const request = await axios.get('http://localhost:8000/users')
            setGetItem(request.data)
        }
        responce()
    }, [])


    if (!getItem || getItem.length === 0) {
        // return <div>Loading...</div>
        return <div>СПИСОК ПУСТ...</div>
    }

    return (
        <>   
            {getItem.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h2>{item.email}</h2>
                    <h3>{item.username}</h3>
                </div>
            ))}
        </>
    )
}