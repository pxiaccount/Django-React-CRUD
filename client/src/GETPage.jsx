import React, { useEffect, useState } from 'react'
import axios from 'axios'


const GETPage = () => {
    const [data, setData] = useState([])
    const API_URL = `http://localhost:8000/api/user/`

    const GETData = async () => {
        try {
            const request = await axios.get(API_URL)
            setData(request.data)
            console.log(request.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        GETData()
    }, [])

    return (
        <>
            <h1>CRUD App</h1>
            <ul>
                {data.map((item, i) => (
                    <div>
                        <li key={i}>
                            {item.name}
                        </li>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default GETPage