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
            list : []
        };
        this.handleItemChange=this.handleItemChange.bind(this);
        this.handleKeyDown=this.handleKeyDown.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);
    }
    genNonDuplicateID (){
        let idStr=Date.now().toString();
        idStr+=Math.random().toString().substr(3);
        return idStr;
    }
    handleKeyDown(value){
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
    handleItemChange(value ,id){
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

    handleItemClick(id,e){
        let list = this.state.list;
        if(e.target.type==='checkbox'){
            let isChecked=e.target.checked;
            for (let i = 0; i <= list.length; i++) {
                if (list[i].id === id) {
                    list[i].completed=isChecked;
                    list[i].active=!isChecked;
                    break;
                }
            }
        }else {
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
    render(){
        //console.log(this.state.list);
        console.log('render --todomvc');
        return(
            <div>
                <Input  onHandleKeyDown={this.handleKeyDown} />
                <ItemList list={this.state.list} onItemChange={this.handleItemChange} onHandleItemClick={this.handleItemClick} />
                <ControlBar />
            </div>
        );
    }
}