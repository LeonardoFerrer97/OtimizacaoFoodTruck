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

class BodyRestricoes extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container} noValidate autoComplete="off">
                    <TextField
                    type='number'
                        id="filled-name"
                        label="Com bacon"
                        className={classes.textField}
                        value={this.props.demandaBacon}
                        onChange={this.props.handleChange('demandaBacon')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                    type='number'
                        id="filled-name"
                        label="Com milho"
                        className={classes.textField}
                        value={this.props.demandaMilho}
                        onChange={this.props.handleChange('demandaMilho')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                    type='number'
                        id="filled-name"
                        label="Com Ketchup"
                        className={classes.textField}
                        value={this.props.demandaKetchup}
                        onChange={this.props.handleChange('demandaKetchup')}
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                    type='number'
                        id="filled-name"
                        label="Com Batata palha"
                        className={classes.textField}
                        value={this.props.demandaBatataPalha}
                        onChange={this.props.handleChange('demandaBatataPalha')}
                        margin="normal"
                        variant="filled"
                    />
            </div>
        );
    }
}

BodyRestricoes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyRestricoes);