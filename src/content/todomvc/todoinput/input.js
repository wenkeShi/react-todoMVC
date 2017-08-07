/**
 * Created by Administrator on 2017/8/5.
 */
import React,{Component} from 'react';
import './style.css';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            value : ''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
    }

    handleChange(e){
        this.setState({value : e.target.value});
    }

    handleKeyDown(e){
        let value=e.target.value;
        if(e.keyCode==13&&value!=''){
            this.props.onHandleKeyDown(value);
            this.setState({value : ''});
        }
    }
    render(){

        return (<div className="input-box">
                <i className="show-button">^</i>
                <input value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown}></input>
            </div>
            );
    }
}