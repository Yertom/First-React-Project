import React, {Component} from "react";
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import Close from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    CartItem_root: {
        position: "relative",
        marginBottom: 10,
        marginTop: 10,
    },
    CartItem_close: {
        position: "absolute",
        right: 0,
        color: "white",
        background: "#bd0f10",
        border: "none",
        transition: "background-color .2s",
        '&:hover': {
            backgroundColor: "white",
            color: "#bd0f10",
        },
        "&:focus": {
            outline: "none",
        },
        "&:active": {
            backgroundColor: "#f5c6cb",
        },
    },
    CartItem_input: {
        width: 27,
        marginLeft: 37,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 20,
        },

    },
    CartItem_close_icon: {
        fontSize: 16,
    },
    CartItem_fakeImg_container: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
    },
    CartItem_fakeImg: {
        backgroundColor: "gray",
        height: 50,
        width: 60,
    },
    CartItem_name_container: {
        width: 430,
    },
    CartItem_name: {
        width: 100,
    }

});

class CartItem extends Component {

    constructor(props) {
        super(props);
        this.inputHandle = this.inputHandle.bind(this);
        this.deleteHandle = this.deleteHandle.bind(this);
        this.blurHandle = this.blurHandle.bind(this);
    }

    inputHandle(event, id, price) {
        this.props.countPrice(event.target.value, id, price)
    }

    blurHandle(event, id, price) {
        if (event.target.value === "" || event.target.value === "0") {
            this.props.countPrice(1, id, price)
        }
    }

    deleteHandle(event, id) {
        this.props.deleteProduct(id)
    }

    render() {
        const {classes} = this.props;
        let currentMult = {};
        let newArrPrices = JSON.parse(window.localStorage.getItem('listOfPrices'));
        currentMult = newArrPrices.find((item) => {
            if (item.id == this.props.id) {
                return item;
            }
        });

        if (!currentMult) {
            currentMult = "";
        }

        return (
            <div>
                <div className={classes.CartItem_root}>
                    <button className={classes.CartItem_close} onClick={(e) => this.deleteHandle(e, this.props.id)}>
                        <Close className={classes.CartItem_close_icon}></Close></button>
                    <Grid container direction={"row"} justify={"space-evenly"}>
                        <Grid item xs={4}>
                            <Grid container direction={"row"} className={classes.CartItem_name_container}>
                                <Grid item xs={2} className={classes.CartItem_fakeImg_container}>
                                    <div className={classes.CartItem_fakeImg}></div>
                                </Grid>
                                <Grid item xs={10}><Typography variant={"body1"}
                                                               className={classes.CartItem_name}>{this.props.name}</Typography></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}><input onChange={(e) => this.inputHandle(e, this.props.id, this.props.price)}
                                                 value={currentMult === "" ? 1 : currentMult.mult}
                                                 name={"numberInput"} type={"text"}
                                                 className={classes.CartItem_input}
                                                 autoComplete={"off"}
                                                 onBlur={(e) => this.blurHandle(e, this.props.id, this.props.price)}
                        /></Grid>
                        <Grid item xs={4}><Typography variant={"body1"}>{this.props.price}</Typography></Grid>
                    </Grid>
                </div>
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listOfPrices: state.listOfPrices,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        countPrice: (mul, id, price) => {
            dispatch({type: "ADD_PRICE", id: id, price: price, mul: mul})
        },
        deleteProduct: (id) => {
            dispatch({type: "DELETE_PRODUCT", id: id})
        },
    }
};

CartItem = withStyles(styles)(CartItem);

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);