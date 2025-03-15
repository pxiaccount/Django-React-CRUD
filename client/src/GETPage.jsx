import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GETPage = () => {
    const [data, setData] = useState([])
    const API_URL = `http://localhost:8000/api/user/`
    const navigate = useNavigate()

    const GETData = async () => {
        try {
            const response = await axios.get(API_URL)
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const navigateToCreate = () => {
        navigate('/post')
    }

    const navigateToUpdate = (id) => {
        navigate(`/put/${id}/`)
    }

    useEffect(() => {
        GETData()
    }, [])

    const DeleteItem = async (id) => {
        try {
            await axios.delete(`${API_URL}${id}/`)
            setData(data.filter((item) => item.id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>CRUD App</h1>
            <button onClick={navigateToCreate}>Create</button>
            <ul>
                {data.map((item) => (
                    <div key={item.id}>
                        <li>
                            {item.name}
                        </li>
                        <button onClick={() => navigateToUpdate(item.id)}>Update</button>
                        <button onClick={() => DeleteItem(item.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default GETPage