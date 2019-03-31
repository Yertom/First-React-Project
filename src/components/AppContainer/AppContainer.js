import React, {Component} from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import ProductDescription from "./ProductDescription/ProductDescription";
import Cart from "./Cart/Cart";
import PurchasedProducts from "./PurchasedProducts/PurchasedProducts";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route} from "react-router-dom";

let newArrProducts = JSON.parse(window.localStorage.getItem('cartContent'));
let newArrPrices = JSON.parse(window.localStorage.getItem('listOfPrices'));

if (!newArrProducts && !newArrPrices) {
    window.localStorage.setItem('cartContent', JSON.stringify([]));
    window.localStorage.setItem('listOfPrices', JSON.stringify([]));
}

const styles = theme => ({

    AppContainer_root: {
        height: "100%",
    },
    AppContainer_container: {
        height: "100%",
    },
    main: {
        overflow: "auto",
        position: "relative",
        width: "100%",
        height: "100%",
    },
    wrapper: {
        [theme.breakpoints.up('lg')]: {
            margin: "0 auto",
            width: 1280,
            height: "100%",
        },
    },
    wrapper_Active: {
        [theme.breakpoints.up('lg')]: {
            margin: "0 auto",
            width: 1280,
            height: "100%",
        },
        height: "100%"
    },

});


class AppContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;
        return (
            <div className={classes.AppContainer_root}>
                <Router>
                    <div className={classes.AppContainer_container}>
                        <div className={classes.main}>
                            <Route exect path={["/", "/user/:id"]} component={Header}/>
                            <div className={this.props.menuIsOpen ? classes.wrapper_Active : classes.wrapper}>
                                <Route exact path={"/"} component={Body}/>
                                <Route exect path={"/ProductDescription/:productId"} component={ProductDescription}/>
                                <Route exect path={"/Cart"} component={Cart}/>
                                <Route exect path={"/purchasedProducts"} component={PurchasedProducts}/>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        menuIsOpen: state.menuIsOpen,
    }
};

AppContainer = withStyles(styles)(AppContainer);

export default connect(mapStateToProps)(AppContainer)

