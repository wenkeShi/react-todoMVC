/**
 * Created by Administrator on 2017/8/5.
 */
import React,{Component} from 'react';
import './style.css';

export default class ControlBar extends Component{
    constructor(props){
        super(props);
        this.state={
            /*counter : this.props.counter*/
            _active  : 'showAll'      //用来记录哪个按钮是激活状态，也就是被点击了
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({
            _active : e.target.value          //点击时将激活状态改变为按钮的值
        });
        this.props.onControlBarClick(e);
    }
    render(){
        let active =this.state._active;
        return (
            <div className="control-bar">
                <span>{this.props.counter} items left</span>
                <div className="show-bar">                              {/* 渲染时，className根据激活状态来确定，若激活状态等于该按钮的值，则表示该按钮是激活的*/}
                    <button onClick={this.handleClick} value="showAll" className={active==='showAll'?'active':null}>All</button>
                    <button onClick={this.handleClick} value="showActive" className={active==='showActive'?'active':null}>Active</button>
                    <button onClick={this.handleClick} value="showCompleted" className={active==='showCompleted'?'active':null}>Completed</button>
                </div>
                <button className="clear-button" onClick={this.props.onClearCompleted } value="clearCompleted">Clear completed</button>
            </div>
        );
    }
}