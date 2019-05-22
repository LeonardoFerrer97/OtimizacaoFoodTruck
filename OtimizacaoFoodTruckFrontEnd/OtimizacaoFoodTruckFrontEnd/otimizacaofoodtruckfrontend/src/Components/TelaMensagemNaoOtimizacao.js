import React from 'react';
import '../Styles/NaoOtimizacao.css'
const imgSrc='/Excecao.jpg';

export default class TelaMensagemNaoOtimizacao extends React.Component{
    render(){

        return <div>
            <div className='texto'> Infelizmente, os valores colocados no programa não retornaram nenhum valor! Provavelmente foi colocado algum valor que torna a otimização impossível, como por exemplo, um capital de giro muito pequeno. Favor revisar os valores e depois volte a usar nosso site!</div>
            <img className='img'src={imgSrc} alt='triste'></img>
            </div>
    }
}