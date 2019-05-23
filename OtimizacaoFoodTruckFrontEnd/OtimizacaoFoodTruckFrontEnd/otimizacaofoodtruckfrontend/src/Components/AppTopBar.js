import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};
class AppTopBar extends Component {
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="static" color='primary'>
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Otimização Food Truck
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
}

export default withStyles(styles)(AppTopBar);
