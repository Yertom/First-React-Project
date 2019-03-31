import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const styles = theme => ({
    SearchResult_container: {
        textDecoration: "none",
    },
    SearchResult: {
        position: "relative",
        width: "100%",
        paddingLeft: 7,
        paddingTop: 7,
        paddingBottom: 7,
        color: "black",
        transition: "background-color .3s",
        '&:hover': {
            backgroundColor: "#365071",
            color: "white",
        },
    },

});

class SearchResult extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props;
        return (
            <Link to={`/ProductDescription/${this.props.id}`} className={classes.SearchResult_container}><p
                onMouseUp={this.props.onmouseUp}
                onMouseDown={this.props.onmouseDown}
                onClick={this.props.onclick}
                className={classes.SearchResult}>{this.props.name}</p></Link>
        )
    }
}

export default withStyles(styles)(SearchResult);