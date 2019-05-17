import React, { Component } from 'react';
import AppTopBar from '../Components/AppTopBar';
import Body from '../Components/Body';
import TelaDeResultados from '../Components/TelaDeResultados';

class OtimizacaoFoodTruck extends Component {
    constructor(props){
        super(props);
        this.state={
            isTelaFinal:false
        };
    };

    clickFinalizar = () =>{
        this.setState({isTelaFinal:true})
    }
    render(){
        return <div>
            <AppTopBar/>
            {this.state.isTelaFinal?<TelaDeResultados />:<Body clickFinalizar={this.clickFinalizar}/>}
        </div>
    }
}

export default OtimizacaoFoodTruck;
