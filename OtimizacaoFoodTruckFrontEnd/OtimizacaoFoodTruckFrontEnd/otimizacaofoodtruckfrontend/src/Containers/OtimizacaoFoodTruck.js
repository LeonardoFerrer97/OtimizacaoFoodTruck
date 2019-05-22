import React, { Component } from 'react';
import AppTopBar from '../Components/AppTopBar';
import Body from '../Components/Body';
import TelaDeResultados from '../Components/TelaDeResultados';

import { submeter } from './../Actions/Index';
import TelaIntroducao from './../Components/TelaIntroducao';

class OtimizacaoFoodTruck extends Component {
    constructor(props){
        super(props);
        this.state={
            isTelaFinal:false,
            data:{},
            introducao:true,
        };
    };

    submeter = (resultadoFinal) =>{
        submeter(resultadoFinal,this.successHandler,this.errorHandler)
    }

    successHandler = (data) =>{
        this.setState({data},()=>this.clickFinalizar())
    }

    errorHandler = (error) =>{
        console.log(error)
    }

    clickFinalizar = () =>{
        this.setState({isTelaFinal:true})
    }

    clickProsseguir = () =>{
        this.setState({introducao:false})
    }

    renderContent = () =>
    {
        if(this.state.introducao){
            return <TelaIntroducao clickProsseguir={this.clickProsseguir}/>
        }
        else return this.state.isTelaFinal?<TelaDeResultados data={this.state.data}/>:<Body submeter={this.submeter}clickFinalizar={this.clickFinalizar}/>
    }
    render(){
        let renderContent=this.renderContent()
        return <div>
            <AppTopBar/>
            {renderContent}
            
        </div>
    }
}

export default OtimizacaoFoodTruck;
