import { useState, useEffect } from "react";

export function PrzygotujPracownicy(){
    const [pracownicy, setPracownicy] = useState({});

    useEffect(() => {
    fetch('http://localhost:8080/api/lista_pracownikow', {
        method: 'GET',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer '+localStorage.getItem('token')
        }
      }).then(response => response.json()).then(post => setPracownicy(post));
    }, []);
    let dane=JSON.stringify(pracownicy)
    dane=dane.replace('{"pracownicy":', "")
    dane=dane.slice(0,-1)
    return dane
}