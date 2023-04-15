import React from "react";
import Searchbar from "./SearchBar";
import { Link } from "react-router-dom";

class DynamicPage extends React.Component(){ 
    // This for the props we are going to display on the page 
    // still 
    constructor(props) { 
        super(props)
        this.state ={
            housingChoice: "",
            showSuggestion: false,
            post_text: "",
            postMessage: "",
            img:[], 
            ammeties: []
        }
    }
    submitHandler = event => { 
        event.preventDefault();

    }

    render() { 
        return (
            <div>

            </div>
        ); 
    }
}

export default DynamicPage;