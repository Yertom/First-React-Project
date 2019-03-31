import React, {Component} from "react";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    Navigation_root: {
        width: "100%",
    },
    Navigation_wrapper: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "center",
        },
        [theme.breakpoints.up('lg')]: {
            margin: "0 auto",
            width: 1280,
        },
    },
    Navigation_container: {
        width: 100,
        transition: "background-color .3s",
        '&:hover': {
            backgroundColor: "#365071"
        },

    },
    Navigation_item: {
        color: "white",
        textDecoration: "none",
    },
    Navigation_item_Paragraph: {
        textAlign: "center",
    }
});

class Navigation extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Navigation_root}>
                <Grid className={classes.Navigation_wrapper} container justify={"flex-start"} direction={"row"}>
                    <Grid className={classes.Navigation_container}><Link className={classes.Navigation_item} to={"/"}><p
                        className={classes.Navigation_item_Paragraph}>Home</p></Link></Grid>
                    <Grid className={classes.Navigation_container}><Link className={classes.Navigation_item} to={"/"}><p
                        className={classes.Navigation_item_Paragraph}>About</p></Link></Grid>
                    <Grid className={classes.Navigation_container}><Link className={classes.Navigation_item} to={"/"}><p
                        className={classes.Navigation_item_Paragraph}>Info</p></Link></Grid>
                    <Grid className={classes.Navigation_container}><Link className={classes.Navigation_item} to={"/"}><p
                        className={classes.Navigation_item_Paragraph}>Smth</p></Link></Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(Navigation);