/**
 * Created by Administrator on 2017/8/5.
 */
import React,{Component} from 'react';
import './style.css';

export default class ControlBar extends Component{
    constructor(props){
        super(props);
        this.state={
            counter : this.props.counter
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){

        this.props.onControlBarClick(e);
    }
    render(){

        return (
            <div className="control-bar">
                <span>{this.props.counter} items left</span>
                <div className="show-bar">
                    <button onClick={this.handleClick} value="showAll">All</button>
                    <button onClick={this.handleClick} value="showActive">Active</button>
                    <button onClick={this.handleClick} value="showCompleted">Completed</button>
                </div>
                <button className="clear-button" onClick={this.props.onClearCompleted } value="clearCompleted">Clear completed</button>
            </div>
        );
    }
}