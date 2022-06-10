import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const PracownicyTable = () => {

    const [posts, setPosts] = useState({ blogs: [] });

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios('http://localhost:8080/api/lista_pracownikow', config)
            setPosts({ blogs: data })
            console.log(data)
        }
        fetchPostList()
    }, [setPosts])


    return (
        <div>
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Login</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.blogs && posts.blogs.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.imie}</td>
                                <td>{item.nazwisko}</td>
                                <td>{item.login}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default PracownicyTable