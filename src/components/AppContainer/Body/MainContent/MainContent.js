import React, {Component} from "react";
import Products from "../../../../products";
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import MainContentItem from "./MainContentItem/MainContentItem";

const styles = {
    MainContent_root: {
        padding: 20,
    },
};

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: Products,
            currentProducts: Products,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentCategory !== prevProps.currentCategory) {
            const products = this.state.products.filter((item) => {
                if (item.category === this.props.currentCategory) {
                    return item
                }
            });
            this.setState({currentProducts: products});
        }
    }

    render() {
        const {classes} = this.props;
        let products = this.state.currentProducts.map((item) => {
            return <Grid xs={12} sm={6} md={4} item><MainContentItem key={item.id} id={item.id} stocked={item.stocked}
                                                                     price={item.price} name={item.name}/></Grid>
        });
        if (this.props.currentCategory === "All") {
            products = this.state.products.map((item) => {
                return <Grid xs={12} sm={6} md={4} item><MainContentItem key={item.id} id={item.id}
                                                                         stocked={item.stocked} price={item.price}
                                                                         name={item.name}/></Grid>
            });
        }
        return (
            <div className={classes.MainContent_root}>
                <Grid justify={"center"} container>
                    {products}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(MainContent);