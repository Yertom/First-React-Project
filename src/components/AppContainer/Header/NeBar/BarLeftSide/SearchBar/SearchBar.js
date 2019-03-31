import React, {Component} from "react";
import SearchResult from "./SearchResult/SearchResult";
import {withStyles} from '@material-ui/core/styles';
import Products from "../../../../../../products";

const styles = theme => ({
    SearchBar_input: {
        [theme.breakpoints.up('md')]: {
            paddingTop: 7,
            paddingBottom: 7,
            marginTop: 8,
            width: "50%",
            marginLeft: 30,
            backgroundColor: "#123561",
            color: "white",
            border: "1px solid white",
            "&:focus": {
                outline: "none",
            },
        },
        [theme.breakpoints.down('sm')]: {
            width: "80%",
            paddingTop: 7,
            paddingBottom: 7,
            marginTop: 8,
            marginLeft: 30,
            backgroundColor: "#123561",
            color: "white",
            border: "1px solid white",
            "&focus": {
                outline: "none",
            },
        },
    },
    SearchBar_container: {
        width: "50%",
        position: "absolute",
        marginLeft: 31,
        Height: 373,
        zIndex: 99999,
        backgroundColor: "whitesmoke",
    },
});

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSearch: '',
            isFocus: false,
            useBlur: true,
        };
        this.searchHandle = this.searchHandle.bind(this);
        this.focusHandle = this.focusHandle.bind(this);
        this.blurHandle = this.blurHandle.bind(this);
        this.useBlur = this.useBlur.bind(this);
    };

    useBlur(event) {
        console.log(this.state.useBlur);
        this.setState((prevState) => {
            return ({useBlur: !prevState.useBlur})
        })
    }

    searchHandle(event) {
        this.setState({currentSearch: event.target.value})
    }

    focusHandle(event) {
        this.setState((prevState) => {
            return ({isFocus: !prevState.isFocus})
        })
    }

    blurHandle(event) {
        if (this.state.useBlur) {
            this.setState((prevState) => {
                return ({isFocus: !prevState.isFocus})
            })
        }
    }

    render() {
        const {classes} = this.props;
        const searchResults = Products.map((item) => {
            if (item.name.includes(this.state.currentSearch)) {
                return <SearchResult onclick={this.focusHandle} onmouseUp={this.useBlur} onmouseDown={this.useBlur}
                                     key={item.id} id={item.id} name={item.name}/>;
            }
        });
        return (
            <div>
                <input
                    type={"text"}
                    className={classes.SearchBar_input}
                    placeholder={"Search..."}
                    onFocus={this.focusHandle}
                    onBlur={this.blurHandle}
                    onChange={this.searchHandle}
                />

                {this.state.currentSearch.trim() !== "" && this.state.isFocus === true ?
                    <div className={classes.SearchBar_container}>
                        {searchResults}
                    </div> : null}
            </div>
        )
    }
}

export default withStyles(styles)(SearchBar);