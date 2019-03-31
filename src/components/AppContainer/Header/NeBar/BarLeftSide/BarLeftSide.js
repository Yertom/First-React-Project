import React, {Component} from "react";
import {connect} from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    BarLeftSide_h1: {
        [theme.breakpoints.up('md')]: {
            textAlign: "center",
            fontSize: 42,
            width: "auto",
        },
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    BarLeftSide_MenuContainer:{
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
        [theme.breakpoints.down('sm')]: {
            display: "block",
            marginRight: 10,
        },
    },
    BarLeftSide_Menu:{
        fontSize: 44,
        marginTop: 12,
        color: "white",
    },
    BarLeftSide_IconButton:{
        margin: 0,
        padding:0,
    },
});

class BarLeftSide extends Component {

    constructor(props) {
        super(props);
        this.menuToggle = this.menuToggle.bind(this);
    }

    menuToggle(){
        this.props.openMenu();
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid wrap={"nowrap"} container alignItems={"center"} direction={"row"}>
                    <h1 className={classes.BarLeftSide_h1}>ShopProject</h1>
                    <Grid xs={1} className={classes.BarLeftSide_MenuContainer}><IconButton color="white" className={classes.BarLeftSide_IconButton}><Menu onClick={this.menuToggle} className={classes.BarLeftSide_Menu}>Menu</Menu></IconButton></Grid>
                    <Grid xs={10} item><SearchBar/></Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartContent: state.cartContent,
        listOfPrices: state.listOfPrices,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => {
            dispatch({type: "OPEN_MENU"})
        },
    }
};

BarLeftSide = withStyles(styles)(BarLeftSide);


export default connect(mapStateToProps, mapDispatchToProps)(BarLeftSide);