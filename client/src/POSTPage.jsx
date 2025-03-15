import React, { useState } from 'react'
import axios from 'axios'
import './App.css';
import { useNavigate } from 'react-router-dom'

const POSTPage = () => {
    const API_BASE_URL = `http://localhost:8000/api/user/`
    const [data, setData] = useState('')
    const navigate = useNavigate()

    const POSTData = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(API_BASE_URL, { name: data })
            console.log(response.data)
            navigate('/')
        } catch (error) {
            console.error('Error:', error.response?.data || 'An unexpected error occurred.');
        }
    }

    return (
        <>
            <h1>Create</h1>
            <form onSubmit={POSTData}>
                <label>Name:</label>
                <input type="text" name="name" id="name" value={data} onChange={(e) => setData(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default POSTPage