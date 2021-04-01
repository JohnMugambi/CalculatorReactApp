import React from 'react';
import './ButtonPanel.css';
import Button from './Button';
import propTypes from 'prop-types';


export default class ButtonPanel extends React.Component{
    static propTypes ={
        clickHandle : propTypes.func,
    };
    
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
      };

    render(){
        return(
            <div className= "component-button-panel">
                <div>
                    <Button name='AC' clickHandler={this.handleClick}/>
                    <Button name='+/-' clickHandler={this.handleClick}/>
                    <Button name='%' clickHandler={this.handleClick}/>
                    <Button name='Del' clickHandler={this.handleClick} orange/>
                    
                </div>
                <div>
                    <Button name='7' clickHandler={this.handleClick}/>
                    <Button name='8' clickHandler={this.handleClick}/>
                    <Button name='9' clickHandler={this.handleClick}/>
                    <Button name='+' clickHandler={this.handleClick} orange/>
                </div>
                <div>
                    <Button name='4' clickHandler={this.handleClick}/>
                    <Button name='5' clickHandler={this.handleClick}/>
                    <Button name='6' clickHandler={this.handleClick}/>
                    <Button name='-' clickHandler={this.handleClick} orange/>
                </div>
                <div>
                    <Button name='1' clickHandler={this.handleClick}/>
                    <Button name='2' clickHandler={this.handleClick}/>
                    <Button name='3' clickHandler={this.handleClick}/>
                    <Button name='*' clickHandler={this.handleClick}orange/>
                </div>
                <div>
                    <Button name='0' clickHandler={this.handleClick} wide/>
                    <Button name='.' clickHandler={this.handleClick}/>
                    <Button name='÷' clickHandler={this.handleClick} orange/>
                </div>
                <div>
                    <Button name='=' clickHandler={this.handleClick} orange/>
                </div>
            </div>
        );
    }
}