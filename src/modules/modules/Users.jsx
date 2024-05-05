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

    // если сревер не активен, уведомление о пустом списке
    if (!user || user.length === 0) {
        // return <div>Loading...</div>
        return <div className={styles.undefUsers}>СПИСОК ПУСТ...</div>
    }


    const deleteUserId = async (id) => {
        await axios.delete(`http://localhost:8000/users/${id}`)
        setUsers(user.filter(item => item.id !== id))
        console.log(`User delete - ID_${id}`);
    }

    return (
        <>   
            {user.map((item) => (
                <div key={item.id} className={styles.userFrame}>
                    <h1 className={styles.userFrame__info}>{item.name}</h1>
                    <h2 className={styles.userFrame__info}>{item.email}</h2>
                    <h3 className={styles.userFrame__info}>{item.username}</h3>
                    <button
                     className={styles.userFrame__delBtn}
                     onClick={() => deleteUserId(item.id)}
                    >
                        DELETE 
                    </button>
                </div>
            ))}
        </>
    )
}