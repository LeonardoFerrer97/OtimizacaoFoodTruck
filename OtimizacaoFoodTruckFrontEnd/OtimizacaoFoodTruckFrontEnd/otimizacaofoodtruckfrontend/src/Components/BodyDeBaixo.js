import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';


import BodyPreco from './BodyPreco';
import BodyRestricoesCapital from './BodyRestricoesCapital'
class BodyDeCima extends Component {
    renderContent=()=>{
        return this.props.isRestricao ?
            <BodyRestricoesCapital
            handleChange={this.props.handleChange}
            capitalDeGiro={this.props.capitalDeGiro}
            custoTotalDoIngrediente={this.props.custoTotalDoIngrediente}
            quantidadeTotalDeIngredientesAComprar={this.props.quantidadeTotalDeIngredientesAComprar}
            >
            </BodyRestricoesCapital>
            :
            <BodyPreco
                handleChange={this.props.handleChange}
                precoBacon={this.props.precoBacon}
                precoMilho={this.props.precoMilho}
                precoSalsicha={this.props.precoSalsicha}
                precoPao={this.props.precoPao}
                precoKetchup={this.props.precoKetchup}
                precoBatataPalha={this.props.precoBatataPalha}
            >

            </BodyPreco>
    };
    render() {
        let render = this.renderContent()
        return <div>{render}</div>
        ;
    }
}
BodyDeCima.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (BodyDeCima);