import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const PUTPage = () => {
    const [data, setData] = useState('')
    const { ID } = useParams()
    const API_URL = `http://localhost:8000/api/user/${ID}/`
    const navigate = useNavigate()

    const GETData = async () => {
        try {
            const response = await axios.get(API_URL)
            setData(response.data.name)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        GETData()
    }, [])

    const PUTData = async (e) => {
        e.preventDefault()
        try {
            const putData = { name: data }
            await axios.put(API_URL, putData)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>CRUD App</h1>
            <form onSubmit={PUTData}>
                <label>Name:</label>
                <input type="text" name="name" id="name" value={data} onChange={(e) => setData(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default PUTPage