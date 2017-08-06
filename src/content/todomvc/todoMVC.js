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
           /* controlSet : {
                showAll : true,
                showActive : false,
                showCompleted : false
            },*/
            status : 'showAll',
            activeCounter : 0,  //active item的计数器
           // counter : 0        
        };
        this.handleItemChange=this.handleItemChange.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);
        //this.showNodesLength=this.showNodesLength.bind(this);
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
        this.setState((prevState)=>({
            list : list,
            activeCounter : prevState.activeCounter+1
        }));
    }
    handleItemChange(value ,id){       //编辑item时触发  改变item的值
        let list=this.state.list;
        /*console.log(list);*/
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
        let activeCounter=this.state.activeCounter;
        if(e.target.type==='checkbox'){   //点击单选框触发
            let isChecked=e.target.checked;
            for (let i = 0; i <= list.length; i++) {
                if (list[i].id === id) {
                    /*console.log(isChecked);*/
                    isChecked?--activeCounter:activeCounter++;
                    list[i].completed=isChecked;  //勾选时减一没勾选加一
                    list[i].active=!isChecked;
                    break;
                }
            }
        }else {      //item删除按钮处理事件
            for (let i = 0; i <= list.length; i++) {
                if (list[i].id === id) {
                    list[i].active ? activeCounter-- : null;
                    list.splice(i, 1)
                    break;
                }
            }
        }
        this.setState({
            list : list,
            activeCounter : activeCounter
        });
    }
 /*   showNodesLength(length) {
        this.setState({nodesLength: length});
    }*/
    handleControlBarClick(e){                  //点击控制栏按钮时触发
        /*let controlSet=this.state.controlSet*/;
       // let counter=this.state.counter;
        let status=this.state.status;
        if(e.target.value==='showAll'){
            /*controlSet.showAll=true;
            controlSet.showActive=false;
            controlSet.showCompleted=false;*/
           // counter=this.state.list.length;
            status='showAll';
        }else if(e.target.value==='showActive'){
            /*controlSet.showActive=true;
            controlSet.showAll=false;
            controlSet.showCompleted=false;*/
           // counter=this.state.activeCounter;
            status='showActive';
        }else if(e.target.value==='showCompleted'){
          /*  controlSet.showCompleted=true;
            controlSet.showAll=false;
            controlSet.showActive=false;*/
            //ounter=this.state.list.length-this.state.activeCounter;
            status='showCompleted';
        }
        this.setState({
            /*controlSet: controlSet,*/
            //counter :counter,
            status : status
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
        //console.log('render --todomvc');
        let status=this.state.status;
        let list =this.state.list;
        let activeCounter=this.state.activeCounter;
        let counter=(status==='showAll')? list.length :(status==='showActive' ? activeCounter : list.length-activeCounter);
        let activeItems=[];    //优化了status判断，在render方法里面判断而不是传到组件ItemList之后判断
        let completedItems=[];
        list.forEach((item)=>{
            item.active?activeItems.push(item):completedItems.push(item);
        });
        list=(status==='showActive')? activeItems :(status==='showCompleted' ? completedItems : list);
        return(
            <div>
                <Input  onHandleKeyDown={this.handleKeyDown} />
                <ItemList list={list} onItemChange={this.handleItemChange} onHandleItemClick={this.handleItemClick}
                          /*controlSet={this.state.controlSet}*/ status={status}/>
                <ControlBar counter={counter} onControlBarClick={this.handleControlBarClick} onClearCompleted={this.handleClearCompleted} />
            </div>
        );
    }
}