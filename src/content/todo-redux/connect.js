/**
 * Created by Administrator on 2017/8/23.
 */

import {connect} from 'react-redux';
//import {createStore} from 'redux'
//import reducer from './reducer';
import TODO from './todo';


//let store=createStore(reducer);

var connectTODO=function(store){
    return{
        active : store.todoReducer.active,
        value : store.todoReducer.value
    }
}
let TODOConnect=connect(connectTODO)(TODO) ;
/*let TODOAPP = (<Provider store={store}>
                    <TODOConnect />
            </Provider>);*/
export default TODOConnect;