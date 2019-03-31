import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SideBar from ".././Body/SideBar/SideBar";
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const styles = theme => ({

    PurchasedProducts_root: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    PurchasedProducts_massage_container: {
        width: "100%",
    },

    PurchasedProducts_massage: {
        padding: 30,
        marginBottom: 50,
        marginTop: 30,
        width: "100%",
        textAlign: "center",
        color: "#155724",
        backgroundColor: "#d4edda",
        borderColor: "#c3e6cb",
    },
    PurchasedProducts_massage_button_container: {
        marginTop: 20,
    },
    PurchasedProducts_massage_button: {
        marginTop: 9,
        color: "white",
        border: "1px solid #00a046",
        textDecoration: "none",
        background: "#00a046",
        padding: "4px 29px",
        transition: "background-color .2s",
        '&:hover': {
            backgroundColor: "white",
            color: "#00a046",
        },
        "&:focus": {
            outline: "none",
        },
        "&:active": {
            backgroundColor: "#c3e6cb",
        },
    },
    PurchasedProducts_SideBar_Container: {
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    Page_overshadowing: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: "0.0",
        transform: "translateX(-100%)",
        zIndex: 999,
        transition: "opacity 0.7s ease",
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
        [theme.breakpoints.up('lg')]: {
            display: "none",
        },
    },
    Page_overshadowing_Active: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: "0.5",
        transform: "translateX(0%)",
        display: "block",
        zIndex: 999,
        transition: "opacity 0.7s ease",
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
        [theme.breakpoints.up('lg')]: {
            display: "none",
        },
    },

});

class PurchasedProducts extends Component {

    constructor(props) {
        super(props);
        this.handleOvershadowingClick = this.handleOvershadowingClick.bind(this);
    }

    handleOvershadowingClick(event) {
        this.props.openMenu();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.PurchasedProducts_root}>
                <div className={this.props.menuIsOpen ? classes.Page_overshadowing_Active : classes.Page_overshadowing}
                     onClick={this.handleOvershadowingClick}></div>
                <div className={classes.PurchasedProducts_SideBar_Container}><SideBar/></div>
                <Grid container alignContent={"center"} alignItems={"center"} justify={"center"}>
                    <Grid item className={classes.PurchasedProducts_massage_container}>
                        <Paper className={classes.PurchasedProducts_massage}>
                            <Grid container direction={"column"}>
                                <Grid item><h1>Success!</h1></Grid>
                                <Grid item className={classes.PurchasedProducts_massage_button_container}><Link to={"/"}
                                                                                                                className={classes.PurchasedProducts_massage_button}>Ok</Link></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartContent: state.cartContent,
        listOfPrices: state.listOfPrices,
        menuIsOpen: state.menuIsOpen,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => {
            dispatch({type: "OPEN_MENU"})
        },
    }
};

PurchasedProducts = withStyles(styles)(PurchasedProducts);

export default connect(mapStateToProps, mapDispatchToProps)(PurchasedProducts);
