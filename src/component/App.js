import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../logic/Calculate.js';

export default class App extends React.Component{
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }    

    handleClick = button =>{
        if(button === "="){
            this.calculate();
        }

        else if(button === "AC"){
            this.reset();
        }
        else if(button === "Del"){
            this.backspace();
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    reset = () => {
        this.setState({
            result: ""
        })
    };

     backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
     calculate = () => {
        try{
            this.setState({
                // eslint-disable-next-line
                result : (eval(this.state.result) || "") + ''
            })
        }catch(e){
            this.setState({
                result:'error'
            })
        }
    }
    render(){
        return(
            <div className="component-app">
                <Display result={this.state.result}/>
                <ButtonPanel clickHandler={this.handleClick}/>
            </div>
        )
    }
}