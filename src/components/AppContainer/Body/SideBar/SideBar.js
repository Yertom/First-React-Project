import React, {Component} from "react";
import {connect} from "react-redux";
import SideBarItem from "./SideBarItem/SideBarItem";
import Grid from '@material-ui/core/Grid';
import products from "../../../../products";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    SideBar_ul: {
        listStyleType: "none",
        margin: 0,
    },
    SideBar_root: {
        width: "100%",
        zIndex: "999",
        backgroundColor: "whitesmoke",
        color: "#123561",
        transition: "transform 0.7s ease",
        [theme.breakpoints.down('sm')]: {
            position: "absolute",
            top: 0,
            width: 250,
            height: "100%",
            transform: "translateX(-100%)",
        },
    },
    SideBar_root_Active: {
        width: "100%",
        zIndex: "9999",
        backgroundColor: "whitesmoke",
        color: "#123561",
        transition: "transform 0.7s ease",
        [theme.breakpoints.down('sm')]: {
            position: "absolute",
            top: 0,
            width: 250,
            height: "100%",
            transform: "translateX(0%)",
        },
    },

    SideBar_allButton: {
        padding: 15,
        cursor: "pointer",
        marginTop: 10,
        transition: "background-color .2s",
        '&:hover': {
            backgroundColor: "#123561"
        },
    },
    SideBar_Link: {
        textDecoration: "none",
        color: "#123561",
        transition: "color .2s",
        '&:hover': {
            color: "white",
        },
    }
});

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
    }

    componentDidMount() {
        const checkArr = [];
        let arr = products.filter((item) => {
            if (!checkArr.includes(item.category)) {
                checkArr.push(item.category);
                return item.category;
            }
        });
        arr = arr.map((item)=>{
            return item.category;
        });
        this.setState({categories: arr,});
    }

    render() {
        const {classes} = this.props;
        const sideBarItems = this.state.categories.map((item) => {
            return <SideBarItem onclick={this.props.eventHandle} name={item}/>
        });
        return (
            <div className={this.props.menuIsOpen ? classes.SideBar_root_Active : classes.SideBar_root}>
                <ul className={classes.SideBar_ul}>
                    <Link to={"/"} className={classes.SideBar_Link}><li onClick={this.props.eventHandle} className={classes.SideBar_allButton}>All</li></Link>
                    {sideBarItems}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        menuIsOpen: state.menuIsOpen,
    }
};


SideBar = withStyles(styles)(SideBar);


export default connect(mapStateToProps)(SideBar);