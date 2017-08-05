/**
 * Created by Administrator on 2017/8/5.
 */
import React,{Component} from 'react';

export default class ControlBar extends Component{
    constructor(props){
        super(props);

    }

    render(){

        return (
            <div>
                <span>0 items left</span>
                <div>
                    <button>All</button>
                    <button onClick={this.handeClick}>Active</button>
                    <button onClick={this.handleClick}>Completed</button>
                </div>
                <span><a>Clear completed</a></span>
            </div>
        );
    }
}