/**
 * Created by Administrator on 2017/8/5.
 */
import React,{Component} from 'react';
import './itemstyle.css';

 class Item extends Component{
    constructor(props){
        super(props);
        let content=this.props.content;
        this.state={
            className : '',
            readOnly : true,
            content : content
        };
        this.handleDoubleClick=this.handleDoubleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleDoubleClick(e){

        this.setState({readOnly: false});
        e.target.focus();
        console.log(this.state.readOnly)

    }

     handleChange(e){
         let id=this.props.id;
         /*this.setState({
             content : this.props.content
         });*/
         this.props.onItemChange(e.target.value,id);

     }
     handleBlur(){
         this.setState({
             readOnly : true
         });
     }

     handleClick(e){
             this.props.onHandleItemClick(this.props.id,e);

     }

    render(){
        console.log('render --Item');
        return (
            <div className="item" key={this.props.id}>
                <input type="checkbox" checked={this.props.completed} className="completed-button" onChange={this.handleClick}/>
                <input className="content-input" onDoubleClick={this.handleDoubleClick} readOnly={this.state.readOnly}
                       value={this.props.content} onChange={this.handleChange} onBlur={this.handleBlur}></input>
                <button className="delete-item" onClick={this.handleClick}>X</button>
            </div>
        );
    }
}


export default class ItemList extends Component{
    constructor(props){
        super(props);
        this.state={
            nodesLength : 0
        }
    }


    render(){
        console.log('render --ItemList');
        let itemList=this.props.list;
        let isShowAll=this.props.controlSet.showAll;
        let isShowActive = this.props.controlSet.showActive;
        let isShowCompleted=this.props.controlSet.showCompleted;
        let nodes=[];
        if(isShowAll){
            nodes=itemList.map((item)=>{
                return <Item content={item.value} key={item.id} id={item.id} completed={item.completed} onItemChange={this.props.onItemChange} onHandleItemClick={this.props.onHandleItemClick}/>
            });
        }else if(isShowActive){
            for(let i=0;i<itemList.length;i++){
                let item=itemList[i];
                if(item.active){
                    let itemNode=<Item content={item.value} key={item.id} id={item.id} completed={item.completed} onItemChange={this.props.onItemChange} onHandleItemClick={this.props.onHandleItemClick}/>;
                    nodes.push(itemNode);
                }
            }
        }else{
            for(let i=0;i<itemList.length;i++){
                let item=itemList[i];
                if(item.completed){
                    let itemNode=<Item content={item.value} key={item.id} id={item.id} completed={item.completed} onItemChange={this.props.onItemChange} onHandleItemClick={this.props.onHandleItemClick}/>;
                    nodes.push(itemNode);
                }
            }
        }
      /*  this.props.showNodesLength(nodes.length);*/
        return <div >
                {nodes}
            </div>;
    }
    componentDidMount(){

    }
}

