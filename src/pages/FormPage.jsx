import styles from './FormPage.module.scss'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';


import Name from "../modules/ui/Name";
import Email from "../modules/ui/Email";
import Username from "../modules/ui/Username";
import CreateBtn from "../modules/modules/CreateBtn";


export default function FormPage () {
    const [setRequest, postRequestForm] = useState([])

    const { 
        register,
        handleSubmit
    } = useForm()

    // уведомление об обновлении страницы
    const toastifyActive = () => toast('Список пользовотелей обновлен. Обновите страницу.*+')

    // исп. POST запроса в react-hook-forms
    const onSubmit = async (data) => {
        const request = await axios.post('http://localhost:8000/users', data)
        postRequestForm(request.data)
        console.warn('user data update');
    }

    return (
        <>
            <ToastContainer/>
            <div className={styles.header}>
                <Name/>
                <Email/>
                <Username/>
                <CreateBtn/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.newUser}>
                <input 
                type="text" 
                {...register('name')}
                />
                <input
                type="email"
                {...register('email')}
                />
                <input 
                type="text" 
                {...register('username')}
                />
                <button
                onClick={toastifyActive}
                >create</button>
            </form>
        </>
    )
}