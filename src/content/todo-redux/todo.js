/**
 * Created by Administrator on 2017/8/23.
 */
import React, {Component} from 'react';



class TODO extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {active,value}=this.props;
        return <div>
            {value}
        </div>
    }
}

export default TODO;