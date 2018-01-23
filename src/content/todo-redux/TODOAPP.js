/**
 * Created by Administrator on 2017/8/23.
 */
import React,{Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TODOConnect from './connect';
import reducer from './reducer';



class  TODOAPP extends Component{
    render(){
        var store=createStore(reducer);
        return <Provider store={store}>
            <TODOConnect />
        </Provider>
    }
}

export  default TODOAPP;

