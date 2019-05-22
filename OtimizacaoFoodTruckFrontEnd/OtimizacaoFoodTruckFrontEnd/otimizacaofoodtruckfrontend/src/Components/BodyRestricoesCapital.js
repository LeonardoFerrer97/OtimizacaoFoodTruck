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

class BodyRestricoesCapital extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="filled-name"
                        label="Capital de giro"
                        className={classes.textField}
                        value={this.props.capitalDeGiro}
                        onChange={this.props.handleChange('capitalDeGiro')}
                        margin="normal"
                        variant="filled"
                        inputProps={{min: '1', step: '1' }}
                    />
            </div>
        );
    }
}

BodyRestricoesCapital.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyRestricoesCapital);