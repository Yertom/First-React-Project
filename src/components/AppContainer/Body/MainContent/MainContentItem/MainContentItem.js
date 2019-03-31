import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const styles = theme => ({
    MainContentItemCard_root: {
        width: 250,
        height: "100%",
        padding: 5,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: "100%",
            marginBottom: 10,
        },
        [theme.breakpoints.up('sm')]: {
            width: "100%",
            height: "100%",
            marginBottom: 10,
        },
        [theme.breakpoints.up('md')]: {
            width: "20vw",
            margin: 20,
            height: "100%",
            marginBottom: 0,
        },
        [theme.breakpoints.up('lg')]: {
            width: 250,
            margin: 20,
            height: "100%",
            marginBottom: 0,
        },
        transition: "background-color .5s",
        '&:hover': {
            backgroundColor: "#e2e1e1",
        },
    },
    MainContentItemCard_Img: {
        backgroundColor: "gray",
        height: 180,
    },
    MainContentItemCard_Title: {
        margin: 0,
        overflow: "hidden",
    },
    MainContentItem_Link: {
        color: "#123561",
        textDecoration: "none",
    }

});

class MainContentItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Link className={classes.MainContentItem_Link} to={`/ProductDescription/${this.props.id}`}>
                    <Card className={classes.MainContentItemCard_root}>
                        <Grid container direction={"column"}>
                            <Grid item>
                                <div className={classes.MainContentItemCard_Img}>

                                </div>
                            </Grid>
                            <Grid item container justify={"space-between"} alignItems={"center"} direction={"row"}>
                                <Typography variant={"h5"}
                                            className={classes.MainContentItemCard_Title}>{this.props.name}</Typography>
                                <Typography variant={"body1"}>{this.props.price}</Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Link>
            </div>
        )
    }
}

export default withStyles(styles)(MainContentItem);