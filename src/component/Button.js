import React from 'react';
import './Button.css';
import propTypes from 'prop-types';

export default class Button extends React.Component{
    static propTypes={
        name : propTypes.string,
        orange : propTypes.bool,
        wide : propTypes.bool,
        clickHandler : propTypes.func
    };

    handleClick = () => {
        this.props.clickHandler(this.props.name);
      };

    
    render(){
        
        const classNameArray = 
        [
            "component-button",
            this.props.orange ? "orange" : "", //conditional operator
            this.props.wide ? "wide" : "", //condition ? expressionIfTrue : expressionIfFalse
        ];                                  
        //making this css class reusable 
        return(
            //concatenate the  css stlye names i.e array to string and remove whites spaces 
            //from both ends of the string
            <div className={classNameArray.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}