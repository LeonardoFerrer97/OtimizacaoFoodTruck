import axios from 'axios';


export function submeter(ingredientes) {
    const URL = `http://localhost:8080/otimizar`;
    axios.post(URL,ingredientes)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

//ingredientes, { headers: { 'Content-Type': 'application/*+json' } }