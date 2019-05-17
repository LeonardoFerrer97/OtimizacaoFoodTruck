import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBottomBar from './AppBottomBar'
import Header from './Header';
import BodyDeBaixo from './BodyDeBaixo';
import BodyDeCima from './BodyDeCima';
import { submeter } from '../Actions/Index';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
let isRestricao = false;
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRestricao:false,
            quantidadeBacon: 0,
            quantidadeMilho: 0,
            quantidadeSalsicha: 0,
            quantidadePao: 0,
            quantidadeKetchup: 0,
            quantidadeBatataPalha: 0,
            precoBacon: 0,
            precoMilho: 0,
            precoSalsicha: 0,
            precoPao: 0,
            precoKetchup: 0,
            precoBatataPalha: 0,
            capitalDeGiro:0,
            demandaBacon:0,
            demandaBatataPalha:0,
            demandaMilho:0,
            demandaKetchup:0,
        }
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleFinalizar = () => {
        if (this.state.isRestricao) {
            let resultadoFinal = {
                quantidadeBacon: this.state.quantidadeBacon,
                quantidadeMilho: this.state.quantidadeMilho,
                quantidadeSalsicha: this.state.quantidadeSalsicha,
                quantidadePao: this.state.quantidadePao,
                quantidadeKetchup: this.state.quantidadeKetchup,
                quantidadeBatataPalha: this.state.quantidadeBatataPalha,
                precoBacon: this.state.precoBacon,
                precoMilho: this.state.precoMilho,
                precoSalsicha: this.state.precoSalsicha,
                precoPao: this.state.precoPao,
                precoKetchup: this.state.precoKetchup,
                precoBatataPalha: this.state.precoBatataPalha,
                demandaBacon: this.state.demandaBacon,
                demandaMilho: this.state.demandaMilho,
                demandaKetchup: this.state.demandaKetchup,
                demandaBatataPalha: this.state.demandaBatataPalha,
                capitalDeGiro: this.state.capitalDeGiro,
            }
            submeter(resultadoFinal);
            this.props.clickFinalizar()
        }
        else{
             this.setState({isRestricao:true})
        };
        
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <Header isPreco={true} isRestricao={this.state.isRestricao}></Header>
                    <BodyDeCima
                        handleChange={this.handleChange}
                        demandaMilho={this.state.demandaMilho}
                            demandaBacon={this.state.demandaBacon}
                            demandaKetchup={this.state.demandaKetchup}
                            demandaBatataPalha={this.state.demandaBatataPalha}
                        isRestricao={this.state.isRestricao}
                        quantidadeBacon={this.state.quantidadeBacon}
                        quantidadeMilho={this.state.quantidadeMilho}
                        quantidadeSalsicha={this.state.quantidadeSalsicha}
                        quantidadePao={this.state.quantidadePao}
                        quantidadeKetchup={this.state.quantidadeKetchup}
                        quantidadeBatataPalha={this.state.quantidadeBatataPalha}
                    ></BodyDeCima>
                    <Header isPreco={false} isRestricao={this.state.isRestricao}></Header>
                        <BodyDeBaixo
                            handleChange={this.handleChange}
                            capitalDeGiro={this.state.capitalDeGiro}
                            isRestricao={this.state.isRestricao}
                            precoBacon={this.state.precoBacon}
                            precoMilho={this.state.precoMilho}
                            precoSalsicha={this.state.precoSalsicha}
                            precoPao={this.state.precoPao}
                            precoKetchup={this.state.precoKetchup}
                            precoBatataPalha={this.state.precoBatataPalha}
                            
                        
                        >
                        </BodyDeBaixo>
                    <AppBottomBar handleFinalizar={this.handleFinalizar} />
                </form>
            </div>
        );
    }
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);