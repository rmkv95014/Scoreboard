import React, { Component } from "react";

class AddPlayerForm extends Component
{
    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }
    state = {
        value: ""
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.value === "") return;
        else this.props.addPlayer(this.state.value);
        this.setState({value : ""});
    }

    render()
    {
        return (
            <form onSubmit = { this.handleSubmit }>
                <input type = "text" value = { this.state.value } onChange = { this.handleValueChange }placeholder = "Enter a player's name" />
                <input type = "submit" value = "Add Player"/>
            </form>
        );
    }
}

export default AddPlayerForm;