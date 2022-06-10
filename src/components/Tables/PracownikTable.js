import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const PracownikTable = () => {

    const [posts, setPosts] = useState({ blogs: [] });

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    useEffect(() => {
        const fetchPostList = async () => {
            const { data } = await axios('http://localhost:8080/zadanie/pobierz_swoje_zadania', config)
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
                        <th>IdZadania</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.blogs && posts.blogs.map((item) => (
                            <tr key={item.idZadania}>
                                <td>{item.idZadania}</td>
                                <td>{item.opis}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </ReactBootstrap.Table>
        </div>
    )
}

export default PracownikTable