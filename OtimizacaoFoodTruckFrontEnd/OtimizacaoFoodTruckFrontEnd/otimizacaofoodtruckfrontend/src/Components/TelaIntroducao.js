import React from 'react';
import '../Styles/NaoOtimizacao.css'
import AppBottomBar from './AppBottomBar'
const imgSrc='/carrinho.jpg';

export default class TelaIntroducao extends React.Component{
    render(){

        return <div>
            <div className='texto-intro'> Bem vindo ao nosso site!</div>
            <div className='texto-intro'> Ele foi feito para um vendedor de cachorro quente poder minimizar os seus custos!</div>     
            <div className='texto-intro'> Primeiramente, você deve preencher todos os campos pedidos, seja a quantidade usada em cada cachorro de algum ingrediente, ou a demanda de algum tipo de cachorro quente, no caso, o cachorro quente seria somente pão com salsicha, dando 4 opções de cachorro quente com o resto dos ingredientes.</div>
            <div className='texto-intro'>Depois de finalizar tudo, aperte em finalizar e veja os resultados, que seriam a quantidade que o produtor deverá comprar de cada cachorro quente para que a solução seja ótima!! </div>
            <img className='img-intro'src={imgSrc} alt='triste'></img>
            <AppBottomBar prosseguir={true}handleFinalizar={this.props.clickProsseguir}/>
            </div>
    }
}