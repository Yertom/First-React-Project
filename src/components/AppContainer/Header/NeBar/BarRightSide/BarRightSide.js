import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const styles = theme => ({
    BarRightSide_root: {
        backgroundColor: "#123561",
        width: 100,
        border: "1px white solid",
        [theme.breakpoints.down('xs')]: {
            backgroundColor: "#123561",
            width: 50,
            border: "1px white solid",
        },
        transition: "background-color .3s",
        '&:hover': {
            backgroundColor: "#365071"
        },
    },
    BarRightSide_ShoppingCartContainer: {
        color: "white",
        textDecoration: "none",
    },
    BarRightSide_ShoppingCart: {
        marginTop: 11,
        marginRight: 5,
        fontSize: 30,
    },
    BarRightSide_ShoppingCart_Paragraph: {
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
    }

});

class BarRightSide extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Badge badgeContent={this.props.cartContent.length} color={"secondary"}>
                <div className={classes.BarRightSide_root}>
                    <Link to={"/Cart"} className={classes.BarRightSide_ShoppingCartContainer}>
                        <Grid container direction={"row"} justify={"center"} alignItems={"center"}>
                            <Grid item><ShoppingCart
                                className={classes.BarRightSide_ShoppingCart}></ShoppingCart></Grid>
                            <Grid item className={classes.BarRightSide_ShoppingCart_Paragraph}><p>Cart</p></Grid>
                        </Grid>
                    </Link>
                </div>
            </Badge>)
    }


}

const mapStateToProps = (state) => {
    return {
        cartContent: state.cartContent,
    }
};


BarRightSide = withStyles(styles)(BarRightSide);

export default connect(mapStateToProps)(BarRightSide);
