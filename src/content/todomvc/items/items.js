/**
 * Created by Administrator on 2017/8/5.
 */
import React,{Component} from 'react';
import '../../../iconfont.css';
import './style.css';

 class Item extends Component{
    constructor(props){
        super(props);
        //let content=this.props.content;   不要再constructor函数里面将state的值设为this.props
        this.state={
           // className : '',
           // completed : this.props.completed, //模拟checkbox的点击状态   这种写法有问题？？？？？？？？？   只在初始化时才执行，上层传的参数变化之后，这里的状态不会变
            readOnly : true,
            /*content : content,*/
            //checked : false
        };
        this.handleDoubleClick=this.handleDoubleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.getStyle=this.getStyle.bind(this);
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
         let type=e.target.getAttribute('data-type');
            console.log(e.target.getAttribute('data-type'));
             this.props.onHandleItemClick(this.props.id,e,type);

     }
    getStyle(){
        let style={};
        if(this.props.completed){
            style={
              color : '#cccccc',
                textDecoration : 'line-through'
            };
        }
        return style;
    }
    render(){
        let isCompeleted=this.props.completed;
        console.log('render --Item =============================='+isCompeleted);

        {/*dangerouslySetInnerHTML={{__html : !compeletd ? '&#xe638;' : '&#xe632;'}}*/}
        return (
            <div className="item" key={this.props.id} >
                { /*<input type="checkbox" checked={this.props.completed} className="completed-button" onChange={this.handleClick}/>*/}
                <i data-type="checkbox" data-checked={isCompeleted} className="completed-button iconfont"
                   onClick={this.handleClick}  dangerouslySetInnerHTML={{__html : !isCompeleted ? '&#xe638;' : '&#xe722;'}}></i>
                <input className="content-input " style={this.getStyle()} onDoubleClick={this.handleDoubleClick} readOnly={this.state.readOnly}
                       value={this.props.content} onChange={this.handleChange} onBlur={this.handleBlur}></input>
                <button className="delete-item" data-type="button" onClick={this.handleClick}>&#xe6bb;</button>
            </div>
        );
    }
}


export default class ItemList extends Component{
    constructor(props){
        super(props);
       /* this.state={
            nodesLength : 0
        }*/
    }

    render(){
        //
        let itemList=this.props.list;
       /* let isShowAll=this.props.controlSet.showAll;
        let isShowActive = this.props.controlSet.showActive;
        let isShowCompleted=this.props.controlSet.showCompleted;*/
        let status=this.props.status;
        let nodes=[];
        //if(/*isShowAll*/status =='showAll'){
            nodes=itemList.map((item)=>{
                return <Item content={item.value} key={item.id} id={item.id} completed={item.completed} onItemChange={this.props.onItemChange} onHandleItemClick={this.props.onHandleItemClick}/>
            });
        //}
       /* else if(isShowActive status=='showActive'){
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
        }*/
      /*  this.props.showNodesLength(nodes.length);*/
        return <div style={this.props.listStatus ?null:{display : 'none'} }>
                {nodes}
            </div>;
    }
}

