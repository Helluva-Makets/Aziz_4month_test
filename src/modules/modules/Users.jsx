import {useEffect, useState} from "react";
import axios from "axios";
import styles from './Users.module.scss'


export default function Users () {
    const [user, setUsers] = useState([])

    useEffect(() => {
        const responce = async () => {
            const request = await axios.get('http://localhost:8000/users')
            setUsers(request.data)
        }
        responce()
    }, [])


    if (!user || user.length === 0) {
        // return <div>Loading...</div>
        return <div>СПИСОК ПУСТ...</div>
    }

    return (
        <>   
            {user.map((item) => (
                <div key={item.id} className={styles.userFrame}>
                    <h1 className={styles.userFrame__info}>{item.name}</h1>
                    <h2 className={styles.userFrame__info}>{item.email}</h2>
                    <h3 className={styles.userFrame__info}>{item.username}</h3>
                </div>
            ))}
        </>
    )
}