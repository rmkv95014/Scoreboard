import React, { Component } from 'react';

class Stats extends Component 
{
    totalPoints = () => {
        return this.props.players.reduce((total, player) => {
            return total += player.score;
        }, 0)
    }
    render() 
    {
        return(
            <table className = "stats">
                <tbody>
                    <tr>
                        <td>Players:</td>
                        <td> { this.props.players.length }</td>
                    </tr>
                    <tr>
                        <td>Total Points:</td>
                        <td> { this.totalPoints() }</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Stats;