import React, {Component} from "react";
import {connect} from "react-redux";
import CartItem from "./CartItem/CartItem";
import Paper from '@material-ui/core/Paper';
import SideBar from ".././Body/SideBar/SideBar";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    Cart_root: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    Cart_heading: {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 10,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
        },
    },
    Cart_Paper: {
        padding: 20,
        marginBottom: 20,
    },
    Cart_Button_Buy: {
        padding: "9px 39px 9px 39px",
        border: "1px solid #00a046",
        backgroundColor: "#00a046",
        color: "white",
        fontSize: 30,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            padding: "10px 30px 10px 30px",
        },
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
    Cart_Button_disabled_Buy: {
        padding: "9px 39px 9px 39px",
        border: "1px solid transparent",
        backgroundColor: "#721c24",
        color: "white",
        fontSize: 30,
        [theme.breakpoints.down('xs')]: {
            fontSize: 14,
            padding: "10px 30px 10px 30px",
        },
        transition: "background-color .2s",
    },
    Cart_SideBar_Container: {
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    Cart_totalPrice: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
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

class Cart extends Component {

    constructor(props) {
        super(props);
        this.clearStore = this.clearStore.bind(this);
        this.handleOvershadowingClick = this.handleOvershadowingClick.bind(this);
    }

    clearStore() {
        this.props.clearStore();
    }

    handleOvershadowingClick(event) {
        this.props.openMenu();
    }

    render() {
        const {classes} = this.props;
        let newArrProducts = JSON.parse(window.localStorage.getItem('cartContent'));
        const products = newArrProducts.map((item) => {
            return <CartItem id={item.id} name={item.name} price={item.price}/>
        });
        let totalSum = 0;

        if (this.props.listOfPrices.length !== 0) {
            totalSum = this.props.listOfPrices.reduce((reducer, item, index) => {
                reducer += item.price * item.mult;
                return reducer;
            }, 0);
        }

        let DisabledButton = <button className={classes.Cart_Button_disabled_Buy} disabled>Checkout</button>;
        return (
            <div className={classes.Cart_root}>
                <div className={this.props.menuIsOpen ? classes.Page_overshadowing_Active : classes.Page_overshadowing}
                     onClick={this.handleOvershadowingClick}></div>
                <div className={classes.Cart_SideBar_Container}><SideBar/></div>
                <Grid container direction={"row"} justify={"space-evenly"}>
                    <Grid item xs={4}>
                        <Typography variant={"h5"} className={classes.Cart_heading}>Name</Typography>
                    </Grid>
                    <Grid item xs={4}><Typography variant={"h5"} className={classes.Cart_heading}>Quantity</Typography></Grid>
                    <Grid item xs={4}><Typography variant={"h5"}
                                                  className={classes.Cart_heading}>Price</Typography></Grid>
                </Grid>
                <hr/>
                {products}
                <Paper className={classes.Cart_Paper}>
                    <Grid container direction={"row"}>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item><Typography className={classes.Cart_totalPrice} variant={"h5"}>Total price:
                                    ${totalSum.toFixed(2)}</Typography></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justify={"flex-end"}>
                                <Grid item><Link to={`/purchasedProducts`}>{totalSum.toFixed(2) <= 0 ? DisabledButton :
                                    <button className={classes.Cart_Button_Buy}
                                            onClick={this.clearStore}>Checkout</button>}</Link></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
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
        clearStore: () => {
            dispatch({type: "CLEAR_STORE"})
        },
        openMenu: () => {
            dispatch({type: "OPEN_MENU"})
        },
    }
};

Cart = withStyles(styles)(Cart);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);