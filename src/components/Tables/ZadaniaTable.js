import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const BootTable = () => {

    const [posts, setPosts] = useState({ blogs: [] });

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios('http://localhost:8080/zadanie/gospodarz_pobierz_zadanie', config)
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
                        <th>Opis</th>
                        <th>Imie pracownika</th>
                        <th>Nazwisko pracownika</th>
                        <th>Login pracownika</th>
                        <th>Czy wykonano</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.blogs && posts.blogs.map((item) => (
                            <tr key={item.login}>
                                <td>{item.opis}</td>
                                <td>{item.imie}</td>
                                <td>{item.nazwisko}</td>
                                <td>{item.login}</td>
                                <td>{item.czyWykonano}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default BootTable