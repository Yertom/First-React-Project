import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { fade } from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    SideBarItem_li:{
        paddingLeft: 15,
        cursor: "pointer",
        transition: "background-color .3s",
        '&:hover': {
            backgroundColor: "#123561"
        },
    },
    SideBarItem_Link: {
        textDecoration: "none",
        color: "#123561",
        transition: "color .3s",
        '&:hover': {
            color: "white",
        },
    }

});

class SideBarItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;
        return (
            <Link to={"/"} class={classes.SideBarItem_Link}><li onClick={this.props.onclick} className={classes.SideBarItem_li}>
                {this.props.name}
            </li></Link>
        )
    }

}

export default withStyles(styles)(SideBarItem);