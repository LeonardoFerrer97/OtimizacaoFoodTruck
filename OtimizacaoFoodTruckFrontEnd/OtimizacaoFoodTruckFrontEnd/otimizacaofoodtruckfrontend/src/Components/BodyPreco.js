import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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


class BodyPreco extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container} noValidate autoComplete="off">
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Pao"
                        className={classes.textField}
                        value={this.props.precoPao}
                        onChange={this.props.handleChange('precoPao')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Salsicha"
                        className={classes.textField}
                        value={this.props.precoSalsicha}
                        onChange={this.props.handleChange('precoSalsicha')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Milho"
                        className={classes.textField}
                        value={this.props.precoMilho}
                        onChange={this.props.handleChange('precoMilho')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        type='number'
                        id="filled-name"
                        label="Batata Palha"
                        className={classes.textField}
                        value={this.props.precoBatataPalha}
                        onChange={this.props.handleChange('precoBatataPalha')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                    type='number'
                        id="filled-name"
                        label="Bacon"
                        className={classes.textField}
                        value={this.props.precoBacon}
                        onChange={this.props.handleChange('precoBacon')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                    type='number'
                        id="filled-name"
                        label="Ketchup"
                        className={classes.textField}
                        value={this.props.precoKetchup}
                        onChange={this.props.handleChange('precoKetchup')}
                        margin="normal"
                        variant="filled"
                    />
            </div>
        );
    }
}

BodyPreco.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyPreco);