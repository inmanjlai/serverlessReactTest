import axios from 'axios';
import { useEffect, useState } from 'react';
import  { useParams } from 'react-router-dom';

export const User = () => {
    
    const  { id } = useParams()
    const [user, setUser] = useState([])

    function getUserByID(id) {
        axios.get(`https://express-app-y6ib6s6g5a-uc.a.run.app/users/${id}`).then(response => {
            setUser(response.data[0])
        })
    }

    useEffect(() => {
        getUserByID(id)
    },[])
    
    return (
        <h1>{user.firstName} {user.lastName}</h1>
    )
}