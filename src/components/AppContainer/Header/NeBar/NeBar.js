import React, {Component} from "react";
import BarLeftSide from "./BarLeftSide/BarLeftSide";
import BarRightSide from "./BarRightSide/BarRightSide";
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    bar_root: {
        width: "100%",
    }
});

class Bar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.bar_root}>
                <Grid container alignItems={"center"} wrap={"nowrap"} direction={"row"}>
                    <Grid xs={11} item><BarLeftSide/></Grid>
                    <Grid item><BarRightSide/></Grid>
                </Grid>
            </div>)
    }


}

export default withStyles(styles)(Bar);