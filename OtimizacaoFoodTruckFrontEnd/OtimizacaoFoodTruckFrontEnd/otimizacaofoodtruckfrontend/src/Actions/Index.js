import axios from 'axios';


export function submeter(Ingredientes) {
    const URL = `https://localhost:44357/api/glpk`;
    axios.post(URL,Ingredientes, { headers: { 'Content-Type': 'application/*+json' } })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

//ingredientes, { headers: { 'Content-Type': 'application/*+json' } }