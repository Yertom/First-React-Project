import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import SideBar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";
import {connect} from "react-redux";

const styles = theme => ({
    Body_SideBar: {
        backgroundColor: "whitesmoke",
    },
    Body_container: {
        overflowX: "hidden",
        position: "relative",
        [theme.breakpoints.up('lg')]: {
            overflowX: "hidden",
            position: "relative",
            height: "auto",
        },
    },
    Body_MainContent: {
        width: "100%",
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

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCategory: "All",
        };
        this.CategoryChange = this.CategoryChange.bind(this);
        this.handleOvershadowingClick = this.handleOvershadowingClick.bind(this);
    }

    CategoryChange(event) {
        this.setState({
            currentCategory: event.target.innerHTML,
        })
    }

    handleOvershadowingClick(event) {
        this.props.openMenu();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Body_container}>
                <div className={this.props.menuIsOpen ? classes.Page_overshadowing_Active : classes.Page_overshadowing}
                     onClick={this.handleOvershadowingClick}></div>
                <Grid wrap={"nowrap"} direction={"row"} container>
                    <Grid item md={2} lg={2} className={classes.Body_SideBar}><SideBar
                        eventHandle={this.CategoryChange}/></Grid>
                    <Grid item md={10} lg={10} className={classes.Body_MainContent}><MainContent
                        currentCategory={this.state.currentCategory}/></Grid>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
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


Body = withStyles(styles)(Body);

export default connect(mapStateToProps, mapDispatchToProps)(Body)