import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBottomBar from './AppBottomBar'

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


class BodyQuantidade extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container} noValidate autoComplete="off">
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Pao"
                        className={classes.textField}
                        value={this.props.quantidadePao}
                        onChange={this.props.handleChange('quantidadePao')}
                        margin="normal"
                        variant="filled"
                        inputProps={{min: '1', step: '1' }}
                    />
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Salsicha"
                        className={classes.textField}
                        value={this.props.quantidadeSalsicha}
                        onChange={this.props.handleChange('quantidadeSalsicha')}
                        margin="normal"
                        variant="filled"
                        inputProps={{min: '1', step: '1' }}
                    />
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Milho"
                        className={classes.textField}
                        value={this.props.quantidadeMilho}
                        onChange={this.props.handleChange('quantidadeMilho')}
                        margin="normal"
                        variant="filled"
                        inputProps={{min: '1', step: '1' }}
                    />
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Batata Palha"
                        className={classes.textField}
                        value={this.props.quantidadeBatataPalha}
                        onChange={this.props.handleChange('quantidadeBatataPalha')}
                        margin="normal"
                        variant="filled"
                        inputProps={{min: '1', step: '1' }}
                    />
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Bacon"
                        className={classes.textField}
                        value={this.props.quantidadeBacon}
                        onChange={this.props.handleChange('quantidadeBacon')}
                        margin="normal"
                        variant="filled"
                        inputProps={{min: '1', step: '1' }}
                    />
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Ketchup"
                        className={classes.textField}
                        value={this.props.quantidadeKetchup}
                        onChange={this.props.handleChange('quantidadeKetchup')}
                        margin="normal"
                        variant="filled"
                        inputProps={{min: '1', step: '1' }}
                    />
                <AppBottomBar handleFinalizar={this.props.handleFinalizar}/>
            </div>
        );
    }
}

BodyQuantidade.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyQuantidade);