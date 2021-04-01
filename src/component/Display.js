import React from 'react';
import propTypes from 'prop-types';
import './Display.css';

export default class Display extends React.Component{
    static propTypes= {
        result: propTypes.string
    };
    render(){
        return(
            <div className="component-display">
                <div>{this.props.result}</div>
            </div>
        )
    }
}