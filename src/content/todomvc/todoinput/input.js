/**
 * Created by Administrator on 2017/8/5.
 */
import React,{Component} from 'react';
import '../../../iconfont.css';
import './style.css';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state={
            value : '',
            iconStatus : false

        }
        this.handleChange=this.handleChange.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
        this.handleIconClick=this.handleIconClick.bind(this);
    }

    handleChange(e){
        this.setState({value : e.target.value});
    }

    handleKeyDown(e){
        let value=e.target.value;
        if(e.keyCode==13&&value!=''){   //按下的是enter键
            this.props.onHandleKeyDown(value);
            this.setState({value : '',iconStatus : true});
        }
    }
    handleIconClick(){
        this.props.onItemListDisplay(!this.state.iconStatus);
            this.setState((prevState)=>({
                    iconStatus : !prevState.iconStatus
            }));
    }
    render(){
        //let icon=this.state.iconStatus ;
        return (<div className="input-box">
                <i className="show-button iconfont" onClick={this.handleIconClick} dangerouslySetInnerHTML={ {__html : (this.state.iconStatus? '&#xe6ca;': '&#xe62b;')} }></i>
                <input value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown}></input>
            </div>
            );
    }
}