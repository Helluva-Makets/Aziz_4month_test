import React, {useState, useEffect} from "react";
import styles from './FormPage.module.scss'
import { useForm } from "react-hook-form";
import axios from "axios";


import Name from "../modules/ui/Name";
import Email from "../modules/ui/Email";
import Username from "../modules/ui/Username";
import CreateBtn from "../modules/modules/CreateBtn";


export default function FormPage () {
    const [postRequest, setPostRequest] = useState([])

    useEffect(() => {
        const responce = async () => {
            const request = await axios.post('http://localhost:8000/users')
            setPostRequest(request.data)
        }
        responce()
    }, [])
    

    const { 
        register,
        setValue,
        handleSubmit
    } = useForm({
        mode: 'onChange'
    })

    return (
        <>
            <div className={styles.header}>
                <Name/>
                <Email/>
                <Username/>
                <CreateBtn/>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                {...register('name')}
                onChange={(e) => setValue('name', e.target.value)}
                />
                <input
                type="text"
                {...register('email')}
                onChange={(e) => setValue('email', e.target.value)}
                />
                <input 
                type="text" 
                {...register('username')}
                onChange={(e) => setValue('username', e.target.value)}
                />
                <button
                
                >create</button>
            </form>
        </>
    )
}