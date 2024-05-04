import { create } from "zustand";
import axios from "axios";


export const PostRequest = create(set => ({
    fetchRequest: async (formData) => {
        const request = await axios.post('http://localhost:8000/users', formData)
        set(request.data)
    }
}))
