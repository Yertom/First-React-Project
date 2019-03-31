import React, {Component} from "react";
import {connect} from "react-redux";
import SideBar from "../Body/SideBar/SideBar";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Products from "../../../products"

const styles = theme => ({
    root: {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    ProductDescription_root: {
        marginTop: 33,
        marginRight: 33,
        marginLeft: 33,
        paddingRight: 30,
        paddingLeft: 30,
        position: "relative",
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            marginLeft: 0,
        },
    },
    ProductDescription_container: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
        },
    },
    ProductDescription_heading: {
        marginBottom: 20,
    },
    ProductDescription_item: {
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 10,
    },
    ProductDescription_fakeImg: {
        background: "gray",
        height: 500,
        [theme.breakpoints.down('xs')]: {
            height: 300,
        },
    },
    ProductDescription_test: {
        background: "black",
        height: 100,
        width: 200,
        margin: 10,
    },
    ProductDescription_rightContentRoot: {
        marginTop: 85,
        padding: 20,
        backgroundColor: "whitesmoke"
    },
    ProductDescription_buyButton: {
        background: "#00a046",
        padding: "9px",
        paddingLeft: "49px",
        paddingRight: "49px",
        color: "white",
        border: "1px solid #00a046",
        fontSize: 24,
        cursor: "pointer",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            textAlign: "center",
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
    ProductDescription_disabled_buyButton: {
        background: "#721c24",
        padding: "9px",
        paddingLeft: "49px",
        paddingRight: "49px",
        color: "whitesmoke",
        border: "1px solid transparent",
        fontSize: 24,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            textAlign: "center",
        },
        transition: "background-color .2s",
    },
    ProductDescription_price: {
        color: "#004085",
        backgroundColor: "#cce5ff",
        borderColor: "#b8daff",
        padding: "7px",
        paddingBottom: "9px",
        paddingLeft: "50px",
        paddingRight: "50px",
        fontSize: 24,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            textAlign: "center",
        },
    },
    ProductDescription_description: {
        marginBottom: 200,
        padding: 20,
    },
    ProductDescription_leftArrow: {
        position: "absolute",
        top: "50%",
        left: "-33px",
        textDecoration: "none",
        border: "1px solid transparent",
        color: "black",
        transition: "border .2s",
        '&:hover': {
            backgroundColor: "white",
            color: "#00a046",
            border: "1px solid #00a046",
        },
        "&:active": {
            backgroundColor: "#c3e6cb",
        },
        [theme.breakpoints.down('xs')]: {
            position: "absolute",
            top: "50%",
            left: "-20px",
            textDecoration: "none",
            border: "1px solid transparent",
            color: "black",
            '&:hover': {
                color: "#00a046",
                backgroundColor: "transparent",
                border: "1px solid transparent",
            },
            "&:active": {
                color: "#c3e6cb",
            },
        },

    },
    ProductDescription_rightArrow: {
        position: "absolute",
        right: "-33px",
        top: "50%",
        textDecoration: "none",
        color: "black",
        border: "1px solid transparent",
        transition: "border .2s",
        '&:hover': {
            backgroundColor: "white",
            color: "#00a046",
            border: "1px solid #00a046",
        },
        "&:active": {
            backgroundColor: "#c3e6cb",
        },
        [theme.breakpoints.down('xs')]: {
            position: "absolute",
            top: "50%",
            right: "-20px",
            textDecoration: "none",
            color: "black",
            '&:hover': {
                color: "#00a046",
                backgroundColor: "transparent",
                border: "1px solid transparent",
            },
            "&:active": {
                color: "#c3e6cb",
            },
        },
    },
    ProductDescription_leftArrow_icon: {
        fontSize: 57,
    },
    ProductDescription_rightArrow_icon: {
        fontSize: 57,
    },
    ProductDescription_stocked_Yes: {
        color: "#155724",
        backgroundColor: "#d4edda",
        borderColor: "#c3e6cb",
        padding: 13,
        paddingBottom: 14,
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    ProductDescription_stocked_No: {
        color: "#721c24",
        backgroundColor: "#f8d7da",
        borderColor: "#f5c6cb",
        padding: 13,
        paddingBottom: 14,
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    ProductDescription_SideBar_Container: {

        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    ProductDescription_success_message: {
        color: "#155724",
        backgroundColor: "#d4edda",
        borderColor: "#c3e6cb",
        padding: 13,
        paddingBottom: 14,
        position: "absolute",
        width: "100%",
        left: 0,
        top: "-40px",
        opacity: "0",
        cursor: "default",
        userSelect: "none",
        transition: "opacity 1s ease-in",
    },

    ProductDescription_success_message_Active: {
        color: "#155724",
        backgroundColor: "#d4edda",
        borderColor: "#c3e6cb",
        padding: 13,
        paddingBottom: 14,
        position: "absolute",
        width: "100%",
        left: 0,
        top: "-40px",
        opacity: "1",
        cursor: "default",
        userSelect: "none",
        transition: "opacity 1s ease-in",
    },

    ProductDescription_failure_message: {
        color: "#004085",
        backgroundColor: "#cce5ff",
        borderColor: "#b8daff",
        padding: 13,
        paddingBottom: 14,
        position: "absolute",
        width: "100%",
        left: 0,
        top: "-40px",
        opacity: "0",
        cursor: "default",
        userSelect: "none",
        transition: "opacity 1s ease-in",
    },
    ProductDescription_failure_message_Active: {
        color: "#004085",
        backgroundColor: "#cce5ff",
        borderColor: "#b8daff",
        padding: 13,
        paddingBottom: 14,
        position: "absolute",
        width: "100%",
        left: 0,
        top: "-40px",
        opacity: "1",
        cursor: "default",
        userSelect: "none",
        transition: "opacity 1s ease-in",
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

class ProductDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
            isInCart: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.handleOvershadowingClick = this.handleOvershadowingClick.bind(this);
    }

    componentDidUpdate(prevState) {
        clearTimeout(this.timerID);
        if (this.state.isShown) {
            this.timerID = setTimeout(() => {
                this.setState((prevState) => ({
                    isShown: !prevState.isShown,
                }))
            }, 4000)
        }
    }

    handleOvershadowingClick(event) {
        this.props.openMenu();
    }

    handleArrowClick() {
        this.setState((prevState) => (
            {
                isShown: false,
                arrowClicked: !prevState.arrowClicked,
            }
        ))
    }

    handleClick() {
        if (!this.state.isShown) {
            let isInCart = this.props.cartContent.find((item) => {
                return this.props.match.params.productId == item.id;
            });
            const product = Products.find((item) => {
                return this.props.match.params.productId == item.id
            });
            this.props.addProduct(this.props.match.params.productId, product.price);

            this.setState((prevState) => ({
                isShown: !prevState.isShown,
                isInCart: isInCart,
            }))
        }
    }

    render() {
        const {classes} = this.props;
        const product = Products.find((item) => {
            return this.props.match.params.productId == item.id
        });
        let DisabledButton = <button className={classes.ProductDescription_disabled_buyButton} disabled>Buy</button>;
        let prevId = +this.props.match.params.productId - 1;
        let nextId = +this.props.match.params.productId + 1;
        return (
            <div className={classes.root}>
                <div className={this.props.menuIsOpen ? classes.Page_overshadowing_Active : classes.Page_overshadowing}
                     onClick={this.handleOvershadowingClick}></div>
                <div className={classes.ProductDescription_SideBar_Container}><SideBar/></div>
                <div className={classes.ProductDescription_root}>
                    <p className={this.state.isInCart && this.state.isShown ? classes.ProductDescription_failure_message_Active : classes.ProductDescription_failure_message}>This
                        product is already in the
                        cart</p>
                    <p className={!this.state.isInCart && this.state.isShown ? classes.ProductDescription_success_message_Active : classes.ProductDescription_success_message}>This
                        product has been added to the
                        cart</p>

                    {prevId !== 0 ? <Link to={`/ProductDescription/${prevId}`}
                                          className={classes.ProductDescription_leftArrow}
                                          onClick={this.handleArrowClick}><ArrowLeft
                        className={classes.ProductDescription_leftArrow_icon}/></Link> : null}

                    {nextId > Products.length ? null : <Link to={`/ProductDescription/${nextId}`}
                                                             className={classes.ProductDescription_rightArrow}
                                                             onClick={this.handleArrowClick}><ArrowRight
                        className={classes.ProductDescription_rightArrow_icon}/></Link>}

                    <Typography className={classes.ProductDescription_heading}
                                variant={"h2"}>{product.name}</Typography>
                    <div className={classes.ProductDescription_fakeImg}></div>
                    <Grid container className={classes.ProductDescription_container}>
                        <Grid item>
                            <Grid container className={classes.ProductDescription_container}>
                                <Grid item>
                                    {product.stocked ? <button onClick={this.handleClick}
                                                               className={classes.ProductDescription_buyButton}>Buy
                                    </button> : DisabledButton}
                                </Grid>
                                <Grid item><p className={classes.ProductDescription_price}>{product.price}</p></Grid>
                            </Grid>
                        </Grid>
                        <Grid item><p
                            className={product.stocked ? classes.ProductDescription_stocked_Yes : classes.ProductDescription_stocked_No}>Stocked: {product.stocked ? "Yes" : "No"}</p>
                        </Grid>
                    </Grid>
                    <Paper><Typography variant={"body1"} className={classes.ProductDescription_description}>Lorem ipsum
                        dolor sit amet,
                        consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.Description: Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.Description: Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing</Typography></Paper>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartContent: state.cartContent,
        menuIsOpen: state.menuIsOpen,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (id, price) => {
            dispatch({type: "ADD_PRODUCT", id: id, price: price,})
        },
        openMenu: () => {
            dispatch({type: "OPEN_MENU"})
        },
    }
};


ProductDescription = withStyles(styles)(ProductDescription);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);