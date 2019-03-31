import React, {Component} from "react";
import Navigation from "./Navigation/Navigation";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Bar from "./NeBar/NeBar";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    header_root: {
        width: "100%",
    },
    MainToolbar: {
        padding: 20,
        [theme.breakpoints.up('lg')]: {
            margin: "0 auto",
            width: 1280,
        },
    },
    AppBar: {
        backgroundColor: "#21c8af",
    },
    NavigationToolBar_Background: {
        backgroundColor: "#123561",
    }

});

class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.header_root}>
                <AppBar className={classes.AppBar} position={"static"}>
                    <Toolbar className={classes.MainToolbar}>
                        <Bar/>
                    </Toolbar>
                </AppBar>
                <AppBar position={"static"}>
                    <Toolbar className={classes.NavigationToolBar_Background}>
                        <Navigation/>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}

export default withStyles(styles)(Header);