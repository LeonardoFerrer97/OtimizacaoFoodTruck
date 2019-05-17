import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import BodyQuantidade from './BodyQuantidade';
import BodyRestricoes from './BodyRestricoes';
class BodyDeCima extends Component {
    renderContent = () => {
        return this.props.isRestricao ?
            <BodyRestricoes
                handleChange={this.props.handleChange}
                demandaMilho={this.props.demandaMilho}
                demandaBacon={this.props.demandaBacon}
                demandaKetchup={this.props.demandaKetchup}
                demandaBatataPalha={this.props.demandaBatataPalha}
            >
            </BodyRestricoes>
            :
            <BodyQuantidade
                handleChange={this.props.handleChange}
                quantidadeBacon={this.props.quantidadeBacon}
                quantidadeMilho={this.props.quantidadeMilho}
                quantidadeSalsicha={this.props.quantidadeSalsicha}
                quantidadePao={this.props.quantidadePao}
                quantidadeKetchup={this.props.quantidadeKetchup}
                quantidadeBatataPalha={this.props.quantidadeBatataPalha}
            >

            </BodyQuantidade>
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