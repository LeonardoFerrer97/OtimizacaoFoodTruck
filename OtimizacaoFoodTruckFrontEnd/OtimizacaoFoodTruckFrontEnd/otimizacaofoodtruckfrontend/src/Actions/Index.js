import axios from 'axios';


export function submeter(Ingredientes,successHandler,errorHandler) {
    const URL = `https://otimizacaofoodtruckcachorroquente.azurewebsites.net/api/glpk`;
    axios.post(URL, Ingredientes, { headers: { 'Content-Type': 'application/*+json' } })
        .then((result) => successHandler(result.data))
        .catch((error) => errorHandler(error));
    return {
        type: null,
        payload: null
    };
}

//ingredientes, { headers: { 'Content-Type': 'application/*+json' } }