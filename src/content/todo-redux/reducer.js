/**
 * Created by Administrator on 2017/8/23.
 */
import {combineReducers} from 'redux';

var  todoReducer=function(state,action){
    switch(action.type){
        case 'add':
            return
    }
    return {
        active : 'true',
        value : 'hello redux'
    }
}

var reducer = combineReducers({todoReducer});
export default reducer;