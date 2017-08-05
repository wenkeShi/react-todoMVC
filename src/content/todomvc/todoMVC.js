/**
 * Created by swk on 2017/8/5.
 */
import React,{Component} from 'react';
import Input from './todoinput/input';
import ItemList from './items/items';
import ControlBar from  './controlbar/controlbar';

export default class TodoMVC extends  Component{
    constructor(props){
        super(props);
        this.state={
            list : [],
            nodesLength: 0,
            controlSet : {
                showAll : true,
                showActive : false,
                showCompleted : false
            }
        };
        this.handleItemChange=this.handleItemChange.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);
        this.showNodesLength=this.showNodesLength.bind(this);
        this.handleControlBarClick=this.handleControlBarClick.bind(this);
        this.handleClearCompleted=this.handleClearCompleted.bind(this);
    }
    genNonDuplicateID (){    //生成唯一Id的函数
        let idStr=Date.now().toString();
        idStr+=Math.random().toString().substr(3);
        return idStr;
    }
    handleKeyDown(value){   //输入框按下Enter键时会触发 ，新增一个item
        let list=this.state.list;
        let item={
            value : value,
            completed : false,
            active : true,
            id :this.genNonDuplicateID()
        };
        list.push(item);
        this.setState({
            list : list
        });
    }
    handleItemChange(value ,id){       //编辑item时触发  改变item的值
        let list=this.state.list;
        console.log(list);
        list=list.map((item)=>{
            if(item.id===id){
                item.value=value;
            }
            return item;
        });
      /*  list.forEach((item)=>{
            if(item.id===id){
                item.value=value;
                return;
            }
        });*/
        this.setState({
            list : list
        });
    }

    handleItemClick(id,e){            //点击item上的两个按钮时触发
        let list = this.state.list;
        if(e.target.type==='checkbox'){   //点击单选框触发
            let isChecked=e.target.checked;
            for (let i = 0; i <= list.length; i++) {
                if (list[i].id === id) {
                    list[i].completed=isChecked;
                    list[i].active=!isChecked;
                    break;
                }
            }
        }else {      //item删除按钮处理事件
            for (let i = 0; i <= list.length; i++) {
                if (list[i].id === id) {
                    list.splice(i, 1);
                    break;
                }
            }
        }
        this.setState({
            list : list
        });
    }
    showNodesLength(length) {
        this.setState({nodesLength: length});
    }
    handleControlBarClick(e){                  //点击控制栏按钮时触发
        let controlSet=this.state.controlSet;
        if(e.target.value==='showAll'){
            controlSet.showAll=true;
            controlSet.showActive=false;
            controlSet.showCompleted=false;
        }else if(e.target.value==='showActive'){
            controlSet.showActive=true;
            controlSet.showAll=false;
            controlSet.showCompleted=false;
        }else if(e.target.value==='showCompleted'){
            controlSet.showCompleted=true;
            controlSet.showAll=false;
            controlSet.showActive=false;
        }
        this.setState({
            controlSet: controlSet
        });
    }

    handleClearCompleted() {             //清除Completed item时触发
        let list = this.state.list;
        let temp=[];
        for (let i = 0; i < list.length; i++) {
            if (list[i].completed) {
                continue;
            }
            temp.push(list[i]);
        }
        this.setState({
            list :temp
        });
    }


    render(){
        //console.log(this.state.list);
        console.log('render --todomvc');
        return(
            <div>
                <Input  onHandleKeyDown={this.handleKeyDown} />
                <ItemList list={this.state.list} onItemChange={this.handleItemChange} onHandleItemClick={this.handleItemClick}
                          controlSet={this.state.controlSet} showNodesLength={this.showNodesLength}/>
                <ControlBar onControlBarClick={this.handleControlBarClick} onClearCompleted={this.handleClearCompleted} />
            </div>
        );
    }
}