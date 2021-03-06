import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBottomBar from './AppBottomBar'
import Header from './Header';
import BodyDeBaixo from './BodyDeBaixo';
import BodyDeCima from './BodyDeCima';
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
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRestricao:false,
            quantidadeBacon: 1,
            quantidadeMilho: 1,
            quantidadeSalsicha: 1,
            quantidadePao: 1,
            quantidadeKetchup: 1,
            quantidadeBatataPalha: 1,
            precoBacon: 1,
            precoMilho: 1,
            precoSalsicha: 1,
            precoPao: 1,
            precoKetchup: 1,
            precoBatataPalha: 1,
            capitalDeGiro:1,
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
            this.props.submeter(resultadoFinal);
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
                    <Header isPreco={false} isRestricao={this.state.isRestricao} isCapitalGiro={this.state.isRestricao}></Header>
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