import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonText:{
        color:'white'
    },
    button:{
        width:'100%',
        height:'100%',
    }
});
class AppBottomBar extends Component {
    render() {
        const { classes } = this.props;
        return (
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                    <Button onClick={this.props.handleFinalizar} classes={{root:classes.button,text:classes.buttonText}}> Finalizar </Button>
                    </Toolbar>
                </AppBar>
        );
    }
}
AppBottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBottomBar);